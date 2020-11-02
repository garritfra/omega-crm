import React from "react";
import { Breadcrumb } from "antd";
import { useLocation, Link } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbNameMap = {
    "/": "Home",
    "/clients": "Clients",
    "/clients/new": "New",
    "/clients/*": "Detail",
    "/projects": "Projects",
  };

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
    <Breadcrumb style={{ marginLeft: "16px", marginTop: "24px" }}>
      {breadcrumbItems}
    </Breadcrumb>
  );
}
