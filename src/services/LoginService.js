import CommonService from './CommonService';
import Constants from './Constants';
import Settings from './Settings';

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
        fetch(`/api/oauth/token?`, this.POST_HEADER_LOGIN(requestBody, requestHeader))
            .then((response) => response.json())
            .then((responseJson) => {
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
        fetch(`/api/private/users/loggedinuser`, this.GET_HEADER())
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