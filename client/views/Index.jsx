import React from "react";
import Layout from "./layouts/Main";

export default function Index({ user }) {
  return (
    <Layout user={user}>
      <div className="jumbotron">
        <h1 className="display-4">Welcome back, {user.name?.split(" ")[0]}!</h1>
        <p className="lead">Thanks for testing out the Ωmega alpha.</p>
        <hr className="my-4"></hr>
        <div className="d-flex flex-column">
          <a
            className="btn btn-light btn-sm mb-2"
            href="/clients"
            role="button"
          >
            Manage Clients
          </a>
          <a
            className="btn btn-danger btn-sm"
            href="https://lists.sr.ht/~garritfra/omega"
          >
            Thoughts, bugs, questions, ideas?
          </a>
        </div>
      </div>
    </Layout>
  );
}
