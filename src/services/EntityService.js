import CommonService from './CommonService';
import StateUtil from '../utils/StateUtil';

class EntityService extends CommonService {
    
        constructor(component){
            super(component);
        }
     
       loadItems = (url)=>{
         url = "/api/"+url;
         console.log(url);
        fetch(url)
                .then(response =>  response.json())
                .then(response => {
                  console.log(response);
                  const firstElementKey = Object.keys(response._embedded)[0];
                  const data = response._embedded[firstElementKey];
                  const state = this.component.state;
                  state.list = data;
                  state.page = response.page;

                  this.component.setState(state);
                })
                .catch((error) => {
                });
      }

      loadItem = (url, target)=>{
        this.commonAxios.get(url)
                .then(response => {
                  response = response.data;
                  const state = this.component.state;
                  response = StateUtil.get(response, target);
                  console.log(response);
                  state.selectedEntity = response;
                  this.component.setState(state);
                })
                .catch((error) => {
                });
      }

}
 
  
  export default EntityService;