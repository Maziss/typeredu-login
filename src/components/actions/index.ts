import {LOGIN_SUCCES, ERROR_RECEIVED} from '../constants/constants';
import sessionApi from '../middleware/api';

interface actionTypes {
  [key: string]: any,
  type: String,
  isFetching: Boolean,
  isAuthenticated: Boolean,
  message: any
}

interface sendingRequest {
  [index: string]: any
}

interface loginSucces {
  [index: string]: any
}


  
   export function sendingRequest (creds: any): sendingRequest {
      return dispatch => {
        return sessionApi.login(creds).then(response => {
          sessionStorage.setItem('jwt', response.jwt);
          dispatch(loginSucces());
        }).catch(error => {
        throw(error);
    });
  };
}

 export function loginSucces(): loginSucces {
    return {
        type: LOGIN_SUCCES
    }
}

 export function logInError(message: any): actionTypes {
  return {
    type: ERROR_RECEIVED,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}
 

