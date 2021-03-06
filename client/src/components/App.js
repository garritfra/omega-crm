import React, { useState } from "react";
import { Layout, Empty } from "antd";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ClientsListPage from "../pages/ClientsListPage";
import RegisterPage from "../pages/RegisterPage";
import NewClientPage from "../pages/NewClientPage";
import LoginPage from "../pages/LoginPage";
import ClientPage from "../pages/ClientPage";

import Sidebar from "./Sidebar";
import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import ProjectsListPage from "../pages/ProjectsListPage";

const { Footer, Sider } = Layout;
export default function App() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const onCollapse = (collapsed) => {
    setSidebarCollapsed(collapsed);
  };

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
          <Sidebar />
        </Sider>
        <Layout>
          <Header />
          <Breadcrumbs />
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
              <Route exact path="/projects">
                <ProjectsListPage />
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
