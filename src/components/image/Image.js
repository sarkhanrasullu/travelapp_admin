import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBView, MDBMask, MDBBadge, MDBIcon } from "mdbreact";
import ImageMask from './ImageMask';

export default class Image extends Component {
  render() {
      const {image} = this.props;
    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBView hover rounded className="z-depth-1-half mb-4">
              <img className="img-fluid" src={image} alt="" />
               <ImageMask onClick={this.handleChange}/>
            </MDBView>
            <MDBRow className="mb-3">
              <MDBCol size="12">
                  <MDBBadge color="pink" onClick={this.handleDelete} style={{cursor:"pointer"}}> Delete </MDBBadge>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }

  handleChange = ()=>{
      console.log('change');
  }

  handleDelete = ()=>{
console.log('delete');
  }
}
