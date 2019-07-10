import React, { Component } from 'react'
import { MDBContainer, MDBMask } from "mdbreact";

export default class ImageMask extends Component {
    render() {
        return (
            <MDBMask overlay="white-slight" className="waves-light">
                <input
                        type="file"
                        className="custom-file-input"
                        id="inputGroupFile01"
                        aria-describedby="inputGroupFileAddon01" />
                <MDBContainer className={"text-center"} style={{ backgroundColor:"#fff2", height:"100%",  }} >
                    <label 
                            htmlFor="inputGroupFile01" 
                            style={{cursor:"pointer", backgroundColor:"#fff8", width:"100%", fontSize:32}}>
                            Upload
                    </label>
                </MDBContainer>
            </MDBMask>
        )
    }
}