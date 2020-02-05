import React, { Component } from 'react';
import { connect } from 'react-redux';


import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import FileUploadTest from '../container/FileUploadTest';

import { imageUrlServer, IAESTE_COUNTRIES, FIELD_OF_STUDY, UNIVERSITIES, GENDER } from '../../util/constant';

import { startAddApplicationForm, startEditApplicationForm } from '../../redux/actions/applicationForm';
import { startFetchCurrentForm } from '../../redux/actions/currentForm';
import { startFetchFormStatus } from '../../redux/actions/formStatus';

class ApplicationForm extends Component {

    constructor(props) {
        super(props);

        console.log(props);

        this.state = {
            // ------------- Application form ----------------
            applicationForm: {
                id: '',
                familyName: '',
                firstName: '',
                permanentAddress: '',
                currentAddress: '',
                phone: '',
                alternatePhone: '',
                email: props.user.email,
                dob: '',
                placeofBirth: '',
                gender: '',
                nationality: '',
                passportNo: '',
                placeofIssue: '',
                passportValidUntil: '',

                fieldOfStudy: '',
                specialization: '',
                completedYearsOfStudy: '',
                totalYearsRequired: '',
                university: '',
                gpaPercentageAchieved: '',
                otherReleventSkills: '',
                languages: '',

                currentJob: '',
                internFrom: '',
                internTo: '',
                internWeeksFrom: '',
                internWeeksTo: '',

                sop: '',
                firstPreferenceCountry: '',
                secondPreferenceCountry: '',
                thirdPreferenceCountry: '',
                applyOtherCountry: '',
                studyFieldOne: '',
                studyFieldTwo: '',
                studyFieldThree: '',
                studyFieldOneSpecialization: '',
                studyFieldTwoSpecialization: '',
                studyFieldThreeSpecialization: '',
                status: 0,

                file: '',
            },

            statusList: [],
            submitted: false,
        }
    }

    componentWillReceiveProps(propss) {
        this.setState({ applicationForm: propss.selectedApplicationForm }, this.fetchFormStatus);
    }

    fetchFormStatus = () => {
        let formId = this.state.applicationForm.id;

        if (formId) {
            let formCategory = 1; // Application form category is 1

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
        this.setState({ applicationForm: { ...this.state.applicationForm, [targetName]: e.target.value } });

    }

    onFieldOfStudyChange = (selectedOption) => {
        this.setState({ applicationForm: { ...this.state.applicationForm, fieldOfStudy: selectedOption.value } });
        // this.setState({ fieldOfStudy: selectedOption.value });
    }

    onUniversityChange = (selectedOption) => {
        this.setState({ applicationForm: { ...this.state.applicationForm, university: selectedOption.value } });
        // this.setState({ university: selectedOption.value });
        // if (selectedOption.value == "Other") {
        //     console.log("Other Selected, We need to take input");
        // }
    }
    on1CountrySelected = (selectedOption) => {
        this.setState({ applicationForm: { ...this.state.applicationForm, firstPreferenceCountry: selectedOption.value } });
        // this.setState({ firstPreferenceCountry: selectedOption.value });
    }
    on2CountrySelected = (selectedOption) => {
        this.setState({ applicationForm: { ...this.state.applicationForm, secondPreferenceCountry: selectedOption.value } });
        // this.setState({ secondPreferenceCountry: selectedOption.value });
    }
    on3CountrySelected = (selectedOption) => {
        this.setState({ applicationForm: { ...this.state.applicationForm, thirdPreferenceCountry: selectedOption.value } });
        // this.setState({ thirdPreferenceCountry: selectedOption.value });
    }

    onFileUpload = (fileName) => {
        this.setState({ applicationForm: { ...this.state.applicationForm, file: fileName } });
        // this.setState({ file: fileName })
    }

    onSubmit = (event) => {
        event.preventDefault();
        let self = this;

        if (!event.target.checkValidity()) {
            this.setState({
                invalid: true,
                displayErrors: true,
            });
            alert("Fill Up All required Field");
            return;
        }

        if (!!this.state.applicationForm.id) {

            this.props.dispatch(startEditApplicationForm(this.state.applicationForm)).then(
                (response) => {
                    self.setState({ submitted: true });
                    alert("Application form Updated successfully");
                }
            );
        }
        else {

            this.props.dispatch(startAddApplicationForm(this.state.applicationForm)).then(
                (response) => {
                    self.setState({ submitted: true });
                    alert("Application form submission successful");
                }
            );
        }

    }

    render() {

        let { id, familyName, firstName, permanentAddress, currentAddress, phone, alternatePhone, email, dob, placeofBirth, gender, nationality, passportNo, placeofIssue, passportValidUntil, fieldOfStudy, specialization, completedYearsOfStudy, totalYearsRequired, university, gpaPercentageAchieved, otherReleventSkills, languages, currentJob, internFrom, internTo, internWeeksFrom, internWeeksTo, sop, firstPreferenceCountry, secondPreferenceCountry, thirdPreferenceCountry, applyOtherCountry, studyFieldOne, studyFieldTwo, studyFieldThree, studyFieldOneSpecialization, studyFieldTwoSpecialization, studyFieldThreeSpecialization, status, file, createDateTime, lastUpdatedDateTime } = this.state.applicationForm;

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
                    <h5 className="col-md-10 text-center pb-3 pt-3">Application Form</h5>
                </div>

                {id?<label className="btn text-danger">{status==1 ? 'Verified' : 'Verification in Progress'}</label>:''}

                {renderSubmissionDate}

                {renderView}

                <form onSubmit={this.onSubmit} noValidate className={this.state.displayErrors ? 'displayErrors' : ''}>
                    <label><b>Personal Information</b></label>
                    <div className="row">
                        <div className="col-sm-6">

                            <div className="form-group row">
                                <label htmlFor="familyName" className="col-sm-4 col-form-label">Family Name
                                <span className="text-danger"> * </span> </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="familyName" value={familyName} onChange={this.onChange} placeholder="Family Name" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="firstName" className="col-sm-4 col-form-label">First Name <span className="text-danger"> * </span></label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="firstName" value={firstName} onChange={this.onChange} placeholder="First Name" required />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="currentAddress" className="col-sm-4 col-form-label">Address during Terms <span className="text-danger"> * </span></label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="currentAddress" value={currentAddress} onChange={this.onChange} placeholder="Address during Terms" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="permanentAddress" className="col-sm-4 col-form-label">Permanent Address <span className="text-danger"> * </span></label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="permanentAddress" value={permanentAddress} onChange={this.onChange} placeholder="Home Address" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="phone" className="col-sm-4 col-form-label">Phone No. <span className="text-danger"> * </span></label>
                                <div className="col-sm-8">
                                    <input type="number" className="form-control" name="phone" min="0" value={phone} onChange={this.onChange} placeholder="Phone Number" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="alternatePhone" className="col-sm-4 col-form-label">Alternate Phone No. </label>
                                <div className="col-sm-8">
                                    <input type="number" className="form-control" name="alternatePhone" value={alternatePhone} onChange={this.onChange} placeholder="Alternate Number" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="email" className="col-sm-4 col-form-label">Email <span className="text-danger"> * </span></label>
                                <div className="col-sm-8">
                                    <input type="email" className="form-control" name="email" placeholder={email} disabled />
                                </div>
                            </div>

                        </div>

                        <div className="col-sm-6">

                            <div className="form-group row">
                                <label htmlFor="dob" className="col-sm-4 col-form-label">Date of Birth <span className="text-danger"> * </span></label>
                                <div className="col-sm-8">
                                    <input type="date" className="form-control" name="dob" value={dob} onChange={this.onChange} placeholder="Date of Birth" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="placeofBirth" className="col-sm-4 col-form-label">Place of Birth </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="placeofBirth" value={placeofBirth} onChange={this.onChange} placeholder="Place of Birth" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="gender" className="col-sm-4 col-form-label">Gender <span className="text-danger"> * </span></label>
                                <div className="col-sm-8">

                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="Male" value="Male" checked={gender === 'Male'} onChange={this.onChange} required />
                                        <label className="form-check-label" htmlFor="Male">Male</label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="gender" id="Female" value="Female" checked={gender === 'Female'} onChange={this.onChange} required />
                                        <label className="form-check-label" htmlFor="Female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="nationality" className="col-sm-4 col-form-label">Nationality <span className="text-danger"> * </span></label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="nationality" value={nationality} onChange={this.onChange} placeholder="Nationality" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="passportNo" className="col-sm-4 col-form-label">Passport No. </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="passportNo" value={passportNo} onChange={this.onChange} placeholder="Passport Number" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="placeofIssue" className="col-sm-4 col-form-label">Place of Issue </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="placeofIssue" value={placeofIssue} onChange={this.onChange} placeholder="Place of Issue" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="passportValidUntil" className="col-sm-4 col-form-label">Valid Until </label>
                                <div className="col-sm-8">
                                    <input type="date" className="form-control" name="passportValidUntil" value={passportValidUntil} onChange={this.onChange} placeholder="Valid Until" />
                                </div>
                            </div>

                        </div>

                    </div>

                    <hr />



                    <hr />

                    <label><b>Study Information</b></label>
                    <div className="row">
                        <div className="col-sm-6">

                            <div className="form-group row">
                                <label htmlFor="fieldOfStudy" className="col-sm-4 col-form-label">Field of Study <span className="text-danger"> * </span></label>
                                <div className="col-sm-8">
                                    <Select
                                        id="fieldOfStudy"
                                        onBlurResetsInput={false}
                                        onSelectResetsInput={false}
                                        options={FIELD_OF_STUDY}
                                        clearable={false}
                                        name="fieldOfStudy"
                                        value={fieldOfStudy}
                                        onChange={this.onFieldOfStudyChange}
                                        required
                                    />

                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="specialization" className="col-sm-4 col-form-label">Specialization </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="specialization" value={specialization} onChange={this.onChange} placeholder="Specialization" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="completedYearsOfStudy" className="col-sm-4 col-form-label">Completed Years of Study <span className="text-danger"> * </span></label>
                                <div className="col-sm-8">
                                    <input type="number" className="form-control" name="completedYearsOfStudy" value={completedYearsOfStudy} onChange={this.onChange} placeholder="Completed Years of Study" required />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="totalYearsRequired" className="col-sm-4 col-form-label">Total Years Required <span className="text-danger"> * </span></label>
                                <div className="col-sm-8">
                                    <input type="number" className="form-control" name="totalYearsRequired" value={totalYearsRequired} onChange={this.onChange} placeholder="Total Years Required" required />
                                </div>
                            </div>


                        </div>

                        <div className="col-sm-6">

                            <div className="form-group row">
                                <label htmlFor="university" className="col-sm-4 col-form-label">University <span className="text-danger"> * </span></label>
                                <div className="col-sm-8">

                                    <Select
                                        id="university"
                                        onBlurResetsInput={false}
                                        onSelectResetsInput={false}
                                        options={UNIVERSITIES}
                                        clearable={false}
                                        name="university"
                                        value={university}
                                        onChange={this.onUniversityChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="gpaPercentageAchieved" className="col-sm-4 col-form-label">GPA/Percentage Achieved </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="gpaPercentageAchieved" value={gpaPercentageAchieved} onChange={this.onChange} placeholder="GPA/Percentage Achieved " />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="otherReleventSkills" className="col-sm-4 col-form-label">Other Relevent Skills </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="otherReleventSkills" value={otherReleventSkills} onChange={this.onChange} placeholder="Other Relevent Skills" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="languages" className="col-sm-4 col-form-label">Languages </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="languages" value={languages} onChange={this.onChange} placeholder="Languages" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <hr />
                    <label><b>Work related Information</b></label>
                    <div className="row">
                        <div className="col-sm-6">

                            <div className="form-group row">
                                <label htmlFor="internFrom" className="col-sm-4 col-form-label">Desired Period of Training </label>
                                <div className="col-sm-4">
                                    <input type="date" className="form-control" name="internFrom" value={internFrom} onChange={this.onChange} placeholder="Date From" />
                                </div>
                                <div className="col-sm-4">
                                    <input type="date" className="form-control" name="internTo" value={internTo} onChange={this.onChange} placeholder="Date to" />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="internWeeksFrom" className="col-sm-4 col-form-label">Desired Weeks </label>
                                <div className="col-sm-4">
                                    <input type="number" className="form-control" name="internWeeksFrom" value={internWeeksFrom} onChange={this.onChange} placeholder="Minimum" />
                                </div>
                                <div className="col-sm-4">
                                    <input type="number" className="form-control" name="internWeeksTo" value={internWeeksTo} onChange={this.onChange} placeholder="Maximum" />
                                </div>
                            </div>

                        </div>

                        <div className="col-sm-6">
                            <div className="form-group row">
                                <label htmlFor="job" className="col-sm-4 col-form-label">Current Job </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="currentJob" value={currentJob} onChange={this.onChange} placeholder="Current Job if any" />
                                </div>
                            </div>
                        </div>
                    </div>


                    <hr />
                    <label><b>Preference and Study Field</b></label>
                    <div className="row">
                        <div className="col-sm-6">

                            <div className="form-group row">
                                <label htmlFor="firstPreferenceCountry" className="col-sm-4 col-form-label">1st Preference Country </label>
                                <div className="col-sm-8">
                                    <Select
                                        id="firstPreferenceCountry"
                                        onBlurResetsInput={false}
                                        onSelectResetsInput={false}
                                        options={IAESTE_COUNTRIES}
                                        clearable={false}
                                        name="firstPreferenceCountry"
                                        value={firstPreferenceCountry}
                                        onChange={this.on1CountrySelected}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="secondPreferenceCountry" className="col-sm-4 col-form-label">2nd Preference Country </label>
                                <div className="col-sm-8">
                                    <Select
                                        id="secondPreferenceCountry"
                                        onBlurResetsInput={false}
                                        onSelectResetsInput={false}
                                        options={IAESTE_COUNTRIES}
                                        clearable={false}
                                        name="secondPreferenceCountry"
                                        value={secondPreferenceCountry}
                                        onChange={this.on2CountrySelected}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="thirdPreferenceCountry" className="col-sm-4 col-form-label">3rd Preference Country </label>
                                <div className="col-sm-8">
                                    <Select
                                        id="thirdPreferenceCountry"
                                        onBlurResetsInput={false}
                                        onSelectResetsInput={false}
                                        options={IAESTE_COUNTRIES}
                                        clearable={false}
                                        name="thirdPreferenceCountry"
                                        value={thirdPreferenceCountry}
                                        onChange={this.on3CountrySelected}
                                    />
                                </div>
                            </div>

                        </div>

                        <div className="col-sm-6">

                            <div className="form-group row">
                                <label htmlFor="applyOtherCountry" className="col-sm-4 col-form-label">Apply Other Country ?</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="applyOtherCountry" id="otherCountry1" value="1" checked={applyOtherCountry == '1'} onChange={this.onChange} required />
                                <label className="form-check-label" htmlFor="otherCountry1">Yes</label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="applyOtherCountry" id="otherCountry2" value="0" checked={applyOtherCountry == '0'} onChange={this.onChange} required />
                                <label className="form-check-label" htmlFor="otherCountry2">No</label>
                            </div>

                        </div>
                    </div>

                    <hr />
                    <div className="row">
                        <div className="col-sm-6">

                            <div className="form-group row">
                                <label htmlFor="studyFieldOne" className="col-sm-4 col-form-label">Study Field 1 </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="studyFieldOne" value={studyFieldOne} onChange={this.onChange} placeholder="Study Field 1" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="studyFieldTwo" className="col-sm-4 col-form-label">Study Field 2 </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="studyFieldTwo" value={studyFieldTwo} onChange={this.onChange} placeholder="Study Field 2" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="studyFieldThree" className="col-sm-4 col-form-label">Study Field 3 </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="studyFieldThree" value={studyFieldThree} onChange={this.onChange} placeholder="Study Field 3" />
                                </div>
                            </div>

                        </div>

                        <div className="col-sm-6">

                            <div className="form-group row">
                                <label htmlFor="studyFieldOneSpecialization" className="col-sm-4 col-form-label">Field 1 Specialization </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="studyFieldOneSpecialization" value={studyFieldOneSpecialization} onChange={this.onChange} placeholder="Field 1 Specialization" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="studyFieldTwoSpecialization" className="col-sm-4 col-form-label">Field 2 Specialization </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="studyFieldTwoSpecialization" value={studyFieldTwoSpecialization} onChange={this.onChange} placeholder="Field 2 Specialization" />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="studyFieldThreeSpecialization" className="col-sm-4 col-form-label">Field 3 Specialization </label>
                                <div className="col-sm-8">
                                    <input type="text" className="form-control" name="studyFieldThreeSpecialization" value={studyFieldThreeSpecialization} onChange={this.onChange} placeholder="Field 3 Specialization" />
                                </div>
                            </div>

                        </div>
                    </div>

                    <hr />
                    <label htmlFor="sop" className="col-sm-12 col-form-label">Sop (Statement of Purpose): <span className="text-danger"> * </span></label>
                    <div className="form-group row">
                        <div className="col-sm-12">
                            <textarea className="textarea-wd100" rows="20" name="sop" value={sop} onChange={this.onChange} required></textarea>
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-sm-2 col-form-label">Your Document</label>
                        <div className="col-sm-10">
                            <FileUploadTest selectedFile={(result) => {
                                this.onFileUpload(result.file.fileName);
                            }} />

                            {this.state.file ? <span className="font-weight-bold text-info">{this.state.file}</span> : ''}

                        </div>
                    </div>



                    <button className="btn btn-primary btn-block">{id ? 'Update' : 'Submit Form'}</button>

                </form >

                <hr/>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        currentForm: state.currentForm
    };
};

const connectedApplicationForm = connect(mapStateToProps)(ApplicationForm);

export default connectedApplicationForm;