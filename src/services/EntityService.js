import CommonService from './CommonService';
import Settings from './Settings';

class EntityService extends CommonService {
    
      constructor(component){
          super(component);
      }
     
       loadItems = (url_)=>{
        const url = Settings.ip+"/"+url_;
        fetch(url, this.GET_HEADER())
            .then((response) => response.json())
                .then((res) => {
                  const firstElementKey = Object.keys(res._embedded)[0];
                  const data = res._embedded[firstElementKey];
                  const state = this.component.state;  
                  state.list = data;
                  state.page = res.page;

                  this.component.setState(state);
                })
                .catch((error) => {
                });
      }

}
 
  
  export default EntityService;