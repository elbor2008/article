import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  isLogin: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SET_LOGIN_STATUS:
      return state.set("isLogin", action.data);
    default:
      return state;
  }
};
