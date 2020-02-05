import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, Nav, NavItem, } from 'reactstrap';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer ">
                <div className="text-center container ">

                    <div className="row justify-content-md-center">

                        <div className="navbar-expand-md footer-nav">

                            <NavItem>
                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="dropdown-item" to="/executivebody">Pilots</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="dropdown-item" to="/managementTeam">Management Team</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="dropdown-item" to="/executivebody">Ground staff</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/employers">Vacancy</NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                            </NavItem>
                        </div>

                    </div>

                    <hr />
                    <div className="row text-center justify-content-md-center">
                        <p>
                            Copyright &copy; 2020 Design and Developed by
            <a href="#" > Mausam </a> and <a href="#" >Manjil</a>. All rights reserved
        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;