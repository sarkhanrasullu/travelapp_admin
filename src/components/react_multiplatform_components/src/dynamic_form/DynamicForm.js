import React, { Component } from "react";
import { MDBBtn, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import {FormInput} from '../forminput/FormInput';
import {StateUtil} from "../utils/StateUtil";

export class DynamicForm extends Component {
 
  state = {
      validate: ()=>this.validate(),
      validation: {},
      target:this.props.target?this.props.target:{}
  }

  validate=()=>{
    const state      = this.state;
    const validation = state.validation;
    let   result     = true;
    
    const {sections} = this.props;
    sections.forEach((section)=>{
       const {rows} = section;
       rows.forEach((item)=>{
         if(!item.name || item.type==="empty") return;
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
    state.target.validation = validation;
    this.setState(state);
    return result;
}
 
  renderItem = (item, index)=>{
    console.log(item);
     if(!item) return null;
     const {readOnly} = this.props;
     const validation = readOnly? {}:this.state.validation;
    
      return (
        <FormInput 
                        component         ={this} 
                        item              ={item}
                        error             ={validation[item.name]} 
                        readOnly          ={readOnly} 
                        key               ={index} 
                />
      )
      
  } 

  renderSections = ()=>{
    const {sections} = this.props;
    const sectionsComponent =  sections.map((section, index)=>{
        const rows = section.rows?section.rows:[];
        const itemsComponent = rows.map((row, index)=>{
                  const items = row.items;
                    const rowComponent = items.map((item, index)=>{
                      return (
                            <MDBCol key={index}>
                                {this.renderItem(item, index)}
                            </MDBCol>
                      ); 
                    });
                    return <MDBRow key={index}>{rowComponent}</MDBRow>;
                });
        return itemsComponent;
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
                        <MDBBtn color="light-blue" onClick={()=>
                          {
                            if(this.state.validate()) {
                              this.props.submit.action(this.state.target)
                            }
                          } 
                        }>
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