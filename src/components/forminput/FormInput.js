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
  errorInput: {borderColor:"red", borderWidth:1}
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
                <View key={key}>
                  {label?<span  style={error ? style.errorInput:null} >{label+(optional?"":" (*)")} </span>:null}
                  {inputComponent}
                </View>
        return result;        
    }

    getInputComponent = ()=>{
      const { placeholder, type, error, readOnly, name, parent, customComponent, key } = this.props;

      let result =[];

      const {component} = this.props;
      if(type==="text" || type==="textarea"||type==="password"){
        result.push(<DefaultFormInput key={key} placeholder={placeholder} type={type} readOnly={readOnly} error={error} component={component} name={name} />);
      }else if(type==="nationalitypicker"){
        result.push(<NationalityPicker readOnly={readOnly} error={error} component={component} name={name}/>);
      }else if(type === "imagepicker" || type === "image_base64"){
        result.push(<MyImagePicker readOnly={readOnly} error={error} component={component} name={name} type={type}/>);
      }else if(type === "imagespicker"){
        result.push(<MyImagesPicker parent={parent} readOnly={readOnly} error={error} component={component} name={name} type={type}/>);
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


    
