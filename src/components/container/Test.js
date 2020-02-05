import React, { Component } from 'react';

class Test extends Component {
    render() {
        return (
            <div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-auto">
                            <div className="side_menu">
                                <div className="fa-2x"><i className="fas fa-home fa-fw" ></i> <span className="nav_title">Home</span></div>
                                <div className="fa-2x"><i className="fas fa-info fa-fw" ></i> <span className="nav_title">Home</span></div>
                                <div className="fa-2x"><i className="fas fa-book fa-fw" ></i> <span className=""><span className="nav_title">Home</span></span></div>
                                <div className="fa-2x"><i className="fas fa-pencil-alt fa-fw" ></i> <span className="nav_title">Home</span></div>
                                <div className="fa-2x"><i className="fas fa-cog fa-fw" ></i> <span className="nav_title">Home</span></div>

                            </div>
                        </div>
                        <div className="col-lg-10">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="input-form">
                                        <form>
                                            <div className="form-group row">
                                                <label htmlFor="id" className="col-sm-2 col-form-label">id</label>
                                                <div className="col-sm-10">
                                                    <input type="number" readOnly className="form-control-plaintext" id="id" value="1" disabled />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="title" className="col-sm-2 col-form-label">Title</label>
                                                <div className="col-sm-10">
                                                    <input type="text" className="form-control" id="title" placeholder="Feature Title" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="image" className="col-sm-2 col-form-label">Image</label>
                                                <div className="col-sm-10">
                                                    <input type="file" className="form-control-file" id="image" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
                                                <div className="col-sm-10">
                                                    <textarea rows="7" ></textarea>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>



            </div>
        );
    }
}

export default Test;