import {SET_AUTH, CHANGE_FROM, SENDING_REQUEST, ERROR_RECEIVED, LOGIN_SUCCES} from '../constants/constants';
import * as errors from '../constants/errors';
import * as Immutable from 'immutable'

let initialState = new Immutable.map({
    username: '',
    password: '',
    sendingRequest: false,
    isLogged: false
});

const user = (state = initialState, action) => {
    switch (action.type) {
        case SENDING_REQUEST:
        return state.merge({
            email: action.username,
            password: action.password,
            sendingRequest: true,
            isLogged:false,
        });
        case ERROR_RECEIVED:
        return state.merge({
            error: errors.MISSING_FIELD,
            sendingRequest: false,
            isLogged: false
        });
        case LOGIN_SUCCES:
        return state.merge({
            error: null,
            sendingRequest: false,
            isLogged:true
        });
        default:
        return state;

    }
}



export default user;