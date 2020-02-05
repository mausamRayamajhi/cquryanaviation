import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../container/Navigation';
import Footer from '../container/Footer';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/fontawesome-free-solid';
import { history } from '../../routers/AppRouter';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Progress } from 'reactstrap';


class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: '',
            confirmPassword: '',
            error: '',
            vCode: '',
            tablename: '',
            ID: '',
            email: ''
        };

    }
    componentWillMount() {
        const fullURL = window.location.search.substring(1);
        const parameterArray = fullURL.split('&');

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
                    vCode,
                    tablename,
                    ID,
                    email
                });
                this.props.dispatch(startIsUrlValid(vCode, tablename, ID, email)).then((response) => !response.data && history.push("/"));
            } else {
                console.log("some parameters is missing");
                history.push("/");
            }
            console.log(!!vCode, !!tablename, !!ID);
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    OnResetPasswordSubmit = (event) => {
        event.preventDefault();
        if (this.state.newPassword.length > 7) {
            if (this.state.newPassword === this.state.confirmPassword) {
                this.setState({ error: "" });
                this.props.dispatch(startResetPassword(this.state.vCode, this.state.tablename, this.state.ID, this.state.email, this.state.confirmPassword)).then(
                    (response) => {
                        if (!!response.data) {
                            this.props.dispatch(getToken(response.data, this.state.confirmPassword)).then(
                                history.push("/"),
                                alert("Password was reset successfull. You will be login automatically.")
                            );
                        } else {
                            alert("Something wrong with your request. Please again request to change password")
                        }
                    }
                );
            } else {
                this.setState({ error: "Password does not match." });
            }
        } else {
            this.setState({ error: "Password must be grater than 8 character." });
        }

    };
    render() {
        return (
            <div>

                {/* <Navigation /> */}
                <section className="section-login">
                    <div className="col-md-3 m-auto login-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title text-center">Reset Password</h4>
                                <hr />
                                <form onSubmit={this.OnResetPasswordSubmit}>

                                    <div className="form-group mt-2">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faUser} />
                                                </span>
                                            </div>

                                            <input name="newPassword"
                                                onChange={this.handleChange}
                                                value={this.state.newPassword}
                                                className="form-control" placeholder="New password" type="text" required />
                                            <br />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <FontAwesomeIcon icon={faUser} />
                                                </span>
                                            </div>
                                            <input name="confirmPassword"
                                                onChange={this.handleChange}
                                                value={this.state.confirmPassword}
                                                className="form-control" placeholder="Confirm password" type="text" required />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-sm btn-primary btn-block"> Reset </button>
                                        {!!this.state.error && <p className="text-center">{this.state.error}</p>}
                                    </div>



                                </form>

                            </div>
                        </div>

                    </div>
                </section>
                {/* <Footer /> */}
            </div>
        );
    }
}


const connectedResetPassword = connect()(ResetPassword);

export default connectedResetPassword;

