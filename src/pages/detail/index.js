import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { actionCreator } from "./store/";
import { DetailWrapper, Header, Content } from "./style";

class Detail extends Component {
  render() {
    return (
      <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: this.props.content }} />
      </DetailWrapper>
    );
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.handleGetDetail(id);
  }
}

const mapStateToProps = state => ({
  title: state.getIn(["detail", "title"]),
  content: state.getIn(["detail", "content"])
});
const mapDispatchToProps = dispatch => ({
  handleGetDetail(id) {
    dispatch(actionCreator.getAsyncDetail(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Detail));
