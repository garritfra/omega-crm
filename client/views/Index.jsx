import React from "react";
import Layout from "./layouts/Main";

export default function Index({ user }) {
  return (
    <Layout user={user}>
      <div className="jumbotron">
        <h1 className="display-4">Welcome back, {user.name?.split(" ")[0]}!</h1>
        <p class="lead">Thanks for testing out the Ωmega alpha.</p>
        <hr class="my-4"></hr>
        <p>Features currently include:</p>
        <a class="btn btn-primary btn-sm" href="/clients" role="button">
          Manage Clients
        </a>
      </div>
    </Layout>
  );
}
