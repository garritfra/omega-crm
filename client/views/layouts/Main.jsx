import React from "react";
import Header from "./Header";

export default function (props) {
  return (
    <>
      <head>
        <link rel="stylesheet" href="bootstrap.min.css"></link>
        <script src="jquery.min.js"></script>
        <script src="bootstrap.min.js"></script>
      </head>
      <body>
        <Header></Header>
        {props.children}
      </body>
    </>
  );
}
