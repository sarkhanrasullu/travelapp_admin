import React, { Component } from 'react'
import {MDBInput, MDBBtn, MDBRow, MDBCol, MDBContainer} from 'mdbreact'
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import StateUtil from '../../utils/StateUtil';

class EntityEditPage extends Component {

    componentDidMount(){
        console.log(this.props);
        this.props.onLoad(this.props.endpoint+"/"+this.props.match.params.entityId);
    }

    handleSubmitBtn(){

    }

    renderSubmitButton(){
       return (
                <div className="text-center">
                    <MDBBtn color="light-blue" onClick={this.handleSubmitBtn}>Save</MDBBtn>
                </div>
            )
    }

    renderFormFields(){
        const {formDataFields, photoDataFields, dateDataFields} = this.props.formProps;
        if(formDataFields===null ||formDataFields===undefined || formDataFields.length===0) return null;
        const formFields = formDataFields.map((formDataField, index)=>{
            return (
                    <MDBCol key={index} md="6">
                        {StateUtil.renderFormData(this.props.selectedEntity, formDataField,[], photoDataFields, dateDataFields)}
                    </MDBCol>
            )
        })
        return formFields;
    }

    render() {
        return (
            <form>
                <MDBContainer style={{margin:"auto"}}>
                    <MDBRow>
                        <MDBCol md="3">

                        </MDBCol>
                        <MDBCol md="6">
                            <MDBRow>
                                {this.renderFormFields()}
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>
                    <span className="text-danger">{this.props.errorMsg}</span>
                    {this.renderSubmitButton()}
                </MDBContainer>
            </form>
        )
    }
}



const mapStateToProps = (state) => {  
    console.log(state);
    return {
        selectedEntity: state.entity.selectedEntity
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onLoad: (url) => dispatch(actions.loadItem(url)),
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EntityEditPage));