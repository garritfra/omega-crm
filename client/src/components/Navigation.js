import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClientsPage from "../pages/ClientsPage";
import { Empty } from "antd";
import NewClientPage from "../pages/NewClientPage";
import LoginPage from "../pages/LoginPage";

export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Empty />
        </Route>
        <Route exact path="/clients">
          <ClientsPage />
        </Route>
        <Route exact path="/clients/new">
          <NewClientPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
      </Switch>
    </Router>
  );
}
