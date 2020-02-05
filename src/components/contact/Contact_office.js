import React from 'react';
import { Link } from 'react-router-dom';
import { contactOffice } from '../../util/constant';
import contactOfficelist from '../post/contactOfficelist';

class Contact_office extends React.Component {
    render() {
        return (
            <section className="section-bg-component">
                <h2>Contact Office</h2>
                <div className="row section-bg-content container our-location">
                    {contactOffice.map((contact, i) => (i < 3 && <div key={i} className="col-md feature mb-3">
                        <h4>{contact.officeTitle}</h4>
                        <p>{contact.resident}</p>
                        <p>{contact.address}</p>

                        <p>{contact.contact}</p>
                        <p>
                            {contact.email}
                        </p>
                    </div>))}
                </div>
                {contactOffice.length > 3 && <h4 className="news-first-h4 d-flex justify-content-center">
                    <Link to="/contactOfficelist"><button className="btn btn-primary">View more...</button></Link>
                </h4>}
            </section>
        );
    }
}

export default Contact_office;