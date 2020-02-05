import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Contact_info extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            fullName: '',
            contact: '',
            email: '',
            message: '',
            isLoading: false
        };
    }

    handleChange = event => {
        if (event.target.name != "contact") {
            this.setState({
                [event.target.name]: event.target.value
            });
        } else {
            const contact = event.target.value;
            if (contact.match(/^[0-9]*$/)) {
                this.setState({
                    contact
                });
            }
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({ isLoading: true });

        if (!!this.state.contact && this.state.contact.length == 10 && !!this.state.message) {
            const self = this;
            startAddContactUs(this.state).then(

                (id) => {
                    self.setState({ isLoading: false });
                    if (id > 0) { alert("Message successfully send. You will get a call or email from us. Thank you from contacting us.") } else { alert("Something went wrong") }
                }
            );
        } else {
            alert("Something went wrong. Check your contact number and email is correct or not. All the fields are required.");
            this.setState({ isLoading: false });
        }
    }

    render() {
        return (
            <section className="container-fluid section-header-first">

                <div className="row section-img-content pg-content">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-7 mt-4 mb-2">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7063.878422713903!2d85.32510126519585!3d27.719163100000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xea8e6cf1771fb8dd!2sCIVIL+INITIATIVE%2F+IAESTE+NEPAL!5e0!3m2!1sen!2snp!4v1524426186336" width="100%" height="100%"></iframe>
                            </div>
                            <div className="col-md-5 contact-form mt-2">
                                <form id="signup-form" onSubmit={this.handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="full_name">Name</label>
                                        <input type="text" className="form-control" value={this.state.fullName} onChange={this.handleChange} id="fullName" name="fullName" placeholder="Enter Your Name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input type="text" maxLength="10" className="form-control" id="contact" name="contact" value={this.state.contact} onChange={this.handleChange} placeholder="Your Contact Number" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" className="form-control" id="r-email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Your Email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message</label>
                                        <textarea className="form-control" id="message" name="message" value={this.state.message} onChange={this.handleChange} placeholder="Message" required></textarea>
                                    </div>
                                    {this.state.isLoading ? <div className="fa-2x text-center ">   <FontAwesomeIcon icon="spinner" pulse />   </div>
                                        : <button type="submit" className="btn btn-info btn-block">Send Us Message</button>}
                                </form>
                            </div>

                        </div>
                    </div>

                </div>

            </section>
        );
    }
}

export default Contact_info;