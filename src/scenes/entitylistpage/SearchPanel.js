import React, { Component } from 'react'
import {MDBInput, MDBBtn, MDBRow, MDBCol} from 'mdbreact'
export default class SearchPanel extends Component {

    handleSearchBtn(){

    }

    renderSearchFields(){
        const {searchDataFields} = this.props;
        console.log(searchDataFields)
        if(searchDataFields===null ||searchDataFields===undefined || searchDataFields.length===0) return null;
        const searchFields = searchDataFields.map((searchDataField, index)=>{
            return (
                <MDBCol key={index} xs="2" sm="2"  md="2" lg="2" xl="2">
                    <MDBInput
                        label={searchDataField.label}
                        // icon="envelope"
                        group
                        // type="email"
                        validate
                        error="wrong"
                        success="right"
                        getValue={
                            value=> {
                                const state = {...this.state};
                                state[searchDataField.fieldName] = value;
                                this.setState(state);
                            }
                        }
                    />
                </MDBCol>
            )
        })
        return searchFields;
    }
    render() {
        
        return (
            <form>
                <div className="grey-text">
                    <MDBRow>
                        {this.renderSearchFields()}
                    </MDBRow>
                    <span className="text-danger">{this.props.errorMsg}</span>
                </div>
                <div className="text-center">
                <MDBBtn color="light-blue" onClick={this.handleSearchBtn}>Search</MDBBtn>
                </div>
            </form>
        )
    }
}
