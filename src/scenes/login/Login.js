import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import LoginService from "../../services/LoginService";
import {DynamicForm, LoadingSpinner, InputField} from "../../components/react_multiplatform_components";

const formFields = [
  {
    rows:[
        {
          items:[
            new InputField("target.user.email","email"),
            new InputField("target.user.password", "password", "password"),
          ]
        }
    ]
  }
];

class Login extends Component {

  state = {
    loading: false
  }
  
  service = new LoginService(this);
 
  render() {
    if(this.state.loading){
      return <LoadingSpinner/>;
    }

    return (
        <MDBContainer style={{ margin: "auto" }}>
          <MDBRow>
            <MDBCol md="3" />
            <MDBCol md="6">
            <DynamicForm 
                      sections={formFields}
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
  return {
    isLoading: state.loading.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: loading => dispatch(actions.setLoading(loading))
  };
};

export default connect( mapStateToProps, mapDispatchToProps )(Login);
