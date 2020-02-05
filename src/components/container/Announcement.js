import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';


const Announcement = () => (
    <section className="section-bg-component">
        <div className="section-bg-content">
            <h2 className=" text-center">Announcement</h2>
            <p className="long-copy">
                Ryan aviation was started in July 2017 and its main aim was to fill the gap in the market for
    chartered helicopter flights, service the mining sector and also assist the region in bush fire season.
            </p>
            <div className="row announcement-news ">
                <div key={0} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="feature">
                        <div className="fea-info announcement-title">
                            <h3 className="d-flex justify-content-center align-items-center">Special Discount</h3>

                            <div className="parsed-html" >
                                Some infnformation about the dsicount.Its main aim was to fill the gap in the market for
    chartered helicopter flights, service the mining sector and also assist the region in bush fire season.
                            </div>

                        </div>
                        <div className="d-flex justify-content-center align-items-end">
                            <Link to={`#`}>Read more..</Link>
                        </div>
                    </div>
                </div>

                <div key={0} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="feature">
                        <div className="fea-info announcement-title">
                            <h3 className="d-flex justify-content-center align-items-center">Festival Discount</h3>

                            <div className="parsed-html" >
                                Some infnformation about the dsicount.Its main aim was to fill the gap in the market for
    chartered helicopter flights, service the mining sector and also assist the region in bush fire season.
                            </div>

                        </div>
                        <div className="d-flex justify-content-center align-items-end">
                            <Link to={`#`}>Read more..</Link>
                        </div>
                    </div>
                </div>

                <div key={0} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="feature">
                        <div className="fea-info announcement-title">
                            <h3 className="d-flex justify-content-center align-items-center">Member Discount</h3>

                            <div className="parsed-html" >
                                Some infnformation about the dsicount.Its main aim was to fill the gap in the market for
    chartered helicopter flights, service the mining sector and also assist the region in bush fire season.
                            </div>

                        </div>
                        <div className="d-flex justify-content-center align-items-end">
                            <Link to={`#`}>Read more..</Link>
                        </div>
                    </div>
                </div>

                <div key={0} className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
                    <div className="feature">
                        <div className="fea-info announcement-title">
                            <h3 className="d-flex justify-content-center align-items-center">Holiday Discount</h3>

                            <div className="parsed-html" >
                                Some infnformation about the dsicount.Its main aim was to fill the gap in the market for
    chartered helicopter flights, service the mining sector and also assist the region in bush fire season.
                            </div>

                        </div>
                        <div className="d-flex justify-content-center align-items-end">
                            <Link to={`#`}>Read more..</Link>
                        </div>
                    </div>
                </div>
            </div>

            <h4 className="news-first-h4 d-flex justify-content-center">

                <Link to="/list"><button className="btn btn-primary">View more...</button></Link>
            </h4>


        </div>
    </section>
);




export default Announcement;