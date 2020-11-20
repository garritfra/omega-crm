import React from "react";
import Header from "./Header";
import UserContext from "../../contexts/UserContext";

export default function ({ user, children }) {
  return (
    <UserContext.Provider value={user}>
      <head>
        <title>Ωmega</title>
        <link rel="stylesheet" href="/bootstrap.min.css"></link>
        <link rel="stylesheet" href="/styles.css"></link>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <script src="/jquery.min.js"></script>
        <script src="/bootstrap.min.js"></script>
      </head>
      <body>
        <Header></Header>
        <div className="container mt-3">{children}</div>
      </body>
    </UserContext.Provider>
  );
}
