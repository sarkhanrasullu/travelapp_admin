import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DynamicForm from "../../components/dynamic_form/DynamicForm";
import LoginService from "./LoginService";

class Login extends Component {

  service = new LoginService(this);
 
  render() {
    console.log('render');
    console.log(this.service.get('loggedInUser'));
    return (
        <MDBContainer style={{ margin: "auto" }}>
          <MDBRow>
            <MDBCol md="3" />
            <MDBCol md="6">
            <DynamicForm 
                      component={this}
                      sections={
                          [
                            {
                              items:[
                                { name:"user.email", label:"Email" },
                                { name:"user.password", label:"Password", secure:true }
                              ]
                            }          
                          ]
                      }
                      submit={
                          {
                              label: "Login",
                              action: (target)=>{this.service.handleLogin(target)}
                          }
                      }
                    />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
    );
  } 
}

const mapStateToProps = state => {
  console.log(state);
  return {
    loggedInUser: state.auth.loggedInUser,
    isLoading: state.loading.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoggedInUser: loggedInUser => dispatch(actions.setLoggedInUser(loggedInUser)),
    setLoading: loading => dispatch(actions.setLoading(loading))
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(withRouter(Login));
