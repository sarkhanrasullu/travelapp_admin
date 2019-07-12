import ls from 'local-storage'

const querystring = require('querystring');


class CommonService{
    component = null;
    querystring = querystring;
    constructor(component){
      this.component = component;
    }

    persist = (key, value)=>{
      ls.set(key, value);
    }

    get = (key)=>{
      return ls.get(key);
    }

     GET_HEADER = (token) =>{
        const result = {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: "Bearer "+token
          },
        }

        return result;
      }
      
    POST_HEADER= (body) => {
        const {loggedInUser} = this.component.props;
        const result =  {
            method: "POST",
            headers: {
              Accept: "application/json", 
              "Content-Type": "application/json",
              Authorization:"Bearer "+loggedInUser.token
            },
            body: JSON.stringify(body)
        }

        return result;
    }

    navigate = (url)=>{
      const {props} = this.component;
      props.navigation.navigate(url);
    }

    setLoading = (loading, errorMsg, successMsg)=>{
      const {props} = this.component;
      props.setLoading(loading, errorMsg, successMsg);
    }
} 

export default CommonService;