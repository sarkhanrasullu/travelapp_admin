import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand,MDBDropdown,MDBDropdownMenu,MDBDropdownItem, MDBFormInline,MDBDropdownToggle,MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse
} from "mdbreact";
import ModalWrapper from "./ModalWrapper";
import LoginFormWrapper from "../loginForm/LoginFormWrapper";
import {connect} from 'react-redux';

class NavbarWrapper extends Component {

state = {
  isOpen: false,
  loginModal: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

toggleLogin = () => {
  this.setState({
    loginModal: !this.state.loginModal
  });
}

componentDidUpdate(){
  if(this.props.user && this.state.loginModal){
    this.setState({loginModal:false});
  }
}

render() {
  let l =  null;

  if(this.props.user) {
      l =   <MDBNavLink to="#logout" onClick={this.props.logout}>
                {"Logout ("+this.props.user.customer.schema.email+")"}
            </MDBNavLink>;
  }else {
    l = <MDBNavLink to="#login" onClick={this.toggleLogin}>LOGIN/SIGNUP</MDBNavLink>;
  }
  
  return (
      <React.Fragment>
          <MDBNavbar style={{backgroundColor: '#82b1ff'}} dark expand="md">
            <MDBNavbarBrand>
                  <MDBNavLink to="/">
                      <strong className="white-text">ADMIN PANEL</strong>
                  </MDBNavLink>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            <MDBNavItem active>
              <MDBNavLink to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/users">Users</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/drivers">Drivers</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/guides">Guides</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/trips">Trips</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/feedback">Feedbacks</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink to="/helps">Help Requests</MDBNavLink>
            </MDBNavItem>
            {/* <MDBNavItem>
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Dropdown</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem> */}
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
          </MDBNavbar>
          <ModalWrapper 
            show={this.state.loginModal} 
            toggle={this.toggleLogin} 
            modalBody={<LoginFormWrapper/>}
            modalSize="md"
            />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavbarWrapper);