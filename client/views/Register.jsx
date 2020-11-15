import React from "react";
import Layout from "./layouts/Main";

const basePath = process.env.API_BASE_PATH;
const frontendBasePath = process.env.FRONTEND_BASE_PATH;

export default function Index() {
  return (
    <Layout>
      <form
        action={
          basePath + "/auth/register" + "?redirect=" + frontendBasePath + "/"
        }
        method="POST"
      >
        <div className="form-group">
          <label for="email">Email address</label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
          />
        </div>
        <div className="form-group">
          <label for="name">Full Name</label>
          <input
            type="name"
            name="full_name"
            className="form-control"
            id="name"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
}
