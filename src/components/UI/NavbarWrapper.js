import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse
} from "mdbreact";
import { connect } from "react-redux";
import LoginService from "../../services/LoginService";

class NavbarWrapper extends Component {
  service_login = new LoginService(this);
  state = {
    isOpen: false,
    loginModal: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  toggleLogin = () => {
    this.setState({
      loginModal: !this.state.loginModal
    });
  };

  componentDidUpdate() {
    if (this.props.user && this.state.loginModal) {
      this.setState({ loginModal: false });
    }
  }

  linkItem = (link, label) => {
    return (
      <MDBNavItem>
        <MDBNavLink to={link}>{label}</MDBNavLink>
      </MDBNavItem>
    );
  };

  render() {
    const loggedInUser = this.service_login.getLoggedInUser();
    return (
      <React.Fragment>
        <MDBNavbar style={{ backgroundColor: "#82b1ff" }} dark expand="md">
          <MDBNavbarBrand>
            <MDBNavLink to="/">
              <strong className="white-text">ADMIN PANEL</strong>
            </MDBNavLink>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          {loggedInUser ? (
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
              <MDBNavbarNav left>
                {this.linkItem("/users","Users")}
                {this.linkItem("/drivers","Drivers")}
                {this.linkItem("/guides","Guides")}
                {this.linkItem("/trips","Trips")}
                {this.linkItem("/feedbacks","Feedbacks")}
                {this.linkItem("/helps","Help Requests")}
                {this.linkItem("/languages","Languages")}
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem onClick={() => this.service_login.logout()}>
                  <MDBNavLink to="#">({loggedInUser.email}) LOGOUT</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          ) : null}
        </MDBNavbar>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarWrapper);
