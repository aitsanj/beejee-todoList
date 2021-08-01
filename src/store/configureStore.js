
import { createBrowserHistory } from 'history';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { tasksReducer } from './reducer/task-reducer';
import userReducer from './reducer/user-reducer';
import { loadFromLocalStorage, saveToLocalStorage } from './localStorage';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory();

const rootReducer = combineReducers({
  tasks: tasksReducer,
  users: userReducer,
  router: connectRouter(history)
});

const middleware = [
  thunk,
  routerMiddleware(history)
];
const enhancers = composeEnhancers(applyMiddleware(...middleware));

const persistedState = loadFromLocalStorage();

export const store = createStore(rootReducer, persistedState, enhancers);

store.subscribe(() => {
    saveToLocalStorage({
      users: {
        token: store.getState().users.token
      }
    })
});