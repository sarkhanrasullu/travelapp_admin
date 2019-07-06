import React, { Component } from 'react'
import { MDBBtn } from 'mdbreact';

export default class AddtoCartButton extends Component {
  render() {
    return (
      <div>
          <MDBBtn className="badge badge-pill p-3" color="danger">
                    Add to cart
          </MDBBtn>
      </div>
    )
  }
}
