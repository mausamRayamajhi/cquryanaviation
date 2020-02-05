import React from 'react';
import Navigation from '../container/Navigation';
import { connect } from 'react-redux';
import Footer from '../container/Footer';
import { imageUrlServer } from '../../util/constant';
import male from '../../assets/images/m.png';
import female from '../../assets/images/f.jpg';
class ExecutiveBody extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Navigation />
                <section className="section-bg-first team-bg-first container">
                    <header className="sec-heading">
                        <h2>Meet the team</h2>
                        <span className="subheading">We are at your service - Ryan Aviation</span>
                    </header>

                    <div className="row ">
                        <div key={0} className="col-lg-4  col-md-6  team-card mb-5">
                            <div className="card team-box" >
                                <div className="img_div">
                                    {/* <img className="card-img-top img-fluid" src={ma} alt="Card image cap" /> */}
                                    <img src={male} className="card-img-top img-fluid" alt="Responsive image" />
                                    <div className="t-description">
                                        <div className="content-wrapper">
                                            <h4 className="h-alt">Hello!</h4>
                                            <p >My name is mausam rayamajhi.<br />student id :12123219 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="t-info">
                                        <h4 className="t-name">Mausam Rayamajhi</h4>
                                        <span className="t-role">12123219</span>
                                        {/* <ul className="social-links">
                                            {team.facebook && <li><a href={team.facebook} target="_blank" ><i className="fa fa-facebook"></i></a></li>}
                                            {team.twitter && <li><a href={team.twitter} target="_blank"><i className="fa fa-twitter"></i></a></li>}
                                            {team.email && <li><a href={team.email}><i className="fa fa-dribbble"></i></a></li>}

                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div key={1} className="col-lg-4  col-md-6  team-card mb-5">
                            <div className="card team-box" >
                                <div className="img_div">
                                    {/* <img className="card-img-top img-fluid" src={ma} alt="Card image cap" /> */}
                                    <img src={male} className="card-img-top img-fluid" alt="Responsive image" />
                                    <div className="t-description">
                                        <div className="content-wrapper">
                                            <h4 className="h-alt">Hello!</h4>
                                            <p >My name is Manjil.<br />student id :12123219 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="t-info">
                                        <h4 className="t-name">Manjil</h4>
                                        <span className="t-role">12123219</span>
                                        {/* <ul className="social-links">
                                            {team.facebook && <li><a href={team.facebook} target="_blank" ><i className="fa fa-facebook"></i></a></li>}
                                            {team.twitter && <li><a href={team.twitter} target="_blank"><i className="fa fa-twitter"></i></a></li>}
                                            {team.email && <li><a href={team.email}><i className="fa fa-dribbble"></i></a></li>}

                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>




                        <div key={2} className="col-lg-4  col-md-6  team-card mb-5">
                            <div className="card team-box" >
                                <div className="img_div">
                                    {/* <img className="card-img-top img-fluid" src={ma} alt="Card image cap" /> */}
                                    <img src={female} className="card-img-top img-fluid" alt="Responsive image" />
                                    <div className="t-description">
                                        <div className="content-wrapper">
                                            <h4 className="h-alt">Hello!</h4>
                                            <p >My name is xxx.<br />student id :12123219 </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="t-info">
                                        <h4 className="t-name">xxx </h4>
                                        <span className="t-role">12123219</span>
                                        {/* <ul className="social-links">
                                            {team.facebook && <li><a href={team.facebook} target="_blank" ><i className="fa fa-facebook"></i></a></li>}
                                            {team.twitter && <li><a href={team.twitter} target="_blank"><i className="fa fa-twitter"></i></a></li>}
                                            {team.email && <li><a href={team.email}><i className="fa fa-dribbble"></i></a></li>}

                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>






                    </div>



                </section>
                <Footer />
            </div>
        );
    }
}

export default ExecutiveBody;

