import React, { Component } from 'react'
import NavbarWrapper from '../../components/UI/NavbarWrapper';

export default class MainPageContainer extends Component {
  render() {
    return (
            <React.Fragment >
                <NavbarWrapper/>
                <div style={{paddingTop:30}}>
                    {this.props.children}
                </div>
            </React.Fragment>
    )
  }
}
