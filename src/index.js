import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/animate.min.css";
import "./assets/sass/light-bootstrap-dashboard-react.scss?v=1.3.0";
import "./assets/css/demo.css";
import "./assets/css/pe-icon-7-stroke.css";

import AdminLayout from "layouts/Admin.jsx";
import AdminLogin from "../src/components/Login/AdminLogin.jsx";
import CamapnyLogin from "../src/components/Login/CampanyLogin.jsx";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/admin" component={AdminLogin} />
      <Route
        path="/admin/dashboard"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route path="/campany" component={CamapnyLogin} />
      <Redirect from="/" to="/admin" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
