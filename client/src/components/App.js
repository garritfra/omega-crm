import React, { useState, useEffect } from "react";
import { Layout, Breadcrumb, Empty } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ClientsListPage from "../pages/ClientsListPage";
import RegisterPage from "../pages/RegisterPage";
import NewClientPage from "../pages/NewClientPage";
import LoginPage from "../pages/LoginPage";
import ClientPage from "../pages/ClientPage";

import Sidebar from "./Sidebar";
import Header from "./Header";

const { Footer, Sider } = Layout;
export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setSidebarCollapsed(collapsed);
  };

  const breadcrumbNameMap = {
    "/": "Home",
    "/clients": "Clients",
    "/clients/*": "Detail",
  };

  const pathSnippets = window.location.pathname.split("/").filter((i) => i);
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
      <Layout style={{ minWidth: "100vw", minHeight: "100vh" }}>
        <Sider collapsible collapsed={sidebarCollapsed} onCollapse={onCollapse}>
          <div
            style={{
              height: "32px",
              background: "rgba(255, 255, 255, 0.2)",
              margin: "16px",
            }}
          />
          <Sidebar activeItem={pathSnippets[0]} />
        </Sider>
        <Layout>
          <Header />
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
          <Footer style={{ textAlign: "center" }}>
            Omega CRM ©2020 Created by Garrit Franke
          </Footer>
        </Layout>
      </Layout>
    </Router>
  );
}
