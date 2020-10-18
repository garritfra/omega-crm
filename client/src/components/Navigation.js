import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClientsListPage from "../pages/ClientsListPage";
import RegisterPage from "../pages/RegisterPage";
import { Empty, Breadcrumb, Layout } from "antd";
import NewClientPage from "../pages/NewClientPage";
import LoginPage from "../pages/LoginPage";
import ClientPage from "../pages/ClientPage";

export default function Navigation() {
  const breadcrumbNameMap = {
    "/": "Home",
    "/clients": "Clients",
    "/clients/*": "Detail",
  };

  const { location } = window;
  const pathSnippets = location.pathname.split("/").filter((i) => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });
  const breadcrumbItems = [
    <Breadcrumb.Item key="home">
      <Link to="/">Home</Link>
    </Breadcrumb.Item>,
  ].concat(extraBreadcrumbItems);

  return (
    <Router>
      <Breadcrumb style={{ marginLeft: "16px", marginTop: "24px" }}>
        {breadcrumbItems}
      </Breadcrumb>
      <Layout.Content
        style={{
          background: "#fff",
          margin: "24px 16px",
          padding: 24,
          minHeight: 280,
        }}
      >
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
      </Layout.Content>
    </Router>
  );
}
