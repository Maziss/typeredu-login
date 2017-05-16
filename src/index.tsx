import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import 'bootstrap/dist/css//bootstrap.min.css';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logReducer } from './components/reducers/reducer'
import { Router, Route, browserHistory} from 'react-router';

import Login from './components/pages/login';
import Register from './components/pages/register';
import LoggedIn from './components/pages/loggedIn';



const middleWarestore = applyMiddleware(thunk)(createStore);
const store = middleWarestore(logReducer);

function checkAuth(nextState: any, replaceState: any){
  let { logged } = store.getState();

  if(nextState.location.pathname !== '/loggedIn'){
    if(logged){
      if(nextState.location.state && nextState.location.pathname) {
        replaceState(null, nextState.location.pathname);
      }else{
        replaceState(null, '/');
      }
    }
  }
}

  ReactDOM.render(
    <Provider store={store}>
     <Router history={browserHistory}>
       <Route component={App}>
          <Route onEnter={checkAuth} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/loggedIn" component={LoggedIn} />
       </Route>
      </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
  );

 
