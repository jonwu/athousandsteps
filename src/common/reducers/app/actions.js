import * as ActionTypes from './actionTypes';
import BackendAPI from 'common/api/BackendApi';

export const addNode = (node) => {
  return {
    type: ActionTypes.ADD_NODE,
    node,
  }
}
export const resetNode = (node) => {
  return {
    type: ActionTypes.RESET_NODE,
    node,
  }
}
export const updateNode = (nodeIndex, node) => {
  return {
    type: ActionTypes.UPDATE_NODE,
    node,
    nodeIndex,
  }
}