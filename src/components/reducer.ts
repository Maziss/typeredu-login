import * as Immutable from 'immutable'

const LOGIN_SUCCES = 'LOGIN_SUCCES';
const SENDING_REQUEST = 'SENDING_REGUEST';
const ERROR_RECEIVED = 'ERROR_RECEIVED';
const MISSING_FIELD = 'Some of the fields are empty';

const initialState = Immutable.Map({
    username: '',
    password: '',
    sendingRequest: false,
    isLogged: false
});

export const user = (state = initialState, action) => {
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
            error: MISSING_FIELD,
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