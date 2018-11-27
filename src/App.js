import React, { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./common/header";
import store from "./store";
import Home from "./pages/home";
// import Detail from "./pages/detail";
import Detail from "./pages/detail/loadable";
import Login from "./pages/login";
import Writer from "./pages/writer";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/detail/:id" component={Detail} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/writer" component={Writer} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
