import React from "react";
import Layout from "./layouts/Main";

export default function Index() {
  return (
    <Layout>
      <a href="/auth/login">Login</a>
      <a href="/auth/register">Register</a>
    </Layout>
  );
}
