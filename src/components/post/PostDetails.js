import React from 'react';
import { connect } from 'react-redux';
import Navigation from '../container/Navigation';
import Footer from '../container/Footer';
import { imageUrlServer } from '../../util/constant';


const PostDetails = (props) => (
    <div>
        <Navigation />
        {props.features.map((item) => (item.id == props.match.params.id &&
            <div key={item.id} className="container-fluid pd-div section-bg-first col-md-8 offset-md-2">

                <h4 className="mt-4 forum-title">{item.title}</h4>
                <p className="post-date font-weight-light"> Posted on:                               {item.createDateTime ? item.createDateTime.split("T")[0] : ''}
                </p>
                <div className="parsed-htmlt text-center">
                    {item.image && <img className="img-fluid" src={`${imageUrlServer}${item.image}`} alt="item image" />}
                    {/* <p>{item.description}</p> */}
                    <div dangerouslySetInnerHTML={{ __html: item.description }} />
                </div>

            </div>
        ))}
        <Footer />
    </div>
);
const mapStateToProps = (state) => {
    let path = window.location.pathname;
    path = path.split("/")[1];
    if (path == "announcement") {
        return {
            features: state.announcements
        }
    } else {
        return {
            features: state.features
        }
    }

};

const connectedFeature = connect(mapStateToProps)(PostDetails);

export default connectedFeature;