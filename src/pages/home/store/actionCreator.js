import axios from "axios";
import { actionTypes } from "./index";

const getHomeInfo = (topicList, articleList, recommendList) => ({
  type: actionTypes.GET_HOME_INFO,
  topicList,
  articleList,
  recommendList
});
const getLoadMore = data => ({
  type: actionTypes.GET_LOAD_MORE,
  data
});
export const toggleScrollShow = data => ({
  type: actionTypes.TOGGLE_SCROLL_SHOW,
  data
});

export const getAsyncHomeInfo = () => {
  return dispatch => {
    axios
      .get("/api/init_home.json")
      .then(res => {
        let { topicList, articleList, recommendList } = res.data;
        const action = getHomeInfo(topicList, articleList, recommendList);
        dispatch(action);
      })
      .catch(err => {
        console.log(err);
      });
  };
};
export const getAsyncLoadMore = () => {
  return dispatch => {
    axios
      .get("/api/load_more.json")
      .then(res => {
        dispatch(getLoadMore(res.data.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
};
