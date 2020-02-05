import React from 'react';
import { NavLink } from 'react-router-dom';

import image from '../../assets/images/everest.jpg';
import { ParallaxBanner } from 'react-scroll-parallax';

class ImageSlider extends React.Component {
    render() {
        return (
            <div className="lazy_hero_main">
                <ParallaxBanner

                    layers={[
                        {
                            image: `${image}`,
                            amount: 0.4,
                            slowerScrollRate: false,
                        }
                    ]}
                    style={{
                        height: '100vh',
                    }}

                >
                </ParallaxBanner>

                <div className="container-fluid lazy_hero_subtitle">
                    <div className="row">
                        <div className="col-md-12">

                            <div className="main-text">
                                <h4 className="image-info">Ryan Aviation</h4>
                                <NavLink className="btn btn-primary mt-3" to="/aboutus">Click to view About Us</NavLink>
                            </div>

                            {/* <section className="cd-intro ">
                                <h1 className="cd-headline slide">
                                    <span className="text-white display-3">Nepal is </span>
                                    <span className="cd-words-wrapper ">
                                        <b className="is-visible text-white display-2">&nbsp;Beautiful</b>
                                        <b className="text-white display-2">&nbsp;Amazing</b>
                                        <b className="text-white display-2">&nbsp;Inspiring</b>
                                    </span>
                                </h1>
                            </section> */}
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default ImageSlider;