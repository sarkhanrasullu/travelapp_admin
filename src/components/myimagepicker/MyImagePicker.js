import React, { Component } from 'react'
import Image from '../image/Image';
import StateUtil from '../../utils/StateUtil';

export default class MyImagePicker extends Component {
    render() {
        const {type, component, name} = this.props;

        const value = StateUtil.get(component.state, name);
        let result = value;

        if(value===null || !value || value.trim().length===0){
            result = "/upload.svg";
        } else {
            if(type==="image_base64"){
                result = "data:image/png;base64,"+value;
            }
        } 
        return <Image image={result}/>;
    }
 
}
