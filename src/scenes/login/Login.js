import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import DynamicForm from "../../components/dynamic_form/DynamicForm";
import LoginService from "../../services/LoginService";
import LoadingSpinner from "../../components/spinner/LoadingSpinner";

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
