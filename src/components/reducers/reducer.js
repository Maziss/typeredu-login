import {createStore} from 'redux'

export const logReducer = (state = {}, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
        return state;
        case "FETCH_SUCCES":
        return {...state, posts: action.payload};
        default: return state;
    }
}



const store = createStore(reducer);