import React from "react";
import Loadable from "react-loadable";

const LoadableDetail = Loadable({
  loader: () => import("./index"),
  loading() {
    return <div>Loading...</div>;
  }
});

export default () => <LoadableDetail />;
