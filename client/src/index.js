import React from "react";
import ReactDOM from "react-dom";
import App from "../src/components/App";
import "antd/dist/antd.css";

require("dotenv").config();

ReactDOM.render(<App />, document.querySelector("#root"));
