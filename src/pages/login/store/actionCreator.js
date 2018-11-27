import axios from "axios";
import { actionTypes } from "./index";

export const setLoginStatus = data => ({
  type: actionTypes.SET_LOGIN_STATUS,
  data
});

export const checkAsyncAccount = (username, password) => {
  return dispatch => {
    axios
      .get("/api/check_account.json")
      .then(res => {
        if (res.data.success) {
          dispatch(setLoginStatus(true));
        } else {
          alert("login error");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
};
