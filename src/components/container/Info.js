import React from 'react';
import { connect } from 'react-redux';

const Info = (props) => (
    <section className="container-fluid">
        <div className="row text-pg-content">
            <div className="col-sm-8 offset-sm-2">
                <div className="parsed-html" >
                    <p>The Australian bushfire season in Queensland and New South Wales generally starts in November
    and ends in the following year’s March, which are the driest months in these regions. Large Bushfires
    can result in a fire storms, which are often named after the day that the firestorm starts, such as
    “Ash Wednesday” and “Black Saturday”, both of which were major bushfires which resulted in
    extensive property damage and loss of life.
    <br />
                        During such firestorms, Ryan Aviation will use its extensive network of helicopters to water bomb
                        fires and also to drop fire retardant on bush and properties. Both these activities must be conducted
                        in coordination with ground fire fighters so maximum benefit can be achieved out of these air drops.
    Ryan Air aircrafts have an onboard GPS that tracks details such as</p>

                </div>
            </div>
        </div>
    </section >
);



export default Info;