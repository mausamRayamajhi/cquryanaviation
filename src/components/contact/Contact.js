import React from 'react';
import Navigation from '../container/Navigation';
import Footer from '../container/Footer';
import ContactInfo from './Contact_info';
import ContactOffice from './Contact_office';

class Contact extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <ContactInfo />
                <ContactOffice />
                <Footer />
            </div>
        );
    }
}

export default Contact;