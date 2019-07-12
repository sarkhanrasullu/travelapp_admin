import React, { Component } from "react";
import { MDBBtn, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FormInput from '../forminput/FormInput';
import StateUtil from "../../utils/StateUtil";

class DynamicForm extends Component {
 
  state = {
    target:{
      validate:()=>this.validate(),
      validation:{}
    }
  }

  validate=()=>{
    const state = this.state;
    const validation = state.target.validation;
  
    let result = true;
    
    const {sections} = this.props;
    sections.forEach((section)=>{
       const {items} = section;
       items.forEach((item)=>{
         if(!item.name) return;
         validation[item.name] = false;
         if(!item.optional){
           const data = StateUtil.getFromObj(state.target, item.name);
           if(!data || (data+"").trim().length===0){
             validation[item.name] = true;
             result = false;
           }
         }
       })
    })
    console.log(validation);
    state.target.validation = validation;
    this.setState(state);
    return result;
}
 
  renderItem = (item, index)=>{
     const {readOnly} = this.props;
     const validation = readOnly? {}:this.state.target.validation;
      return (
        <FormInput 
                        component         ={this} 
                        name              ={"target."+item.name} 
                        secure            ={item.secure}
                        optional          ={item.optional}
                        customComponent   ={item.customComponent}
                        type              ={item.type} 
                        label             ={item.label} 
                        error             ={validation[item.name]} 
                        readOnly          ={readOnly} 
                        key               ={index} 
                />
      )
      
  }

  renderSections = ()=>{
    const {sections} = this.props;
    const sectionsComponent =  sections.map((section, index)=>{
        const items = section.items;
        const itemsComponent = items.map((item, index)=>{
                return <MDBCol md="6" key={index}>{this.renderItem(item, index)}</MDBCol>; 
        });
        return <MDBRow key={index}>{itemsComponent}</MDBRow>;
      });

      return sectionsComponent;
  }

  renderSubmitButtons = ()=>{
    let submitComponent = null;
    if(this.props.submit)
        submitComponent = (
            <MDBRow>
                <MDBCol >
                    <span className="text-danger">{this.props.errorMsg}</span>
                    <div className="text-center">
                        <MDBBtn color="light-blue" onClick={()=>this.props.submit.action(this.state.target)}>
                            {this.props.submit.label}
                        </MDBBtn>
                    </div>
                </MDBCol>
            </MDBRow>)

    return submitComponent;
  } 

  render() {
    const sectionsComponent = this.renderSections();
    const submitComponent = this.renderSubmitButtons();
    return (
        <MDBContainer style={{ margin: "auto" }}>
                {sectionsComponent}
                {submitComponent}
        </MDBContainer>
    );
  }

  
}

const mapStateToProps = state => {
  return {
    loading: state.loading.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLoading: isLoading => dispatch(actions.setLoading(isLoading))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(DynamicForm));
