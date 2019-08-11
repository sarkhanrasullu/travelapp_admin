import React, { Component } from 'react'
import {StateUtil} from '../utils/StateUtil';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './DNDatePicker.css';
import CommonUtil from '../utils/CommonUtil';

const style = { 
    errorInput: {borderColor:"red", borderWidth:1}
  };
export class DNDatePicker extends Component {

    render(){
        const {item, error, readOnly, component, key } = this.props;
            
        const {label, type, name} = item;
        let currentValue = StateUtil.get(component.state, name);
        if(typeof currentValue === "string"){
            currentValue = new Date(currentValue);
        }
        currentValue = currentValue?currentValue:null;
        let result = 
            <div className="md-form default_datepicker">
                    <DatePicker
                            selected={currentValue}
                            onChange={(val)=>{ 
                                StateUtil.handleFieldChange(this, val, item.name);
                            }}/>
            </div>
        return result;
    }
  
}
