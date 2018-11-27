import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { actionCreator } from "./store";
import { LoginWrapper, LoginBox, Input, Button } from "./style";

class Login extends Component {
  render() {
    if (!this.props.isLogin) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Input
              placeholder="用户名"
              innerRef={username => {
                this.username = username;
              }}
            />
            <Input
              placeholder="密码"
              type="password"
              innerRef={password => {
                this.password = password;
              }}
            />
            <Button
              onClick={() => {
                this.props.handleLogin(this.username, this.password);
              }}
            >
              登陆
            </Button>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

const mapStateToProps = state => ({
  isLogin: state.getIn(["login", "isLogin"])
});
const mapDispatchToProps = dispatch => ({
  handleLogin(username, password) {
    dispatch(actionCreator.checkAsyncAccount(username.value, password.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
