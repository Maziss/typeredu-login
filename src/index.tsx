import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import 'bootstrap/dist/css//bootstrap.min.css';

import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { user } from './components/reducer';


import Login from './components/pages/login';
import Register from './components/pages/register';
import LoggedIn from './components/pages/loggedIn';



const middleWarestore = applyMiddleware(thunk)(createStore);
const store = middleWarestore(user);

function checkAuth(nextState, replaceState) {
  console.log("auth going on");
  if(nextState.location.pathname !== '/loggedIn') {
    
      if(nextState.location.state && nextState.location.pathname) {
        replaceState(null, nextState.location.pathname);
      }else{
        replaceState(null, '/');
      }
  }
}

  ReactDOM.render(
    <Provider store={store}>
      <Router>
       <App>
          <Route onEnter={checkAuth} />
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/loggedIn" component={LoggedIn} />
       </App>
     </Router>
    </Provider>,
    document.getElementById('root') as HTMLElement
  );