import React from 'react';
import { connect } from 'react-redux';
import { emptyToken } from '../../redux/actions/token';
import { clearUser } from '../../redux/actions/user';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { updatePasswordRequest } from '../../redux/actions/user';

class ResetPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            isLoading: false,
            hiddenButton: false,
            error: '',

            oldPassword: '',
            regPassword: '',
            regConPassword: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });

    }

    onPasswordUpdateSuccess = () => {
        this.props.dispatch(emptyToken());
        this.props.dispatch(clearUser());
        localStorage.removeItem("token");
        localStorage.removeItem("name");
      };

    onPasswordUpdate = (e) => {
        e.preventDefault();
        let self = this;

        const {oldPassword,regPassword, regConPassword} = this.state;
        if(!oldPassword && !regPassword && !regConPassword){
            alert("Fill Up All Required Field");
            return;
        }

        this.props.dispatch(updatePasswordRequest(oldPassword, regConPassword, this.props.user.id)).then(
            (response) => {
                console.log(response);
                if(response){
                    alert("Password Update Successful");
                    self.onPasswordUpdateSuccess();
                }
                else{
                    alert("Oops! Something wrong Password Update Failed")
                }
            }
        );

    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal,
            hiddenButton: false,
            isLoading: false,
        });
    }


    resetForm = () => {
        this.setState({
            oldPassword: '',
            regPassword: '',
            regConPassword: ''
        });
    };

    render() {
        return (
            <div>

                <Button color="secondary" onClick={this.toggle}>Update Password</Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Update Password</ModalHeader>
                    <ModalBody>

                        <form onSubmit={this.onPasswordUpdate}>
                            <div className="row">
                                <div className="form-group col-md">
                                    <label htmlFor="r0-password">Old Password</label>
                                    <input type="password" className="form-control" id="r0-password" value={this.state.oldPassword} onChange={this.handleChange} name="oldPassword" placeholder="Password" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group col-md">
                                    <label htmlFor="r1-password">New Password</label>
                                    <input type="password" className="form-control" id="r1-password" value={this.state.regPassword} onChange={this.handleChange} name="regPassword" placeholder="Password" required />
                                </div>
                                <div className="form-group col-md">
                                    <label htmlFor="r2-password">Confirm Password</label>
                                    <input type="password" className="form-control" id="r2-password" value={this.state.regConPassword} onChange={this.handleChange} name="regConPassword" placeholder="Password" required />
                                </div>
                            </div>

                            <button className="btn btn-block btn-primary">Update</button>
                        </form>

                    </ModalBody>
                    <ModalFooter>
                        {!!this.state.error && <p className="text-center text-danger">{this.state.error}</p>}
                    </ModalFooter>
                </Modal>

            </div >
        );
    }
}



const mapStateToProps = (state) => {
    return {
        token: state.token,
        user: state.user
    };
};

const connectedResetPassword = connect(mapStateToProps)(ResetPassword);

export default connectedResetPassword;