import ls from 'local-storage'
import Constants from './Constants';

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

     GET_HEADER = () =>{
        const token = this.getLoggedInUser().token;
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
        const token = this.getLoggedInUser().token;
        const result =  {
            method: "POST",
            headers: {
              Accept: "application/json", 
              "Content-Type": "application/json",
              Authorization:"Bearer "+token
            },
            body: JSON.stringify(body)
        }

        return result;
    }

    navigate = (url)=>{
      console.log('url:'+url)
      const {props} = this.component;
      props.history.push(url)
    }

    setLoading = (loading, errorMsg, successMsg)=>{
      const {props} = this.component;
      props.setLoading(loading, errorMsg, successMsg);
    }

    getLoggedInUser = ()=>{
      return this.get(Constants.const_logged_in_user);
    }

    setLoggedInUser = (user)=>{
      const prevUser = this.getLoggedInUser();
      const newUser = {...prevUser, user};
      return this.persist(Constants.const_logged_in_user, newUser);
    }
} 

export default CommonService;