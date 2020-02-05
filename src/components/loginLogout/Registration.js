import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../container/Navigation';
import Footer from '../container/Footer';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Progress } from 'reactstrap';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/fontawesome-free-solid';

class Registration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            isLoading: false,
            hiddenButton: false,
            error: '',

            //registration
            fullName: '',
            contact: '',
            address: '',
            college: '',
            regEmail: '',
            regPassword: '',
            regConPassword: '',
            image: '',
            idOfNewRegUser: ''
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
        // if (event.target.name == "email") {
        //     this.setState({
        //         hiddenButton: false,
        //         linkToGmail: false,
        //         serverMsg: ''
        //     });
        // }
    }

    toggleSignupModal = () => {
        this.setState({
            signupModal: !this.state.signupModal,
            hiddenButton: false,
            isLoading: false,
        });
    }

    onNewRegistration = (event) => {

        event.preventDefault();
        this.setState({ isLoading: true });

        const { fullName, contact: contactNumber, regConPassword: password, regPassword, regEmail: email, college, image } = this.state;

        if (!!fullName && !!contactNumber && !!password && !!regPassword && !!email) {
            if (regPassword.length > 7) {
                if (regPassword === password) {
                    this.setState({ error: "" });
                    let newUser = {
                        fullName,
                        contactNumber,
                        password,
                        email,
                        college,
                        image
                    }
                    if (this.props.user.role == "ROLE_ADMIN") {
                        newUser = { ...newUser, role: "ROLE_ADMIN" }
                        this.props.dispatch(startAddNewUserAdmin(newUser)).then(
                            (response) => {

                                this.setState({ isLoading: false, hiddenButton: true, idOfNewRegUser: response.data });

                                if (response.data > 0) {
                                    alert("Check your email")
                                } else {
                                    alert("Email already exits.");
                                    this.setState({ hiddenButton: false });
                                }
                            });

                    } else {
                        newUser = { ...newUser, role: "ROLE_USER" }
                        this.props.dispatch(startAddNewUser(newUser)).then(
                            (response) => {

                                this.setState({ isLoading: false, hiddenButton: true, idOfNewRegUser: response.data });

                                if (response.data > 0) {
                                    alert("Check your email")
                                } else {
                                    alert("Email already exits.");
                                    this.setState({ hiddenButton: false });
                                }
                            });
                    }

                } else {
                    this.setState({ isLoading: false });
                    this.setState({ error: "Password does not match." });
                }
            } else {
                this.setState({ isLoading: false });
                this.setState({ error: "Password must be grater than 8 character." });
            }
        }

    };
    resetForm = () => {
        this.setState({
            fullName: '',
            contact: '',
            address: '',
            college: '',
            regEmail: '',
            regPassword: '',
            regConPassword: '',
            image: '',
            idOfNewRegUser: ''
        });
    };

    render() {
        return (
            <div>

                <p className="text-center mt-2 ">Not a registered yet?
                <button className="btn btn-sm btn-info ml-1" onClick={this.toggleSignupModal}>SignUp</button>
                </p>

                <Modal size="lg" isOpen={this.state.signupModal} toggle={this.toggleSignupModal} className={this.props.className}>
                    <ModalHeader toggle={this.toggleSignupModal}>Registeration</ModalHeader>
                    <ModalBody>
                        <form id="signup-form" onSubmit={this.onNewRegistration}>
                            <div className="row">
                                <div className="form-group col-md">
                                    <label htmlFor="full_name">Full Name</label>
                                    <input type="text" className="form-control" id="r-name" value={this.state.fullName} onChange={this.handleChange} name="fullName" placeholder="Full Name" required />
                                </div>
                                <div className="form-group col-md">
                                    <label htmlFor="phone">Phone</label>
                                    <input type="text" className="form-control" id="r-phone" value={this.state.contact} onChange={this.handleChange} name="contact" placeholder="Contact Number" maxLength="10" required />
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-md">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="r-email" value={this.state.regEmail} onChange={this.handleChange} name="regEmail" placeholder="Email" required />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">Your Location</label>
                                <input type="text" className="form-control" id="r-address" value={this.state.address} onChange={this.handleChange} name="address" placeholder="Enter Your Location" required />
                            </div>

                            <div className="form-group">
                                <label htmlFor="college">College</label>
                                <input type="text" className="form-control" id="r-college" value={this.state.college} onChange={this.handleChange} name="college" placeholder="Enter College" required />
                            </div>

                            <div className="row">
                                <div className="form-group col-md">
                                    <label htmlFor="r1-password">Password</label>
                                    <input type="password" className="form-control" id="r1-password" value={this.state.regPassword} onChange={this.handleChange} name="regPassword" placeholder="Password" required />
                                </div>
                                <div className="form-group col-md">
                                    <label htmlFor="r2-password">Password</label>
                                    <input type="password" className="form-control" id="r2-password" value={this.state.regConPassword} onChange={this.handleChange} name="regConPassword" placeholder="Password" required />
                                </div>
                            </div>
                            {this.state.isLoading ? <div className="fa-2x text-center ">   <FontAwesomeIcon icon="spinner" pulse />   </div>
                                : <span hidden={this.state.hiddenButton}><button type="reset" className="btn btn-warning float-left" onClick={this.resetForm} value="Reset">Reset</button>
                                    <button type="submit" className="btn btn-info float-right">Submit</button></span>}

                        </form>


                    </ModalBody>
                    <ModalFooter>
                        {!!this.state.error && <p className="text-center text-danger">{this.state.error}</p>}
                    </ModalFooter>
                </Modal>

            </div>
        );
    }
}





export default Registration;