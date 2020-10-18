import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClientsListPage from "../pages/ClientsListPage";
import RegisterPage from "../pages/RegisterPage";
import { Empty } from "antd";
import NewClientPage from "../pages/NewClientPage";
import LoginPage from "../pages/LoginPage";
import ClientPage from "../pages/ClientPage";

export default function Navigation() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Empty />
        </Route>
        <Route exact path="/clients">
          <ClientsListPage />
        </Route>
        <Route exact path="/clients/new">
          <NewClientPage />
        </Route>
        <Route
          path="/clients/:id"
          render={({ match }) => <ClientPage id={match.params.id} />}
        />
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/register">
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}
