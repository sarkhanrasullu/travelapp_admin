import ls from 'local-storage'
import Constants from './Constants';
import commonAxios from './CommonAxios';

const querystring = require('querystring');

class CommonService{
    commonAxios = commonAxios;

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

    getToken = ()=>{
      const user = this.getLoggedInUser();
      if(user){
        return user.token;
      }else{
        return null;
      }
    }

    getAuthorization = ()=>{
      const token = this.getToken();
      if(token) return "Bearer "+token; else return null;
    }

    TOKEN_HEADER = ()=>{
      return {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: this.getAuthorization()
      }
    }

     GET_HEADER = () =>{
          return{
            method: "GET",
            headers: this.TOKEN_HEADER()
        }
      }

      POST_HEADER = (data) =>{
        return{
          method: "POST",
          headers: this.TOKEN_HEADER(),
          body: JSON.stringify(data)
        }
      }

    PUT_HEADER = (data) =>{
      return{
        method: "PUT",
        headers: this.TOKEN_HEADER(),
        body: JSON.stringify(data)
      }
    }

    DELETE_HEADER = () =>{
      return{
        method: "DELETE",
        headers: this.TOKEN_HEADER()
      }
    }
      
    navigate = (url)=>{
      const {props} = this.component;
      props.history.push(url)
    }

    setLoading = (loading, errorMsg, successMsg)=>{
      const {state} = this.component;
      state.loading = loading;
      state.errorMsg = errorMsg;
      state.successMsg = successMsg;
      this.component.setState(state);
    }

    getLoggedInUser = ()=>{
        return this.get(Constants.const_logged_in_user);
    }

    setLoggedInUser = (user)=>{
      const prevUser = this.getLoggedInUser();
      const newUser = {...prevUser, ...user};
      return this.persist(Constants.const_logged_in_user, newUser);
    }
} 

export default CommonService;