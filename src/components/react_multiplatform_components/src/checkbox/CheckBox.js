import React, { Component } from 'react'
import {StateUtil} from '../utils/StateUtil';
import './CheckBox.css';

const style = { 
    errorInput: {borderColor:"red", borderWidth:1}
  };

export  class CheckBox extends Component {
    render(){
        const {item, error, readOnly, component, key } = this.props;
        
        const {label, type, name} = item;
        let currentValue = StateUtil.get(component.state, name);
        console.log(currentValue);
        currentValue = currentValue?currentValue:false;
  
        let result = <span className="checkbox_container md-form" key={key}>
                          <input 
                              type="checkbox"
                              className="checkbox_checkmark"
                              checked={currentValue} 
                              style={error ? style.errorInput:null}/>
                          <span className="checkbox_checkmark"
                            onClick={()=>{
                              let val=!currentValue;
                              StateUtil.handleFieldChange(this, val, item.name);
                            }}
                          ></span>
                        </span>
  
        return result;
      }
}
