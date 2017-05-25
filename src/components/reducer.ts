import * as Immutable from 'immutable'

const LOGIN_SUCCES = 'LOGIN_SUCCES';
const SENDING_REQUEST = 'SENDING_REGUEST';
const ERROR_RECEIVED = 'ERROR_RECEIVED';
const MISSING_FIELD = 'Some of the fields are empty';

const initialState = Immutable.Map({
    username: '',
    password: '',
    isFetching: false,
    idAuthenticated: false
});

export const user = (state = initialState, action) => {
    switch (action.type) {
        case SENDING_REQUEST:
        return state.merge({
            email: action.username,
            password: action.password,
            isFetching: true,
            idAuthenticated:false,
        });
        case ERROR_RECEIVED:
        return state.merge({
            error: MISSING_FIELD,
            isFetching: false,
            idAuthenticated: false
        });
        case LOGIN_SUCCES:
        return state.merge({
            error: null,
            isFetching: false,
            idAuthenticated:true
        });
        default:
        return state;

    }
}