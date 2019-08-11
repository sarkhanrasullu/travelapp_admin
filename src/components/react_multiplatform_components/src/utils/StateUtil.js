import {CommonUtil} from "./CommonUtil";
import { TableColumnType } from "../datatable/DataTableTypes";

export class StateUtil {

        static get = (state, name) => {
           console.log(state);
            console.log(name);
            if(!state || !name) return "";
            if(name.length===0) return state;
            const p = name;
            const obj = state;
            const result= p.split(".").reduce((xs, x) =>xs&&xs[x]||null, obj);
            return result;
        } 

        static set = (path,schema, value) => {
            if(!path || !schema || value===null) return;
            var pList = path.split('.');
            var len = pList.length;
            for(var i = 0; i < len-1; i++) {
                var elem = pList[i];
                if(!schema[elem]){
                    schema[elem] = {};
                }
                schema = schema[elem];
            }
            var lastOne = pList[len-1];
            schema[lastOne] = value;
        }

        static handleFieldChange = (owner, val, name, direct) => {
            owner.setState({val: val})
            const {component} = owner.props;
            if(name && component){
                const st = component.state;
                //console.log(name);
                //console.log(st);
                //console.log(val);
                //console.log('-------')
                StateUtil.set(name, st, val);
                component.setState(st);
                //console.log(component);
                //console.log(component.state);
            }
        };

        static renderData(row, column){
            let data = StateUtil.get(row, column.name); 
            //console.log(column);
            //console.log(data);
            if(data===null) return "";
            let result = data;
            if(column.type==="empty"){
                return null;
            }else if(column.type===TableColumnType.IMAGE_URL){
                result = CommonUtil.imageFormatter(data);
            }else if(column.type===TableColumnType.IMAGE_BASE64){
                result = CommonUtil.imageFormatterBase64(data);
            }else if(column.type===TableColumnType.DATE){
                result = CommonUtil.formatDate(data);
            }else if(column.type===TableColumnType.DATE_TIME){
                result = CommonUtil.formatDateTime(data);
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

        static getFromObj = (obj, name) => {
            const p = name;
            return p.split(".").reduce((xs, x) =>xs&&xs[x]||null, obj)
        } 

}