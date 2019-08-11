import React, { Component } from 'react'
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';

export class ModalWrapper extends Component {
      render() {
        let {modalSize, header,footer,  body, toggle, show} = this.props;
        modalSize = modalSize?modalSize:"md";
        return (
          <MDBContainer>
            <MDBModal isOpen={show} toggle={toggle} size={modalSize} backdrop={true} >
              {header?<MDBModalHeader toggle={toggle}>
                {header}
              </MDBModalHeader>:null
              }
              {body?<MDBModalBody >
                {body}
              </MDBModalBody>:null}
              {footer?<MDBModalFooter>
                {footer}
              </MDBModalFooter>:null}
            </MDBModal>
          </MDBContainer>
        );
      }
}