import CommonUtil from "./CommonUtil";
import React, { Component } from 'react'
import {MDBInput} from 'mdbreact'

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

        static renderData(row, dataField, ignoreDataFields, photoDataFields, dateDataFields){
            let data = StateUtil.get(row, dataField);
            if(data===null) return "";
            let result = data;
            if(ignoreDataFields && ignoreDataFields.indexOf(dataField)>-1){
                return null;
            }else if(photoDataFields && photoDataFields.indexOf(dataField)>-1){
                result = CommonUtil.imageFormatter(data);
            }else if(dateDataFields && dateDataFields.indexOf(dataField)>-1){
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


        static renderFormData(row, dataField, ignoreDataFields, photoDataFields, dateDataFields){
            if(dataField.field==="empty") return null;
            
            let data = StateUtil.renderData(row, dataField.field, ignoreDataFields, photoDataFields, dateDataFields);

            let result = null;
            if(dataField.type==="image"){
                result = null;
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

}