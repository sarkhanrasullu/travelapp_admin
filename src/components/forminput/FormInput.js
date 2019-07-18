import React, { Component } from 'react'
import {MDBInput, View} from 'mdbreact'
import StateUtil from '../../utils/StateUtil'
import NationalityPicker from '../nationalitypicker/NationalityPicker';
import ModelPicker from '../modelpicker/ModelPicker';
import BrandPicker from '../brandpicker/BrandPicker';
import CarUtilityPicker from "../carutilititypicker/CarUtilityPicker";
import MyImagePicker from '../myimagepicker/MyImagePicker';
import EducationPicker from '../educationpicker/EducationPicker';
import GenderPicker from '../genderpicker/GenderPicker';
import MapPicker from '../mappicker/MapPicker';

const style = {
  errorInput: {borderColor:"red", borderWidth:1}
};

export default class FormInput extends Component {
    state = {
        val: null
    }

    
    render() {
        const {unwrap, label, error, optional, type} = this.props;
        if(type==="empty") return null;
        const inputComponent = this.getInputComponent();
        
        const result = unwrap?inputComponent:
                <View >
                  <span  style={error ? style.errorInput:null} >{label+(optional?"":" (*)")} </span>
                  {inputComponent}
                </View>
        return result;        
    }


    getDefaultInputComponent = ()=>{
      const { placeholder, error, readOnly, type, component, name } = this.props;
      let currentValue = StateUtil.get(component.state, name);
      currentValue = currentValue?currentValue+"":null;

      let result = <MDBInput  
          type={type?type:"text"}
          rows={10}
          disabled={readOnly}  
          placeholder={placeholder} 
          value={currentValue} 
          style={error ? style.errorInput:null} 
          getValue={(val)=>{ 
            StateUtil.handleFieldChange(this, val);
          }
        }
      />;

      return result;
    }

    getInputComponent = ()=>{
      const { type, error, readOnly, name, customComponent } = this.props;

      let result =[];

      const {component} = this.props;
      if(type==="text" || type==="textarea"||type==="password"){
        result.push(this.getDefaultInputComponent());
      }else if(type==="nationalitypicker"){
        result.push(<NationalityPicker readOnly={readOnly} error={error} component={component} name={name}/>);
      }else if(type === "imagepicker" || type === "image_base64"){
        result.push(<MyImagePicker readOnly={readOnly} error={error} component={component} name={name} type={type}/>);
        result.push(this.getDefaultInputComponent());
      }else if(type === "brandpicker"){
        result.push(<BrandPicker readOnly={readOnly} error={error} component={component} name={name}/>);
      }else if(type === "modelpicker"){
        result.push(<ModelPicker readOnly={readOnly} error={error} component={component} name={name} />);
      }else if(type === "carutilitypicker"){
        result.push(<CarUtilityPicker readOnly={readOnly} error={error} component={component} name={name} />);
      }else if(type === "educationpicker"){
        result.push(<EducationPicker readOnly={readOnly} error={error} component={component} name={name} />);
      }else if(type === "genderpicker"){
        result.push(<GenderPicker readOnly={readOnly} error={error} component={component} name={name} />);
      }else if(type === "mappicker"){
        result.push(<MapPicker readOnly={readOnly} error={error} component={component} name={name} />);
      }else if(type === "custom"){
        result.push(customComponent);
      } 

      return result;
    }
    
}


    
