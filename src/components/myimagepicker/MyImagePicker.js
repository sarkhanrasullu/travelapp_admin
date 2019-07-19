import React, { Component } from 'react'
import Image from '../image/Image';
import StateUtil from '../../utils/StateUtil';
import FormInput from '../forminput/FormInput';

export default class MyImagePicker extends Component {
    render() {
        const { error, readOnly, type, component, name } = this.props;
        const value = StateUtil.get(component.state, name);
        let result = value;
        if(value===null || !value || value.trim().length===0) {
            result = "/upload.svg";
        } else {
            if(type==="image_base64"){
                result = "data:image/png;base64,"+value;
            }
        } 

        return (
        <React.Fragment>
            <Image image={result} onDelete={this.props.onDelete}/>
            <FormInput 
                        component         ={component} 
                        name              ={name} 
                        type              ={"text"} 
                        error             ={error} 
                        readOnly          ={readOnly} 
                />
        </React.Fragment>
        
        );
    }
 
}
