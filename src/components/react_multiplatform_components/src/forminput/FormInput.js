import React, { Component } from 'react'
import {MyImagePicker} from '../myimagepicker/MyImagePicker';
import {MapPicker} from '../mappicker/MapPicker';
import {DefaultFormInput} from '../defaultforminput/DefaultFormInput';
import {MyImagesPicker} from '../myimagespicker/MyImagesPicker';
import { InputFieldType } from '../datatable/DataTableTypes';
import {CheckBox} from '../checkbox/CheckBox';
import {DNDatePicker} from '../datepicker/DNDatePicker';
import {Editor} from '../editor/Editor';
import ModelPicker from '../modelpicker/ModelPicker';
import BrandPicker from '../brandpicker/BrandPicker';
import { ItemPicker } from '../itempicker/ItemPicker';

const style = {
  errorInput: {borderColor:"red", borderWidth:1, fontSize:16, fontWeight:"bold"},
  defaultInput: {fontSize:16, fontWeight:"bold"}
};

export class FormInput extends Component {
    state = {
        val: null
    }

    
    render() {
        const {item, error, key} = this.props;
        if(!item) return null;
        const {label, optional, type} = item;
        if(type==="empty") return null;
        const inputComponent = this.getInputComponent();
        
        const result = <div key={key} >
                            {label?<span  style={error ? style.errorInput:style.defaultInput} >{label+(optional?"":" (*)")} </span>:null}
                            {inputComponent}
                        </div>
        return result;        
    }

    getInputComponent = ()=>{
      const { component, item, error, readOnly, parent, customComponent, key } = this.props;
      const { type } = item;

      let result_component = null;
      switch(type){
        case InputFieldType.TEXT:
        case InputFieldType.TEXT_AREA:
        case InputFieldType.PASSWORD:
                result_component = <DefaultFormInput  
                                        item={item} key={key} readOnly={readOnly} error={error} component={component} />;
                break;
        case InputFieldType.IMAGE_URL:
                result_component = <MyImagePicker     
                                        item={item} key={key} readOnly={readOnly} error={error} component={component} parent={parent}/>;
                break;
        case InputFieldType.IMAGE_URL_MULTIPLE:
                result_component = <MyImagesPicker    
                                        item={item} key={key} readOnly={readOnly} error={error} component={component} parent={parent}/>;
                break;
        case InputFieldType.MAP_PICKER:
                result_component = <MapPicker         
                                        item={item} key={key} readOnly={readOnly} error={error} component={component} />;
                break;
        case InputFieldType.CHECK_BOX:
                result_component = <CheckBox 
                                        item={item} key={key} readOnly={readOnly} error={error} component={component}/>;
                break;
        case InputFieldType.DATE:
        case InputFieldType.DATE_TIME:
                result_component = <DNDatePicker 
                                        item={item} key={key} readOnly={readOnly} error={error} component={component}/>;
                break;
        case InputFieldType.EDITOR:
                result_component = <Editor 
                                        item={item} key={key} readOnly={readOnly} error={error} component={component}/>;
                break;
        case InputFieldType.MODEL_PICKER:
                result_component = <ModelPicker
                                        item={item} key={key} readOnly={readOnly} error={error} component={component}/>;
                break;
        case InputFieldType.BRAND_PICKER:
                result_component = <BrandPicker 
                                        item={item} key={key} readOnly={readOnly} error={error} component={component}/>;
                break;
        case InputFieldType.SELECT_BOX:
                        result_component =  <ItemPicker  item      ={item} error     ={error} component ={component} />
                        break;
        case InputFieldType.CUSTOM:
                result_component = customComponent;
                break;
        default:
                result_component = <DefaultFormInput  
                                        item={item} key={key} readOnly={readOnly} error={error} component={component}/>;
      }

      return [result_component];
    }
    
}


    
