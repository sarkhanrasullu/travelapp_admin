import React, { Component } from 'react'
import {StateUtil} from '../utils/StateUtil';
import {MDBInput} from 'mdbreact'
import './DefaultFormInput.css';

const style = { 
    errorInput: {borderColor:"red", borderWidth:1}
  };

export class DefaultFormInput extends Component {
    render(){
        const {item, error, readOnly, component, key } = this.props;
        
        const {label, type, name} = item;
        let currentValue = StateUtil.get(component.state, name);
        currentValue = currentValue?currentValue+"":null;
  
        let result = <MDBInput  
                              className={type+" default_input"}
                              key={key}
                              type={type}
                              rows={10}
                              disabled={readOnly}  
                              placeholder={label} 
                              value={currentValue} 
                              style={error ? style.errorInput:style.defaultInput} 
                              getValue={(val)=>{ 
                                StateUtil.handleFieldChange(this, val, item.name);
                              }
                      }/>;
  
        return result;
      }
}
