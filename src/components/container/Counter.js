import React from 'react';
import image from '../../assets/images/travel.jpg';
import CountUp from 'react-countup';
import Waypoint from 'react-waypoint';
import { ParallaxBanner } from 'react-scroll-parallax';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInView: false
        }
    }

    onEnter = () => {
        this.setState({ isInView: true });
    }
    render() {
        return (
            <ParallaxBanner
                layers={[
                    {
                        image: `${image}`,
                        amount: 0.5,
                        slowerScrollRate: false,
                    }
                ]}
                style={{
                    height: '50vh',
                }}
            >
                {/* <Waypoint onEnter={this.onEnter} />
                <div className="outer_counter_main ">
                    <div className="d-flex bd-highlight   counter_main">
                        <div className="p-2 flex-fill bd-highlight  counter_title"><h1 className="display-3">{this.state.isInView && <CountUp start={0} end={70} duration={2.75} useEasing={true} decimal="," useGrouping={true} />}</h1><h1 className="display-4">Application</h1></div>
                        <div className="p-2 flex-fill bd-highlight  counter_title"><h1 className="display-3">{this.state.isInView && <CountUp start={0} end={100} duration={2.75} useEasing={true} decimal="," useGrouping={true} />}</h1><h1 className="display-4">Countries</h1></div>
                        <div className="p-2 flex-fill bd-highlight  counter_title"><h1 className="display-3">{this.state.isInView && <CountUp start={0} end={500} suffix="" duration={2.75} useEasing={true} decimal="," useGrouping={true} />}</h1><h1 className="display-4">Jobs</h1></div>
                        <div className="p-2 flex-fill bd-highlight  counter_title"><h1 className="display-3">{this.state.isInView && <CountUp start={0} end={85} suffix="" duration={2.75} useEasing={true} decimal="," useGrouping={true} />}</h1><h1 className="display-4">Offer</h1></div>
                    </div>
                </div> */}

                <Waypoint onEnter={this.onEnter} />
                <div className="row text-white" style={{ height: '50vh' }}>
                    <div className="col-sm d-flex align-items-center justify-content-center">
                        <h1 className="display-3">{this.state.isInView && <CountUp start={0} end={5000} duration={2.75} useEasing={true} decimal="," useGrouping={true} />}</h1><h1 className=""> + &nbsp;Flights</h1>
                    </div>
                    <div className="col-sm d-flex align-items-center justify-content-center">
                        <h1 className="display-3">{this.state.isInView && <CountUp start={0} end={475} duration={2.75} useEasing={true} decimal="," useGrouping={true} />}</h1><h1 className=""> + &nbsp; Destinations</h1>
                    </div>
                    <div className="col-sm d-flex align-items-center justify-content-center">
                        <h1 className="display-3">{this.state.isInView && <CountUp start={0} end={100} suffix="" duration={2.75} useEasing={true} decimal="," useGrouping={true} />}</h1><h1 className=""> + &nbsp; Pilots</h1>
                    </div>
                </div>

            </ParallaxBanner>
        );
    }
}
export default Counter;