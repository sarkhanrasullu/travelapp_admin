import CommonService from './CommonService';
import Constants from './Constants';
import Settings from './Settings';
import axios from 'axios';
const client_id = 'tripesco';
const client_secret = 'bBVmmiPKSeseM';

require('dotenv/config');

class LoginService extends CommonService {
    
    constructor(component){
        super(component);
    }
    
    POST_HEADER_LOGIN = () => {
        return {
            'Accept': 'application/json',
            'Content-type': 'application/x-www-form-urlencoded',
            'Authorization': 'Basic '+btoa(client_id+":"+client_secret)
       }
    }
    
    handleLogin = (target, redirectSettings=true, callback, spinner=true, message=true) => {
         console.log('handle login begin');
         if(!target.validate()) return;

         const user = target.user;
        if(spinner===true) this.setLoading(true);
    
        let requestBody = {
            grant_type:    'password',
            username:      user.email,
            password:      user.password,
            client_id:     client_id,
            client_secret: client_secret,
            scope:         'read'
        }
        console.log('axios created');

        axios(
          {
            url:`${process.env.REACT_APP_API_URL}/oauth/token`,
            method:"post", 
            auth:{
                username: client_id,
                password: client_secret
            },
            headers:this.POST_HEADER_LOGIN(), 
            data:this.querystring.stringify(requestBody),
            withCredentials:true
          }
        )
            .then((responseJson) => {
              console.log('response post oauth')
              const loggedIn = responseJson.access_token && responseJson.access_token.length>0;
              if(loggedIn){
                this.setLoggedInUser({token: responseJson.access_token});
                this.fetchLoggedInUser(redirectSettings, callback);
              } else {
                if(message===true) this.setLoading(false, 'invalid email or password');
              }
            })
            .catch((error) => {
              if(spinner===true) this.setLoading(false);
            });
    }
    
       fetchLoggedInUser = (refreshpage=true, callback)=>{
        fetch(`${Settings.ip}/private/users/loggedinuser`, this.GET_HEADER())
            .then((response) => response.json())
                .then((responseJson) => {
                  if(responseJson && responseJson.result && responseJson.result.id>0){
                    const user = responseJson.result;
                    this.setLoggedInUser(user);
                    if(refreshpage){
                      window.location.reload();
                    }
                    if(callback){
                      callback();
                    } 
                    this.setLoading(false);
                  }else{
                    this.setLoading(false, 'invalid email or password');
                  }
                })
                .catch((error) => {
                });
      }

     
  
      logout = ()=>{
        this.persist(Constants.const_logged_in_user, null);
        window.location.reload();
      }
}
 
  
export default LoginService;