import bcrypt from 'bcryptjs';
import {SET_AUTH, CHANGE_FROM, SENDING_REQUEST, ERROR_RECEIVED} from '../constants/constants';
import * as errors from '../constants/errors';
import auth from './auth';
import salt from './salt';
import { browserHistory } from 'react-router';

/**
 * @param {string} Username
 * @param {string} Password
 */

export function login(Username, Password){
    return (dispatch) => {
        dispatch(sendingRequest(true));

        if(empty({username, password})) {
            dispatch(ErrorMessage(errors.MISSING));
            dispatch(sendingRequest(false));
            return;
        }

        const salt = salt(username);

        bcrypt.hash(password, salt, (err, hash) => {
            if (err){
                dispatch(setErrorMsg(errors.MISSING_FIELD));
                return;
            }

            
        })
    }
}