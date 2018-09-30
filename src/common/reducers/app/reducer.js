import { combineReducers } from 'redux';
import * as ActionTypes from './actionTypes';

function nodes(state = [], action) {
  switch(action.type) {
    case ActionTypes.RESET_NODE:
      return [action.node] 
    case ActionTypes.ADD_NODE: 
      return [...state, action.node];
    case ActionTypes.UPDATE_NODE: 
      return [...state.slice(0, action.nodeIndex), action.node, ...state.slice(action.nodeIndex + 1)];
    default: 
      return state;
  }
}
export default combineReducers({ nodes });
