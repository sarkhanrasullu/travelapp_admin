import axios from 'axios';
import LoginService from './LoginService';
require('dotenv/config');
class CommonAxios {
 static login_service = new LoginService(null);
 
 static getInstance = ()=>{
   const instance = axios.create({
        baseURL: process.env.REACT_APP_API_URL,
        mode: 'no-cors',
        headers: {common: {'Authorization': `bearer ${this.login_service.getLoggedInUser().token}`}}
    }); 

    return instance;
 }

}
export default CommonAxios;