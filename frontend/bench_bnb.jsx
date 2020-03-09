import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import { login, logout, signup } from './actions/session_actions';
import { 
  fetchBenches, 
  createReview, 
  fetchBench,
  createBench  } from './actions/bench_actions';


document.addEventListener('DOMContentLoaded', () => {
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: {
          [window.currentUser.id]: window.currentUser
        }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //testing start
  window.fetchBenches = fetchBenches;
  window.fetchBench = fetchBench;
  window.createBench = createBench;
  window.createReview = createReview;
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  //testing end
  
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});