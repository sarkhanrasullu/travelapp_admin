import CommonService from './CommonService';
import StateUtil from '../utils/StateUtil';

class EntityService extends CommonService {
    
        constructor(component){
            super(component);
        }
     
       loadItems = (url)=>{
         url = "/api/"+url;
        
        this.setLoading(true);
        fetch(url)
                .then(response =>  response.json())
                .then(response => {
                  const firstElementKey = Object.keys(response._embedded)[0];
                  const data = response._embedded[firstElementKey];
                  const state = this.component.state;
                  state.list = data;
                  state.page = response.page;
                  this.setLoading(false);

                  this.component.setState(state);
                })
                .catch((error) => {
                });
      }

      loadItem = (url, projection)=>{
        url = "/api/"+url+"?projection="+projection;
        this.setLoading(true);
        fetch(url)
                .then(response =>  response.json())
                .then(response => {
                  console.log(response)
                  const state = this.component.state;
                  state.target = response;
                  this.setLoading(false);
                  this.component.setState(state);
                })
                .catch((error) => {
                });
      }
      
      saveItem = (url, data, callback_url)=>{
        url = "/api/"+url;
        this.setLoading(true);
        console.log(this.POST_HEADER(data));  
        fetch(url, this.POST_HEADER(data))
                .then(response =>  response.json())
                .then(response => { 
                  console.log(response)
                  window.location.reload();
                  this.setLoading(false);
                })
                .catch((error) => {
                });
      }

}
 
  
  export default EntityService;