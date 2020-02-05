import React, { Component } from 'react';
import { connect } from 'react-redux';

import Select from 'react-select';
import 'react-select/dist/react-select.css';

import FileUploadTest from '../container/FileUploadTest';

import { imageUrlServer, IAESTE_COUNTRIES, FIELD_OF_STUDY, UNIVERSITIES, GENDER } from '../../util/constant';

import { startAddDirectForm, startEditDirectForm } from '../../redux/actions/directForm';
import { startFetchCurrentForm } from '../../redux/actions/currentForm';
import { startFetchFormStatus } from '../../redux/actions/formStatus';

class DirectForm extends Component {

    constructor(props) {
        super(props);

        this.state = {

            // ------------- Direct form ----------------

            directForm: {
                id: '',
                fieldOfStudy: '',
                file: '',
                email: props.user.email,
            },

            statusList: [],
            submitted: false,
        }
    }

    componentWillReceiveProps(propss) {
        this.setState({ directForm: propss.selectedDirectForm }, this.fetchFormStatus);
    }

    fetchFormStatus = () => {
        let formId = this.state.directForm.id;

        if (formId) {
            let formCategory = 2;  // direct form category = 1
            console.log("id is: ", formId)

            let self = this;
            this.props.dispatch(startFetchFormStatus(formId, formCategory)).then(
                (response) => {
                    self.setState({ statusList: response });
                }
            );
        }
    }


    onChange = (e) => {
        // this.setState({ [e.target.name]: e.target.value });

        let targetName = [e.target.name];
        this.setState({ directForm: { ...this.state.directForm, [targetName]: e.target.value } });

    }


    onModalFieldOfStudyChange = (selectedOption) => {
        this.setState({ directForm: { ...this.state.directForm, fieldOfStudy: selectedOption.value } });
        // this.setState({ dfieldOfStudy: selectedOption.value });
    }

    onCompleteDocumentUpload = (fileName) => {
        console.log("onCompleteDocumentUpload ", fileName)

        this.setState({ directForm: { ...this.state.directForm, file: fileName } });
        // this.setState({ completeFile: fileName });
    }

    completeDocumentSubmit = (event) => {
        event.preventDefault();
        let self = this;

        if (!event.target.checkValidity() || !this.state.directForm.file) {
            this.setState({
                invalid: true,
                modalFormErrors: true,
            });
            alert("Fill Up All required Field");
            return;
        }



        if (!!this.state.directForm.id) {

            this.props.dispatch(startEditDirectForm(this.state.directForm)).then(
                (response) => {
                    self.setState({ submitted: true });
                }
            );
        }
        else {

            this.props.dispatch(startAddDirectForm(this.state.directForm)).then(
                (response) => {
                    self.setState({ submitted: true });
                }
            );
        }

    }


    render() {

        let { id, email, fieldOfStudy, file, createDateTime, lastUpdatedDateTime, status } = this.state.directForm;

        let renderSubmissionDate = '';
        if(lastUpdatedDateTime != createDateTime && lastUpdatedDateTime && createDateTime){
            let updateDateTime = lastUpdatedDateTime.split("T");
            let screateDateTime = createDateTime.split("T");
            renderSubmissionDate = <div className="alert alert-light mr-3" role="alert">
             Last Updated On: {updateDateTime[0]} , {updateDateTime[1]}  &nbsp; &nbsp; | &nbsp; &nbsp;  Form Submitted On: {screateDateTime[0]} , {screateDateTime[1]}
             </div>;
        }
        else if(createDateTime){
            let screateDateTime = createDateTime.split("T");
            renderSubmissionDate = <div className="alert alert-light" role="alert">
             Form Submitted On {screateDateTime[0]} , {screateDateTime[1]} </div>;
        }

        let renderView = '';
        if (!!this.state.statusList) {
            renderView = (this.state.statusList).map((item, i) => {
                let createDate = item.createDateTime.split("T");
                return (
                    <div key={i} className="alert alert-primary" role="alert">
                        {item.interviewDate ? 'Interview was Scheduled on Date: ' + item.interviewDate + ' and Interview Time: ' + item.interviewTime + '' : ''}
                        <br />
                        {item.nomination_status == 1 ? 'Congratulation ! Nomination was also approved' : ''}
                        <p className="text-info">[ Updated: {createDate[0]} at {createDate[1]} by admin- {item.jwtUser.fullName} ]</p>
                    </div>
                )
            })
        }

        return (
            <div>
                <div className="row">
                    <h5 className="col-md-10 text-center pb-3 pt-3">Direct Form</h5>
                </div>

                <div className="parsed-html border mb-3" dangerouslySetInnerHTML={{ __html: this.props.siteInfo.directFormGuide }} />

                {id?<label className="btn text-danger">{status==1 ? 'Verified' : 'Verification in Progress'}</label>:''}

                {renderSubmissionDate}
                {renderView}

                <form onSubmit={this.completeDocumentSubmit} noValidate className={this.state.modalFormErrors ? 'displayErrors' : ''}>
                    <div className="form-group row">
                        <label htmlFor="email" className="col-sm-4 col-form-label">Email <span className="text-danger"> * </span></label>
                        <div className="col-sm-8">
                            <input type="email" className="form-control" name="email" placeholder={email} disabled />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="dfieldOfStudy" className="col-sm-4 col-form-label">Field Of Study <span className="text-danger"> * </span></label>
                        <div className="col-sm-8">
                            <Select
                                id="dfieldOfStudy"
                                onBlurResetsInput={false}
                                onSelectResetsInput={false}
                                options={FIELD_OF_STUDY}
                                clearable={false}
                                name="dfieldOfStudy"
                                value={fieldOfStudy}
                                onChange={this.onModalFieldOfStudyChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="form-group row pt-3">
                        <label className="col-sm-2 col-form-label">Document<span className="text-danger"> * </span></label>
                        <div className="col-sm-10">
                            <FileUploadTest selectedFile={(result) => {
                                this.onCompleteDocumentUpload(result.file.fileName);
                            }} />
                            {file ? <span className="font-weight-bold text-info">{file}</span> : ''}
                        </div>
                    </div>
                    <p className="font-weight-light text-center">Note: Only Single pdf file is Valid.</p>
                    <button className="btn btn-primary btn-block">{id ? 'Update' : 'Submit Form'}</button>
                </form>

            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        currentForm: state.currentForm,
        siteInfo: state.siteInfo
    };
};

const connectedDirectForm = connect(mapStateToProps)(DirectForm);

export default connectedDirectForm;