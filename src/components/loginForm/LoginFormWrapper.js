import React, { Component } from 'react'
import TabWrapper from "../UI/tab/TabWrapper";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export default class LoginFormWrapper extends Component {
  render() {
    const loginForm = <LoginForm/>
    const signupForm = <SignupForm/>
    return (
      <TabWrapper navItems={[
        {tabHeader:"Login",tabContent:loginForm},
        {tabHeader:"Sign Up",tabContent:signupForm}
      ]}/>
    );
  }


  
}
