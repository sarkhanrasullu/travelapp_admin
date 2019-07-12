import React, { Component } from 'react'
import {Input,View} from 'mdbreact'
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
        const {unwrap, label, error, optional, componentType} = this.props;
        
        const inputComponent = this.getInputComponent(componentType);
        
        const result = unwrap?inputComponent:
                <View >
                  <span  style={error ? style.errorInput:null} >{label+(optional?"":" (*)")} </span>
                  {inputComponent}
                </View>
        return result;        
    }


    getDefaultInputComponent = ()=>{
      const { placeholder, type, error, readOnly, secure } = this.props;
      let currentValue = StateUtil.get(this);
      currentValue = currentValue?currentValue+"":null;
      let result = <Input  
          type={secure?"password":"text"}
          disabled={readOnly}  
          placeholder={placeholder} 
          defaultValue={currentValue} 
          style={error ? style.errorInput:null} 
          getValue={(val, next)=>{
            console.log(next);
              let v = val;
              if(type==="number"){ v = v.replace(/[^0-9]/g, '') }
              StateUtil.handleFieldChange(this, v);
          }}
      />;

      return result;
    }

    getInputComponent = ()=>{
      const { type, error, readOnly, name, customComponent } = this.props;

      let result = this.getDefaultInputComponent();

      const {component} = this.props;
      if(type==="nationalitypicker"){
        result = <NationalityPicker readOnly={readOnly} error={error} component={component} name={name}/>
      }else if(type === "imagepicker" || type === "image_base64"){
        result = <MyImagePicker readOnly={readOnly} error={error} component={component} name={name} type={type}/>
      }else if(type === "brandpicker"){
        result = <BrandPicker readOnly={readOnly} error={error} component={component} name={name}/>
      }else if(type === "modelpicker"){
        result = <ModelPicker readOnly={readOnly} error={error} component={component} name={name} />
      }else if(type === "carutilitypicker"){
        result = <CarUtilityPicker readOnly={readOnly} error={error} component={component} name={name} />
      }else if(type === "educationpicker"){
        result = <EducationPicker readOnly={readOnly} error={error} component={component} name={name} />
      }else if(type === "genderpicker"){
        result = <GenderPicker readOnly={readOnly} error={error} component={component} name={name} />
      }else if(type === "mappicker"){
        result = <MapPicker readOnly={readOnly} error={error} component={component} name={name} />
      }else if(type === "custom"){
        result = customComponent;
      } 

      return result;
    }
    
}


    
