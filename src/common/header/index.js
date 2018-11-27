import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import { actionCreator } from "./store";
import { actionCreator as loginActionCreator } from "../../pages/login/store";
import {
  HeaderWrapper,
  Nav,
  NavItem,
  NavSearch,
  NavSearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList
} from "../header/style";

class Header extends Component {
  getListArea() {
    const jsList = this.props.list.toJS();
    const newList = [];
    if (jsList.length) {
      for (let i = (this.props.page - 1) * 5; i < this.props.page * 5; i++) {
        if (jsList[i])
          newList.push(
            <SearchInfoItem key={jsList[i]}>{jsList[i]}</SearchInfoItem>
          );
      }
    }
    return this.props.focused || this.props.mouseIn ? (
      <SearchInfo
        onMouseEnter={this.props.handleMouseEnter}
        onMouseLeave={this.props.handleMouseLeave}
      >
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch
            onClick={() => {
              this.props.handleChangePage(
                this.props.page,
                this.props.totalPage,
                this.iconSpin
              );
            }}
          >
            <i
              className="iconfont spin"
              ref={spin => {
                this.iconSpin = spin;
              }}
            >
              &#xe851;
            </i>
            换一批
          </SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>{newList}</SearchInfoList>
      </SearchInfo>
    ) : null;
  }
  render() {
    return (
      <HeaderWrapper>
        <Nav>
          <Link to="/">
            <NavItem className="left active">首页</NavItem>
          </Link>
          <NavItem className="left">下载App</NavItem>
          <NavSearchWrapper>
            <CSSTransition
              in={this.props.focused}
              timeout={300}
              classNames={"slide"}
            >
              <NavSearch
                className={this.props.focused ? "focused" : ""}
                onFocus={() => {
                  this.props.handleInputFocus(this.props.list);
                }}
                onBlur={this.props.handleInputBlur}
              />
            </CSSTransition>
            <i
              className={
                this.props.focused ? "iconfont focused zoom" : "iconfont zoom"
              }
            >
              &#xe623;
            </i>
            {this.getListArea()}
          </NavSearchWrapper>
          <NavItem className="right">
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          {this.props.isLogin ? (
            <NavItem className="right" onClick={this.props.handleLogout}>
              退出
            </NavItem>
          ) : (
            <Link to="/login">
              <NavItem className="right">登陆</NavItem>
            </Link>
          )}
        </Nav>
      </HeaderWrapper>
    );
  }
}
const mapStateToProps = state => ({
  // focused: state.get("header").get("focused")
  focused: state.getIn(["header", "focused"]),
  list: state.getIn(["header", "list"]),
  mouseIn: state.getIn(["header", "mouseIn"]),
  page: state.getIn(["header", "page"]),
  totalPage: state.getIn(["header", "totalPage"]),
  isLogin: state.getIn(["login", "isLogin"])
});
const mapDispatchToProps = dispatch => ({
  handleInputFocus(list) {
    list.size === 0 && dispatch(actionCreator.getAsyncList());
    dispatch(actionCreator.searchFocusAction());
  },
  handleInputBlur() {
    dispatch(actionCreator.searchBlurAction());
  },
  handleMouseEnter() {
    dispatch(actionCreator.mouseEnterAction());
  },
  handleMouseLeave() {
    dispatch(actionCreator.mouseLeaveAction());
  },
  handleChangePage(page, totalPage, iconSpin) {
    let degree = iconSpin.style.transform.replace(/[^0-9]/gi, "");
    if (degree) {
      iconSpin.style.transform =
        "rotate(" + (parseInt(degree, 10) + 360) + "deg)";
    } else {
      iconSpin.style.transform = "rotate(360deg)";
    }
    if (page < totalPage) {
      dispatch(actionCreator.changePageAction(page + 1));
    } else {
      dispatch(actionCreator.changePageAction(1));
    }
  },
  handleLogout() {
    dispatch(loginActionCreator.setLoginStatus(false));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
