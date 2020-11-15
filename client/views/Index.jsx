import React from "react";
import Layout from "./layouts/Main";

export default function Index({ user }) {
  return (
    <Layout user={user}>
      <h1>Hello</h1>
    </Layout>
  );
}
