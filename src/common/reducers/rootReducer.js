import { combineReducers } from 'redux';
import app from './app';
import { routerReducer } from 'react-router-redux'

const reducers = combineReducers({
  settings: app.settings,
  app: app.reducer,
  router: routerReducer,
});

export default reducers;
