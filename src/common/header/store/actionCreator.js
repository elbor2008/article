import { actionTypes } from "./index";
import axios from "axios";
import { fromJS } from "immutable";

const getList = data => ({
  type: actionTypes.GET_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 5)
});

export const searchFocusAction = () => ({ type: actionTypes.SEARCH_FOCUS });
export const searchBlurAction = () => ({ type: actionTypes.SEARCH_BLUR });
export const mouseEnterAction = () => ({ type: actionTypes.MOUSE_ENTER });
export const mouseLeaveAction = () => ({ type: actionTypes.MOUSE_LEAVE });
export const changePageAction = page => ({ type: actionTypes.SET_PAGE, page });
export const getAsyncList = () => {
  return dispatch => {
    axios
      .get("/api/trending_search.json")
      .then(res => {
        const list = res.data.data;
        dispatch(getList(list));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
