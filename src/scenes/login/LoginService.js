import CommonService from '../../services/CommonService';

class LoginService extends CommonService {
    
    constructor(component){
        super(component);
    }

    POST_HEADER_LOGIN = (body, header) => {
        return {
          method: "POST",
          headers: header,
          body: this.querystring.stringify(body)
       }
      }
    
       handleLogin = (target, redirectSettings=true, callback, spinner=true, message=true)=>{
         
         if(!target.validate()) return;

         const user = target.user;
        if(spinner===true) this.setLoading(true);
    
        const client_id = 'tripesco';
        const client_secret = 'bBVmmiPKSeseM';
    
        let requestBody = {
            grant_type: 'password',
            username: user.email,
            password: user.password,
            client_id: client_id,
            client_secret: client_secret,
            scope: 'read'
        }
    
        const requestHeader = new Headers({
          'Accept': 'application/json',
          'Content-type': 'application/x-www-form-urlencoded',// '',
          'Authorization': 'Basic '+btoa(client_id+":"+client_secret)
        })
        console.log(this.POST_HEADER_LOGIN(requestBody, requestHeader))
        fetch(`/oauth/token?`, this.POST_HEADER_LOGIN(requestBody, requestHeader))
        .then((response) => response.json())
            .then((responseJson) => {
              console.log(responseJson);
              if(responseJson.access_token && responseJson.access_token.length>0){
                this.getLoggedInUser(responseJson.access_token, redirectSettings, callback);
                
              } else {
                if(message===true) this.setLoading(false, 'invalid email or password');
              }
            })
            .catch((error) => {
              if(spinner===true) this.setLoading(false);
            });
    }
    
       getLoggedInUser = (token, redirectSettings=true, callback)=>{
        fetch(`/private/users/loggedinuser`, this.GET_HEADER(token))
            .then((response) => response.json())
                .then((responseJson) => {
                  if(responseJson && responseJson.result && responseJson.result.id>0){
                    const user = responseJson.result;
                    user.token = token;
                    this.persist('loggedInUser',user);
                    if(redirectSettings){
                      this.navigate('/');
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
}
 
  
  export default LoginService;