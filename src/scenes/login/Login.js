import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import DynamicForm from "../../components/dynamic_form/DynamicForm";

class Login extends Component {
  handleSubmitBtn() {}
 
  render() {
    return (
        <MDBContainer style={{ margin: "auto" }}>
          <MDBRow>
            <MDBCol md="3" />
            <MDBCol md="6">
                <DynamicForm 
                        sections={
                            [
                                {
                                    rows:[
                                        {
                                            cols:[
                                            {
                                                label:"Name",
                                            }
                                            ]
                                        },
                                        {
                                            cols:[
                                            {
                                                label:"Surname",
                                            }
                                            ]
                                        }
                                    ],
                                    
                                }
                            ]
                        }

                        submit={
                            {
                                label: "Login",
                                action:null
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
    loggedInUser: state.auth.loggedInUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoggedInUser: loggedInUser => dispatch(actions.setLoggedInUser(loggedInUser))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Login));
