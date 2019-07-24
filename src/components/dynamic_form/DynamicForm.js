import React, { Component } from "react";
import { MDBBtn, MDBRow, MDBCol, MDBContainer } from "mdbreact";
import * as actions from "../../store/actions/index";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import FormInput from '../forminput/FormInput';
import StateUtil from "../../utils/StateUtil";

class DynamicForm extends Component {
 
  state = {
      validate: ()=>this.validate(),
      validation: {},
      target: {},
      carUtilities: []
  }

  componentWillReceiveProps(p, n){
    if(p && p.component && p.component.state)
    this.setState({target:p.component.state.target});
  }

  validate=()=>{
    const state = this.state;
    const validation = state.validation;
  
    let result = true;
    
    const {sections} = this.props;
    sections.forEach((section)=>{
       const {items} = section;
       items.forEach((item)=>{
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
     const {readOnly} = this.props;
     const validation = readOnly? {}:this.state.validation;
      return (
        <FormInput 
                        component         ={this} 
                        name              ={"target."+item.name} 
                        optional          ={item.optional}
                        customComponent   ={item.customComponent}
                        type              ={item.type} 
                        label             ={item.label} 
                        parent             ={item.parent} 
                        error             ={validation[item.name]} 
                        readOnly          ={readOnly} 
                        key               ={index} 
                />
      )
      
  } 

  renderSections = ()=>{
    const {sections} = this.props;
    const sectionsComponent =  sections.map((section, index)=>{
        const items = section.items?section.items:[];
        const itemsComponent = items.map((item, index)=>{
                return <MDBCol md={item.type==="textarea"||item.type==="imagespicker"?12:6} key={index}>{this.renderItem(item, index)}</MDBCol>; 
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
                        <MDBBtn color="light-blue" onClick={()=>
                          {
                            console.log(this.state);
                            if(this.state.validate()) {
                              this.props.submit.action(this.state.target)
                            }
                            console.log(this.state.validation);
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
