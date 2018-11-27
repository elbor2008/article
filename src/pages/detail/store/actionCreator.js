import axios from "axios";
import { actionTypes } from "./index";

const getDetail = data => ({
  type: actionTypes.GET_DETAIL,
  data
});

export const getAsyncDetail = id => {
  return dispatch => {
    axios
      .get("/api/get_detail.json")
      .then(res => {
        dispatch(getDetail(res.data.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
