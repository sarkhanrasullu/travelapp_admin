import React, { Component } from 'react'
import {View} from 'mdbreact'
import NationalityPicker from '../nationalitypicker/NationalityPicker';
import ModelPicker from '../modelpicker/ModelPicker';
import BrandPicker from '../brandpicker/BrandPicker';
import CarUtilityPicker from "../carutilititypicker/CarUtilityPicker";
import MyImagePicker from '../myimagepicker/MyImagePicker';
import EducationPicker from '../educationpicker/EducationPicker';
import GenderPicker from '../genderpicker/GenderPicker';
import MapPicker from '../mappicker/MapPicker';
import DefaultFormInput from '../defaultforminput/DefaultFormInput';
import MyImagesPicker from '../myimagespicker/MyImagesPicker';

const style = {
  errorInput: {borderColor:"red", borderWidth:1, fontSize:16, fontWeight:"bold"},
  defaultInput: {fontSize:16, fontWeight:"bold"}
};

export default class FormInput extends Component {
    state = {
        val: null
    }

    
    render() {
        const {unwrap, label, error, optional, type, key} = this.props;
        if(type==="empty") return null;
        const inputComponent = this.getInputComponent();
        
        const result = unwrap?inputComponent:
                <div key={key} >
                  {label?<span  style={error ? style.errorInput:style.defaultInput} >{label+(optional?"":" (*)")} </span>:null}
                  {inputComponent}
                </div>
        return result;        
    }

    getInputComponent = ()=>{
      const { placeholder, type, error, readOnly, name, parent, customComponent, key } = this.props;

      let result =[];

      const {component} = this.props;
      if(type==="text" || type==="textarea"||type==="password"){
        result.push(<DefaultFormInput key={key} placeholder={placeholder} type={type} readOnly={readOnly} error={error} component={component} name={name} />);
      }else if(type==="nationalitypicker"){
        result.push(<NationalityPicker key={key} readOnly={readOnly} error={error} component={component} name={name}/>);
      }else if(type === "imagepicker" || type === "image_base64"){
        result.push(<MyImagePicker key={key} readOnly={readOnly} error={error} component={component} name={name} type={type}/>);
      }else if(type === "imagespicker"){
        result.push(<MyImagesPicker key={key} parent={parent} readOnly={readOnly} error={error} component={component} name={name} type={type}/>);
      }else if(type === "brandpicker"){
        result.push(<BrandPicker key={key} readOnly={readOnly} error={error} component={component} name={name}/>);
      }else if(type === "modelpicker"){
        result.push(<ModelPicker key={key} readOnly={readOnly} error={error} component={component} name={name} />);
      }else if(type === "carutilitypicker"){
        result.push(<CarUtilityPicker key={key} readOnly={readOnly} error={error} component={component} name={name} />);
      }else if(type === "educationpicker"){
        result.push(<EducationPicker key={key} readOnly={readOnly} error={error} component={component} name={name} />);
      }else if(type === "genderpicker"){
        result.push(<GenderPicker key={key} readOnly={readOnly} error={error} component={component} name={name} />);
      }else if(type === "mappicker"){
        result.push(<MapPicker key={key} readOnly={readOnly} error={error} component={component} name={name} />);
      }else if(type === "custom"){
        result.push(customComponent);
      } 

      return result;
    }
    
}


    
