import { fromJS } from "immutable";
import * as actionTypes from "./actionTypes";

const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  showScroll: false
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.GET_HOME_INFO:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList)
      });
    case actionTypes.GET_LOAD_MORE:
      return state.set(
        "articleList",
        state.get("articleList").concat(fromJS(action.data))
      );
    case actionTypes.TOGGLE_SCROLL_SHOW:
      return state.set("showScroll", action.data);
    default:
      return state;
  }
};
