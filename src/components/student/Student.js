import React from 'react';
import SideDocument from './SideDocument';
import Navigation from '../container/Navigation';
import Footer from '../container/Footer';

import { connect } from 'react-redux';

const Student = (props) => (
    <div>
        <Navigation />

        <section className="container section-bg-first">
            <div className="row section-bg-content">
                {/* <div className="col-sm-4">
                    <SideDocument />
                </div> */}
                <div className="col-sm-12">
                    <h1>Services</h1>
                    {/* <div className="parsed-html" dangerouslySetInnerHTML={{ __html: props.siteInfo.studentPage }} /> */}
                </div>
            </div>
        </section>
        <Footer />
    </div>
);




export default Student;