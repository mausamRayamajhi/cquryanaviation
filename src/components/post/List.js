import React from 'react';
import Navigation from '../container/Navigation';
import Footer from '../container/Footer';
import { Link }  from 'react-router-dom';
import { connect } from 'react-redux';
import {imageUrlServer} from '../../util/constant';
//import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

const method = ()=>{
 window.scroll(0,0);
}
 const List = (props) =>(
            <div onLoad={method}>
                <Navigation  />
                      <div className="container section-bg-first pd-div">
                        {props.announcements.map( (announcement)=><div key={announcement.id} className="card post-list">
                            <div className="row">
                                <div className="col-sm-10 post-list-desc">
                                    <h6>
                                    <Link to={`/announcement/${announcement.id}`}className="post-list-title">{announcement.title}
                                    </Link> 
                                        <span className="post-list-date">&ndash; {announcement.createDateTime.split("T")[0]}</span>
                                    </h6>

                                       <div  className="post-short" dangerouslySetInnerHTML={{ __html: announcement.description }} />

                                     <Link to={`/announcement/${announcement.id}`} className="float-right">Read more..</Link> 
                                </div>
                                <div className="col-sm-2 img-box">
                                   {announcement.image? <img src={`${imageUrlServer}${announcement.image}`} className="user-img img-fluid" alt="postImage" />: ''}
                                </div>
                            </div>
                        </div>)}
                    </div> 
                <Footer />    
            </div>
        );

const mapStateToProps = (state)=>{
    return{
        announcements:state.announcements
    };
};

const connectedList = connect(mapStateToProps)(List);

export default connectedList;