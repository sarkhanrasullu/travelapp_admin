import React, { Component } from 'react'
import StateUtil from '../../utils/StateUtil';
import {MDBInput, View} from 'mdbreact'

const style = {
    errorInput: {borderColor:"red", borderWidth:1}
  };

export default class DefaultFormInput extends Component {
    render(){
        const { placeholder, error, readOnly, type, component, name, key } = this.props;
        let currentValue = StateUtil.get(component.state, name);
        currentValue = currentValue?currentValue+"":null;
  
        let result = <MDBInput  
                              key={key}
                              type={type?type:"text"}
                              rows={10}
                              disabled={readOnly}  
                              placeholder={placeholder} 
                              value={currentValue} 
                              style={error ? style.errorInput:style.defaultInput} 
                              getValue={(val)=>{ 
                                StateUtil.handleFieldChange(this, val);
                              }
                      }/>;
  
        return result;
      }
}
