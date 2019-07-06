import React, { Component } from 'react'
import { MDBCard, MDBCardBody } from 'mdbreact';
import MenuList from '../../components/menulist/MenuList';

class LeftContainer extends Component {

  render() {
    return (
      <MDBCard bg="light" className="mb-2">
        <MDBCardBody> 
          <MenuList/>
        </MDBCardBody>
      </MDBCard>
    )
  }
}

export default LeftContainer;