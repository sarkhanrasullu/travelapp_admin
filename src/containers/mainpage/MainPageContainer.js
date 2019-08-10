import React, { Component } from 'react'
import Navbar from '../../components/navbar/Navbar';

export default class MainPageContainer extends Component {
  render() {
    return (
            <React.Fragment >
                <Navbar/>
                <div style={{paddingTop:30}}>
                    {this.props.children}
                </div>
            </React.Fragment>
    )
  }
}
