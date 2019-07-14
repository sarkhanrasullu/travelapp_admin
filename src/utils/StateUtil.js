import CommonUtil from "./CommonUtil";

export default class StateUtil {
        static get = (state, name) => {
            if(!state || !name) return state;
            if(name.length===0) return state;
            const p = name;
            const obj = state;
            return p.split(".").reduce((xs, x) =>xs&&xs[x]||null, obj)
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
            let data = StateUtil.get(row, dataField.name); 
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

        static getFromObj = (obj, name) => {
            const p = name;
            return p.split(".").reduce((xs, x) =>xs&&xs[x]||null, obj)
        } 

}