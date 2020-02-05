import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Navigation from '../container/Navigation';
import Footer from '../container/Footer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/fontawesome-free-solid';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Progress } from 'reactstrap';


import Registration from '../loginLogout/Registration';

class LoginLogout extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            password: '',
            forgotModal: false,

            email: '',
            serverMsg: '',
            linkToGmail: '',
            isLoading: false,
            hiddenButton: false,
            error: '',
            //Registration fields

        };
    }

    componentWillMount() {
        const fullURL = window.location.search.substring(1);
        const parameterArray = fullURL.split('&');
        console.log("fullURL = ", fullURL);
        console.log("parameterArray = ", parameterArray);
        console.log(!!fullURL);
        if (!!fullURL) {

            if (parameterArray == "" || parameterArray.length < 4) {
                history.push("/");
            } else {
                const currentParameterEmail = parameterArray[0].split('=');
                const currentParameterCode = parameterArray[1].split('=');
                const currentParameterTablename = parameterArray[2].split('=');
                const currentParameterID = parameterArray[3].split('=');

                const vCode = currentParameterCode[1]; //vcode leko
                const tablename = currentParameterTablename[1];
                const ID = currentParameterID[1];
                const email = currentParameterEmail[1];

                if (!!vCode && !!tablename && !!ID) {
                    this.setState({
                        idOfNewRegUser: ID
                    });
                    this.props.dispatch(startIsUrlValid(vCode, tablename, ID, email)).then(
                        (response) => {

                            if (response.data) {//change status to 1
                                this.props.dispatch(verifyUser(this.state.idOfNewRegUser)).then(
                                    (response) => response.data && alert("Your account is verified. Please login.")
                                );
                            }
                        }
                    );
                } else {
                    console.log("some parameters is missing");
                    history.push("/");
                }
                console.log(!!vCode, !!tablename, !!ID);
            }

        }

    }


    handleChange = event => {
        //console.log(event.target.name);
        if (event.target.name != "contact") {
            this.setState({
                [event.target.name]: event.target.value
            });
        } else {
            const contact = event.target.value;
            if (contact.match(/^[0-9]*$/)) {
                this.setState({
                    contact
                });
            }
        }


        //this condition only for forgetpassword not for login
        if (event.target.name == "email") {
            this.setState({
                hiddenButton: false,
                linkToGmail: false,
                serverMsg: ''
            });
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        if (!!this.state.userName && !!this.state.password) {

            this.props.dispatch(getToken(this.state.userName, this.state.password));

        }
    }

    toggleForgotModal = () => {
        this.setState({
            forgotModal: !this.state.forgotModal
        });
    }

    OnResetPasswordSubmit = (event) => {
        event.preventDefault();
        this.setState({ isLoading: true });
        this.props.dispatch(startForgetPasswordRequest(this.state.email)).then(
            (response) => {
                this.setState({ isLoading: false }),
                    response.data.split("!")[0] == "Success"
                        ? this.setState({ linkToGmail: true, hiddenButton: true })
                        : this.setState({ linkToGmail: false }),
                    this.setState({ serverMsg: response.data })
            });
    };

    render() {
        return (
            <div>
                {/* {!!this.props.token.redirect && <Redirect to={this.props.token.redirect} />} */}
                <Navigation />
                <section className="section-login">
                    <div className="col-md-6 col-lg-4 col-xl-3 m-auto login-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title text-center">Login</h4>
                                <hr />
                                <form id="loginForm" >

                                    <div className="form-group mt-2">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faUser} />
                                                </span>
                                            </div>

                                            <input name="userName" value={this.state.username}
                                                onChange={this.handleChange}
                                                className="form-control" placeholder="Email " type="text" required autoFocus />
                                            <br />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faLock} />
                                                </span>
                                            </div>
                                            <input name="password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                className="form-control"
                                                type="password"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-sm btn-primary btn-block"> Login </button>
                                    </div>

                                    <p className="text-center">
                                        {/* <a href="#" className="btn" data-toggle="modal" data-target="#forgotPasswordModal">Forgot password?
                                        </a> */}

                                        <Button color="link" onClick={this.toggleForgotModal}>Forgot Password ?</Button>
                                    </p>
                                    {/* <p className="text-center mt-2 ">Not a registered yet? </p> */}

                                </form>

                                <Registration />

                            </div>
                        </div>

                    </div>
                </section>


                {/* <!-- Forgot Password Modal --> */}

                <Modal isOpen={this.state.forgotModal} toggle={this.toggleForgotModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleForgotModal}>Your Email for Password Reset</ModalHeader>
                    <form onSubmit={this.OnResetPasswordSubmit}>
                        <ModalBody>
                            <input name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                className="form-control"
                                placeholder="Email"
                                type="email"
                            />
                        </ModalBody>
                        <ModalFooter>
                            {!!this.state.serverMsg &&
                                <span>
                                    <p>{this.state.serverMsg}</p>
                                    {this.state.linkToGmail &&
                                        <a href='https://www.google.com/gmail/' target='_blank'>click here</a>}
                                </span>}
                            {this.state.isLoading ? <div className="fa-2x  ">   <FontAwesomeIcon icon="spinner" pulse />   </div>
                                : <Button color="primary" hidden={this.state.hiddenButton} onClick={this.toggle}>Send Reset Link</Button>}
                        </ModalFooter>
                    </form>
                </Modal>

                <Footer />
            </div>
        );
    }
}



export default LoginLogout;