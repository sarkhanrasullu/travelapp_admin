import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBBadge } from "mdbreact";
import ImageMask from './ImageMask';

export default class Image extends Component {
  render() {
      const {image, onDelete, onUpload} = this.props;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img className="img-fluid" src={image} alt="" style={{height:100, width:"100%"}}/>
               <ImageMask onClick={onUpload}/>
            </MDBView>
            <MDBRow className="mb-3">
              <MDBCol size="12">
                  <MDBBadge color="pink" onClick={onDelete} style={{cursor:"pointer"}}> Delete </MDBBadge>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
 
}
