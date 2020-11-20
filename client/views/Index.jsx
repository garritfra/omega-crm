import React from "react";
import Layout from "./layouts/Main";

export default function Index({ user }) {
  return (
    <Layout user={user}>
      <div className="jumbotron">
        <h1 className="display-4">Welcome back, {user.name?.split(" ")[0]}!</h1>
        <p className="lead">Thanks for testing out the Ωmega alpha.</p>
        <p className="lead">
          Please keep in mind that this is an unfinished product. If you have
          any thoughts or encounter problems, I would encourage you to share it
          on the <a href="https://lists.sr.ht/~garritfra/omega">mailing list</a>{" "}
          of this project.
        </p>
        <hr className="my-4"></hr>
        <div className="d-flex flex-column">
          <a
            className="btn btn-primary btn-sm mb-2"
            href="/clients"
            role="button"
          >
            Manage Clients
          </a>
          <a
            className="btn btn-light btn-sm"
            href="https://git.sr.ht/~garritfra/omega"
          >
            Source Code
          </a>
          <a
            className="btn btn-light btn-sm mt-2"
            href="https://lists.sr.ht/~garritfra/omega"
          >
            Thoughts, questions, ideas?
          </a>
          <a
            className="btn btn-light btn-sm mt-2"
            href="https://todo.sr.ht/~garritfra/omega"
          >
            File a bug
          </a>
        </div>
      </div>
    </Layout>
  );
}
