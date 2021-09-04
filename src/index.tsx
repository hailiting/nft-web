import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import "antd/dist/antd.css";

ReactDOM.render(
  <BrowserRouter>
    {/* 使用路由懒加载，使用用Suspense抱起来 */}
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route
          path="/"
          render={(routerProps) => {
            return <App {...routerProps} />;
          }}
        />
      </Switch>
    </Suspense>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
