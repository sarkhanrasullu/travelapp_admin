import React from 'react'
import { MDBBtn } from 'mdbreact';

export default class DeleteButton extends MDBBtn {
  render() {
    return (
      <MDBBtn
      size="sm"
      color="danger"
      className="float-right badge p-1"
    >
      <span>x</span>
    </MDBBtn>
    )
  }
}
