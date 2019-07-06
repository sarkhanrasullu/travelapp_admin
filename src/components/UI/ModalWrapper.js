import React, { Component } from 'react'
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export default class ModalWrapper extends Component {
      render() {
        let {modalSize} = this.props;
        modalSize = modalSize?modalSize:"lg";
        return (
          <MDBContainer>
            <MDBModal isOpen={this.props.show} toggle={this.props.toggle} size={modalSize} backdrop={true} >
              <MDBModalHeader toggle={this.props.toggle}>
                {this.props.header}
              </MDBModalHeader>
              <MDBModalBody >
                {this.props.modalBody}
              </MDBModalBody>
              <MDBModalFooter>
                {this.props.modalFooter}
              </MDBModalFooter>
            </MDBModal>
          </MDBContainer>
        );
      }
}