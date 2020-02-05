import React from 'react';
import Navigation from '../container/Navigation';
import Footer from '../container/Footer';
import SideDocument from '../student/SideDocument';


import { connect } from 'react-redux';

const Employers = (props) => (
    <div>
        <Navigation />

        <section className="container section-bg-first">
            <div className="row section-bg-content">
                {/* <div className="col-sm-4">
                    <SideDocument />
                </div> */}
                <div className="col-sm-12">
                    <h1>Employers</h1>
                </div>
            </div>
        </section>
        <Footer />
    </div>
);



export default Employers;