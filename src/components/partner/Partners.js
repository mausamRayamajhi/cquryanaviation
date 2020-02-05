import React from 'react';
import Navigation from '../container/Navigation';
import { connect } from 'react-redux';

import Footer from '../container/Footer';

const Partners = (props) => (
    <div>
        <Navigation />
        <section className="section-bg-first">
            <h1>Booking</h1>
        </section>
        <Footer />
    </div>
);



export default Partners;