import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`;
export const Nav = styled.div`
  width: 960px;
  height: 58px;
  margin: 0 auto;
  //   background-color: pink;
`;
export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
    cursor: pointer;
  }
  &.active {
    color: #ea6f5a;
  }
`;
export const NavSearch = styled.input.attrs({
  placeholder: "搜索"
})`
  &.slide-enter {
    transition: all 0.3s ease-out;
  }
  &.slide-enter-active {
    width: 240px;
  }
  &.slide-exit {
    transition: all 0.3s ease-out;
  }
  &.slide-exit-active {
    width: 160px;
  }
  width: 160px;
  height: 38px;
  padding: 0 30px 0 20px;
  box-sizing: border-box;
  margin-top: 9px;
  margin-left: 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  &.focused {
    width: 240px;
  }
`;
export const NavSearchWrapper = styled.div`
  float: left;
  position: relative;
  .zoom {
    position: absolute;
    right: 5px;
    bottom: 5px;
    // background: green;
    line-height: 30px;
    border-radius: 15px;
    width: 30px;
    text-align: center;
    &.focused {
      background: #777;
      color: white;
    }
  }
`;
export const SearchInfo = styled.div`
  z-index: 1;
  position: absolute;
  left: 20px;
  top: 60px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  width: 240px;
  // height: 100px;
`;
export const SearchInfoTitle = styled.div`
  margin-top: 20px;
  margin-bottom: 15px;
  font-size: 14px;
  color: #969696;
`;
export const SearchInfoSwitch = styled.div`
  float: right;
  font-size: 13px;
  color: #969696;
  cursor: pointer;
  .spin {
    font-size: 12px;
    margin-right: 2px;
    display: block;
    float: left;
    transition: all 0.2s ease-in;
    // transform: rotate(0deg);
    transform-origin: center center;
  }
`;
export const SearchInfoItem = styled.a.attrs({
  href: ""
})`
  float: left;
  display: block;
  text-decoration: none;
  line-height: 20px;
  margin-right: 10px;
  margin-bottom: 15px;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`;
export const SearchInfoList = styled.div`
  // overflow: hidden;
`;
export const Addition = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 56px;
`;
export const Button = styled.button`
  float: right;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  line-height: 38px;
  border-radius: 19px;
  border: 1px solid #ec6149;
  font: 14px;
  cursor: pointer;
  &.reg {
    color: #ea6f5a;
    background-color: #fff;
  }
  &.writting {
    color: #fff;
    background-color: #ea6f5a;
  }
`;
