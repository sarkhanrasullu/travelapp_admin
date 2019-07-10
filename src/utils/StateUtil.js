import CommonUtil from "./CommonUtil";
import React, { Component } from 'react'
import {MDBInput} from 'mdbreact'
import Image from "../components/image/Image";

export default class StateUtil {
        static get = (state, name) => {
            if(!state || !name) return null;
            const p = name;
            const obj = state;
            return p.split(".").reduce((xs, x) =>xs&&xs[x]||null, obj)
        } 

        static set = (path,schema, value) => {
            if(!path || !schema || !value) return;
            var pList = path.split('.');
            var len = pList.length;
            for(var i = 0; i < len-1; i++) {
                var elem = pList[i];
                schema = schema[elem];
            }
            var lastOne = pList[len-1];
            schema[lastOne] = value;
        }

        static handleFieldChange = (owner, val) => {
            owner.setState({val: val})
            const {name, component} = owner.props;
            if(name && component){
                const st = {...component.state};
                StateUtil.set(name, st, val);
                component.setState(st);
            }
        };

        static renderData(row, dataField){
            let data = StateUtil.get(row, dataField.field); 
            if(data===null) return "";
            let result = data;
            if(dataField.type==="empty"){
                return null;
            }else if(dataField.type==="image"){
                result = CommonUtil.imageFormatter(data);
            }else if(dataField.type==="date"){
                result = CommonUtil.formatDate(data);
            }else if( (typeof data) === "object"){
                const objectKeys = Object.keys(data);
                result = objectKeys.reduce((keyP, keyN)=>{
                    return data[keyP]+data[keyN];
                })
            }else {
                result = data+"";
            }
            return result;
        }


        static renderFormData(row, dataField){
            if(dataField.type==="empty") return null;
            
            let data = StateUtil.renderData(row, dataField);
            let result = null;
            if(dataField.type==="image" || dataField.type==="image_base64"){
                result = StateUtil.generateImageInput(dataField, data);
            }else {
                result = StateUtil.generateFormInput(dataField, data);
            }
            return result;
        }


        static generateFormInput(dataField, value){
            return <MDBInput
                            label={dataField.label}
                            value={value}
                            // icon="envelope"
                            group
                            // type="email"
                            validate
                            error="wrong"
                            success="right"
                        />
        }

        static generateImageInput(dataField, value){
            console.log('value'+value);
            let result = null;
            if(value===null || !value || value.trim().length===0){
                result = "/upload.svg";
            } else {
                if(dataField.type==="image_base64"){
                    result = "data:image/png;base64,"+value;
                }
            } 
            return <Image image={result}/>;
        }

}