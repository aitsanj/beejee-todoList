import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { history, store } from './store/configureStore';
import { axiosApi } from './axios-api';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';


store.subscribe(() => {
  const user = store.getState().users.user;
  if(user){
    axiosApi.defaults.headers.common["Authorization"] = user.token;
  }
});

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
