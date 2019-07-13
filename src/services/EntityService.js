import CommonService from './CommonService';

class EntityService extends CommonService {
    
      constructor(component){
          super(component);
      }
     
       loadItems = (url)=>{
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