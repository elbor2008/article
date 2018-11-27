import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Writer extends Component {
  render() {
    if (this.props.isLogin) {
      return <div>writer</div>;
    } else {
      return <Redirect to="/login" />;
    }
  }
}

const mapStateToProps = state => ({
  isLogin: state.getIn(["login", "isLogin"])
});

export default connect(
  mapStateToProps,
  null
)(Writer);
