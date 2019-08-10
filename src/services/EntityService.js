import CommonService from './CommonService';

class EntityService extends CommonService {
  
        endpoint_crud = null;
        endpoint_select = null;
        endpoint_add_or_save = null;
        endpoint_delete = null;

        constructor(component, endpoint_select, endpoint_add_or_save, endpoint_delete){
            super(component);
              this.endpoint_select = endpoint_select;
              this.endpoint_add_or_save = endpoint_add_or_save;
              this.endpoint_delete = endpoint_delete;
        }
     
        loadItems = (url)=>{
          this.setLoading(true);
          fetch(url?url:this.endpoint_select)
                  .then(response =>  response.json())
                  .then(response => {
                    const firstElementKey = Object.keys(response._embedded)[0];
                    const data = response._embedded[firstElementKey];
                    const state = this.component.state;
                    state.list = data;
                    state.page = response.page;
                    this.component.setState(state);
                    this.setLoading(false);
                  })
                  .catch((error) => {
                    this.setLoading(false);
                  });
        }
  
        loadItem = (id)=>{
          this.setLoading(true);
          fetch(this.endpoint_select.replace("{id}",id))
                  .then(response =>  response.json())
                  .then(response => {
                    const state = this.component.state;
                    state.target = response;
                    this.setLoading(false);
                    this.component.setState(state);
                  })
                  .catch((error) => {
                  });
        }
      
        saveItem = (data, callback_url)=>{
          this.setLoading(true);
          fetch(this.endpoint_add_or_save+(data.id?"/"+data.id:""), data.id? this.PUT_HEADER(data): this.POST_HEADER(data))
                  // .then(response =>  response.json())
                  .then(response => { 
                    if(data.id>0)
                      window.location.reload();
                    else
                     window.location.href=callback_url;
                    this.setLoading(false);
                  })
                  .catch((error) => {
                  });
        }
  
        removeItem = (id)=>{
          this.setLoading(true);
          fetch(this.endpoint_delete+"/"+id, this.DELETE_HEADER())
                  .then(response => { 
                    console.log(response);
                    console.log('here');
                      this.loadItems();
                  })
                  .catch((error) => {
                  });
        }

     loadCarUtilities = ()=>{
        fetch(`/api/carUtilities`, this.GET_HEADER())
            .then((response) => response.json())
            .then((responseJson) => {
              const list = responseJson._embedded.carUtilities;
              console.log(responseJson);
              console.log(list);
              this.component.setState({carUtilities: list});
              this.loadDriver();
            })
            .catch((error) => {
            });
      }

       loadBrands = ()=>{
        const props = this.component.props;
        fetch('/api/public/brands', this.GET_HEADER()).then((response) => response.json())
            .then((responseJson) => {
              props.setBrands(responseJson.result);
              const driver = this.component.state.target;
              if(driver && driver.carList[0] && driver.carList[0].modelId && driver.carList[0].modelId.brandId){
                  this.loadModels(driver.carList[0].modelId.brandId.id);
              }else{
                props.setModels([]);
              }
              
            })
            .catch((error) => {
            });
      }

     loadModels = (brandId)=>{
        const props = this.component.props;
        fetch('/api/public/models?brandId='+brandId, this.GET_HEADER())
        .then((response) => response.json())
            .then((responseJson) => {
              props.setModels(responseJson.result);
              this.component.setState({});
            })
            .catch((error) => {
            });
      }

      loadDriver = ()=> {
        this.setLoading(true);
        const entityId = this.component.props.match.params.entityId;
        const url = "api/drivers/"+entityId+"?projection=driverProjection";
        fetch(url, this.GET_HEADER())
        .then((response) => response.json())
            .then((responseJson) => {
              const driver = responseJson.result;
              if(driver){
                if(!driver.carList) driver.carList =[]
                if(!driver.carList[0]) driver.carList = [{modelId:{brandId:{}}}]
                const busyDays = [];
                if(driver.busyDays){
                    const tempBusyDays = driver.busyDays.split(";");
                    tempBusyDays.forEach((bd)=>{
                      if(bd.trim().length===0) return;
                      const datestr = new Date(bd.trim()).toString().replace(" (+04)","").replace("04:00:00","00:00:00");
                      busyDays.push(datestr);
                    })
                }
                driver.busyDays = busyDays;
                this.checkUtilities(driver);
                this.loadBrands();
                this.component.setState({target: driver});
              }
              this.setLoading(false);
            })
            .catch((error) => {
              this.setLoading(false);
            });
       }

       checkUtilities = (driver)=>{
        if(!driver) return;
        const carUtilities = this.component.state.carUtilities;
        if(!carUtilities || carUtilities.length===0) return;
    
        let carUtilitiesObj = {};
    
        for(var i=0;i<carUtilities.length;i++){
          let carUtility = carUtilities[i];
          carUtilitiesObj[carUtility.id] = carUtility;
        }
        if(driver && driver.carList
          && driver.carList.length>0 
          && driver.carList[0].carCarUtilityList){
            let carCarUtilities = driver.carList[0].carCarUtilityList;
            for(var i=0;i<carCarUtilities.length;i++){
               const carCarUtility = carCarUtilities[i];
               carUtilitiesObj[carCarUtility.carUtilityId.id].checked=true;
            }
        }
        this.component.setState({carUtilities:carUtilities});
      }

}
 
  
  export default EntityService;