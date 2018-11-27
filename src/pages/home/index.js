import React, { Component } from "react";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Recommend from "./components/Recommend";
import List from "./components/List";
import Topic from "./components/Topic";
// import Writer from "./components/Writer";
import { actionCreator } from "./store";

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            alt=""
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4485/d0fb5320f8539c5c8b643fe88cbf512d1f4ced38.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
          />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
        </HomeRight>
        {this.props.showScroll && (
          <BackTop onClick={this.handleBackTop}>返回顶部</BackTop>
        )}
      </HomeWrapper>
    );
  }
  handleBackTop() {
    window.scrollTo(0, 0);
  }
  initScrollEvent() {
    window.addEventListener("scroll", this.props.handleChangeScrollShow);
  }
  componentDidMount() {
    this.props.handleInitHomeData();
    this.initScrollEvent();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.props.handleChangeScrollShow);
  }
}

const mapStateToProps = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});
const mapDispatchToProps = dispatch => ({
  handleInitHomeData() {
    dispatch(actionCreator.getAsyncHomeInfo());
  },
  handleChangeScrollShow() {
    const top = document.documentElement.scrollTop;
    if (top > 200) {
      dispatch(actionCreator.toggleScrollShow(true));
    } else {
      dispatch(actionCreator.toggleScrollShow(false));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
