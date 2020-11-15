import React from "react";
import Header from "./Header";

export default function ({ user, children }) {
  return (
    <>
      <head>
        <link rel="stylesheet" href="/bootstrap.min.css"></link>
        <script src="/jquery.min.js"></script>
        <script src="/bootstrap.min.js"></script>
      </head>
      <body>
        <Header user={user}></Header>
        <div className="container mt-3">{children}</div>
      </body>
    </>
  );
}
