import React from "react";
import Layout from "./layouts/Main";

export default function Index() {
  return (
    <Layout>
      <div className="jumbotron">
        <h1 className="display-4">Ωmega</h1>
        <p class="lead">The last CRM you will ever need.</p>
        <hr class="my-4"></hr>
        <div className="d-flex flex-column">
          <a
            className="btn btn-primary btn-sm mb-2"
            href="/auth/register"
            role="button"
          >
            Try out the Alpha
          </a>
          <a
            className="btn btn-light btn-sm mb-2"
            href="/auth/login"
            role="button"
          >
            Already have an account? Log in here
          </a>
        </div>
      </div>
    </Layout>
  );
}
