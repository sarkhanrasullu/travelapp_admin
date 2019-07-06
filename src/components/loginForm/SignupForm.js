import React, { Component } from "react";
import { MDBInput, MDBBtn } from 'mdbreact';
import customAxios from '../../services/CommonAxios';
const querystring = require('querystring');

class SignupForm extends Component {
  state = {
    name: null,
    email: null,
    password: null
  }

  signUp = () => {
      customAxios.post('/customers', 
      querystring.stringify(this.state))
      .then(resp=>{
        this.setState({errorMsg: null});
        this.setState({successMsg: "Successfully registered. You can now log in!"});
      }).catch(err=>{
          this.setState({errorMsg: err.response.data.error.message});
      })
  }

  render(){
      return (
        <form>
            <div className="grey-text">
              <MDBInput
                label="Type your email"
                icon="envelope"
                group
                type="email"
                validate
                error="wrong"
                success="right"
                getValue={(val)=>{this.setState({email:val})}}
              />
              <MDBInput
                label="Type your password"
                icon="lock"
                group
                type="password"
                validate
                getValue={(val)=>{this.setState({password:val})}}
              />
              <span className="text-danger">{this.state.errorMsg}</span>
              <span className="text-success">{this.state.successMsg}</span>
            </div>
            <div className="text-center">
              <MDBBtn color="light-blue" onClick={this.signUp}>Sign up</MDBBtn>
            </div>
        </form>
      );
  }
};

export default SignupForm;