import React from 'react';
import Navigation from '../container/Navigation';
import Footer from '../container/Footer';
import { contactOffice } from '../../util/constant';

const method = () => {
    window.scroll(0, 0);
}
const contactOfficelist = (props) => (
    <div onLoad={method}>
        <Navigation />
        <section className="section-bg-component">
            <h2 className="mt-5">Contact Office</h2>
            <div className="row section-bg-content container our-location">


                <div key={0} className="col-md-3 feature mb-5">
                    <h4>Melbourne</h4>
                    <p>Mr.Mausam Rayamajhi</p>
                    <p>21 spenser st</p>

                    <p>12123219</p>
                    <p>
                        mausam.raya495@gmail.com
                    </p>
                </div>

                <div key={1} className="col-md-3 feature mb-5">
                    <h4>Sydney</h4>
                    <p>Mr.Manjil </p>
                    <p>21 spenser st</p>

                    <p>12123219</p>
                    <p>
                        mausam.raya495@gmail.com
                    </p>
                </div>

                <div key={2} className="col-md-3 feature mb-5">
                    <h4>Brisbane</h4>
                    <p>Mr.Nabin shrestha</p>
                    <p>21 spenser st</p>

                    <p>12123219</p>
                    <p>
                        mausam.raya495@gmail.com
                    </p>
                </div>

            </div>

        </section>
        <Footer />
    </div>
);


export default contactOfficelist;