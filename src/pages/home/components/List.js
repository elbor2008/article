import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreator } from "../store";
import { ListItem, ListInfo, LoadMore } from "../style";

class List extends PureComponent {
  render() {
    return (
      <div>
        {this.props.list.map((item, index) => (
          <Link key={index} to={"/detail/" + item.get("id")}>
            <ListItem>
              <img src={item.get("imgUrl")} className="list-pic" alt="" />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          </Link>
        ))}
        <LoadMore onClick={this.props.handleLoadMore}>加载更多</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.getIn(["home", "articleList"])
});
const mapDispatchToProps = dispatch => ({
  handleLoadMore() {
    dispatch(actionCreator.getAsyncLoadMore());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
