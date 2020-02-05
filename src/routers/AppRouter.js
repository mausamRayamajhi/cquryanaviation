import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import IAESTE from '../components/IAESTE';
import Contact from '../components/contact/Contact';
import Student from '../components/student/Student';
import Employers from '../components/employer/Employers';
import Partners from '../components/partner/Partners';
import About from '../components/aboutus/About';
import LoginLogout from '../components/loginLogout/LoginLogout';
import ResetPassword from '../components/loginLogout/ResetPassword';
import ExecutiveBody from '../components/team/ExecutiveBody';
import ManagementTeam from '../components/team/ManagementTeam';
import NotFoundPage from '../components/container/NotFoundPage';
import ReadMorePost from '../components/post/PostDetails';


//------------------------------------------

import List from '../components/post/List';
import contactOfficelist from '../components/post/contactOfficelist';
import Test from '../components/container/Test';



export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={IAESTE} exact={true} />
            <Route path="/contact" component={Contact} />
            <Route path="/student" component={Student} />
            <Route path="/employers" component={Employers} />
            <Route path="/partners" component={Partners} />
            <Route path="/aboutus" component={About} />
            <Route path="/login" component={LoginLogout} />
            <Route path="/resetPassword" component={ResetPassword} />
            <Route path="/executivebody" component={ExecutiveBody} />
            <Route path="/managementTeam" component={ManagementTeam} />
            <Route path="/post/:id" component={ReadMorePost} />
            <Route path="/announcement/:id" component={ReadMorePost} />
            <Route path="/list" component={List} />
            <Route path="/contactOfficelist" component={contactOfficelist} />
            {/* 
            <AdminRoute path="/aboutEdit" component={AboutEdit} />
            <AdminRoute path="/teamEdit" component={TeamEdit} />
            <AdminRoute path="/studentEdit" component={StudentEdit} />
            <AdminRoute path="/employeeEdit" component={EmployeeEdit} />
            <AdminRoute path="/partnerEdit" component={PartnerEdit} />
            <AdminRoute path="/contactEdit" component={ContactEdit} />
            <AdminRoute path="/sliderEdit" component={SliderEdit} />
            <AdminRoute path="/featureEdit" component={FeatureEdit} />
            <AdminRoute path="/introductionEdit" component={IntroductionEdit} />
            <AdminRoute path="/announcementEdit" component={AnnouncementEdit} />
            <AdminRoute path="/submissionForm" component={SubmissionForm} />
            <AdminRoute path="/adminDash" component={AdminDash} />
            <AdminRoute path="/application/:type/:id" component={SingleForm} />
            <AdminRoute path="/createAdmin" component={CreateAdmin} /> */}

            <Route path="/test" component={Test} />
            <Route component={NotFoundPage} />
        </Switch>
    </Router>
);

export default AppRouter;