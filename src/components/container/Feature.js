import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { imageUrlServer } from '../../util/constant';
import bushfire from '../../assets/images/bushfire.png';
import other from '../../assets/images/other.png';
import awarness from '../../assets/images/awarness.png';
import humanrights from '../../assets/images/human-rights.png';


const Feature = (props) => (

    <section className="container-fluid feature-section js-feature-section clearfix">
        <h2 className="text-center mb-5">Ryan Aviation &mdash; At your service</h2>
        <p className="long-copy">
            Ryan aviation was started in July 2017 and its main aim was to fill the gap in the market for
    chartered helicopter flights, service the mining sector and also assist the region in bush fire season.
        </p>

        <div className="row">
            <div key={0} className="col-lg-3 col-md-6 col-xs-12">
                <div className="feature">
                    <div className="col feature-icon d-flex align-items-center">
                        <img src={bushfire} className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="fea-info">
                        <h3>BUSH FIRE</h3>

                        <div className="parsed-html" >
                            The Australian bushfire season in Queensland and New South Wales generally starts in November
    and ends in the following year’s March, which are the driest months in these regions.
                        </div>

                    </div>
                    <div className="d-flex justify-content-center align-items-end">
                        <Link to={`#`}>Read more..</Link>
                    </div>
                </div>
            </div>

            <div key={1} className="col-lg-3 col-md-6 col-xs-12">
                <div className="feature">
                    <div className="col feature-icon d-flex align-items-center">
                        <img src={other} className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="fea-info">
                        <h3>MINING SECTOR</h3>

                        <div className="parsed-html" >
                            The Australian bushfire season in Queensland and New South Wales generally starts in November
    and ends in the following year’s March, which are the driest months in these regions.
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-end">
                        <Link to={`#`}>Read more..</Link>
                    </div>
                </div>
            </div>

            <div key={2} className="col-lg-3 col-md-6 col-xs-12">
                <div className="feature">
                    <div className="col feature-icon d-flex align-items-center">
                        <img src={awarness} className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="fea-info">
                        <h3>CUSTOMER SERVICE</h3>

                        <div className="parsed-html" >
                            The Australian bushfire season in Queensland and New South Wales generally starts in November
    and ends in the following year’s March, which are the driest months in these regions.
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-end">
                        <Link to={`#`}>Read more..</Link>
                    </div>
                </div>
            </div>

            <div key={3} className="col-lg-3 col-md-6 col-xs-12">
                <div className="feature">
                    <div className="col feature-icon d-flex align-items-center">
                        <img src={humanrights} className="img-fluid" alt="Responsive image" />
                    </div>
                    <div className="fea-info">
                        <h3>RESCUE</h3>

                        <div className="parsed-html" >
                            The Australian bushfire season in Queensland and New South Wales generally starts in November
    and ends in the following year’s March, which are the driest months in these regions.
                        </div>
                    </div>
                    <div className="d-flex justify-content-center align-items-end">
                        <Link to={`#`}>Read more..</Link>
                    </div>
                </div>
            </div>
        </div>

    </section>

);



export default Feature;