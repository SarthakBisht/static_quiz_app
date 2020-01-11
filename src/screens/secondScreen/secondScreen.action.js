import * as actionTypes from "./secondScreen.actionType";

export const addCount = count => ({
  type: actionTypes.INCREMENT,
  payload: count
});
export const subCount = count => ({
  type: actionTypes.DECREMENT,
  payload: count
});
