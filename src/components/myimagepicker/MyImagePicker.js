import React, { Component } from 'react'
import Image from '../image/Image';
import StateUtil from '../../utils/StateUtil';
import FormInput from '../forminput/FormInput';

export default class MyImagePicker extends Component {
    render() {
        const { error, readOnly, type, component, name, key } = this.props;
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
        <React.Fragment key={key}>
            <Image image={result} onDelete={this.props.onDelete} key={1}/>
            <FormInput key={2}
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
