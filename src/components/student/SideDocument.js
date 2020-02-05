import React from 'react';
import { NavLink } from 'react-router-dom';

import { Card, Button, CardTitle, CardText } from 'reactstrap';

class SideDocument extends React.Component {
    render() {
        return (
            <div className="pg-document">

                <Card body>
                    <CardTitle>Official Document</CardTitle>
                    <CardText>
                        <a href="files/Student_Application_Form_2018_7.pdf">&#62; Student Form</a><br />
                        <a href="files/Employer-Offer-Form_6.pdf">&#62; Employer Form</a>
                    </CardText>
                    <hr />
                    <CardText>
                        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                    </CardText>

                </Card>

            </div>
        );
    }
}

export default SideDocument;