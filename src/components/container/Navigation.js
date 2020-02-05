import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import iaesteaLogo from '../../assets/images/logo.jpg';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/fontawesome-free-solid';

import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  onClick = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("name");
  };
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (

      <div>

        <Headroom
          onPin={
            () => {
              //console.log('pinned',this.myDiv);  
              const element = this.myDiv;
              element.classList.remove('fixed-top');
            }}

          onUnpin={
            () => {
              // console.log('unpinned',this.myDiv);  
              const element = this.myDiv;
              element.classList.remove('fixed-top');
            }}
          onUnfix={
            () => {
              const element = this.myDiv;
              element.classList.add('fixed-top');
            }}
        >
          <span className="fixed-top" ref={ref => this.myDiv = ref}>
            <Navbar expand="md" className="navbar-expand-md  main-nav">
              <NavLink to="/" className="navbar-brand brand-color-white ml-5">
                <img
                  src={`/${iaesteaLogo}`}
                  alt="logo"
                  className="img-fluid logo bg-white"
                  width="50"
                  height="auto" />
              </NavLink>
              <button className="navbar-toggler bg-dark" onClick={this.toggle}>
                <span className="text-white">&#8801;	</span>
              </button>
              {/* <NavbarToggler color="light" onClick={this.toggle}/> */}
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink className="nav-link" to="/aboutus">About Us</NavLink>
                  </NavItem>

                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret> Our Team </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavLink className="dropdown-item" to="/executivebody">Executive Body</NavLink>
                      </DropdownItem>
                      <DropdownItem>
                        <NavLink className="dropdown-item" to="/managementTeam">Management Team</NavLink>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>

                  <NavItem>
                    <NavLink className="nav-link" to="/student">Services</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/employers">Employers</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/partners">Booking</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                  </NavItem>


                  <NavItem>
                    <NavLink className="nav-link" to="/login">Login</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </span>
        </Headroom>
      </div>
    );
  }
}


export default Navigation;