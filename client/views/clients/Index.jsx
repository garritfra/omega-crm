import React from "react";
import Layout from "../layouts/Main";

export default function Clients({ clients, user }) {
  const clientViews = clients.map((client) => {
    return (
      <a
        href={"/clients/" + client.id}
        className="list-group-item list-group-item-action"
      >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{client.name}</h5>
          <small className="text-capitalize">
            {client.status.replace("_", " ")}
          </small>
        </div>
        <p className="mb-1">{client.email}</p>
      </a>
    );
  });

  return (
    <Layout user={user}>
      <div className="row">
        <div className="col-md-4">
          <a
            href="/clients/new"
            className="btn btn-outline-dark btn-block mb-3"
          >
            New Client
          </a>
        </div>
        <div className="col-md-8">
          <div className="list-group">{clientViews}</div>
        </div>
      </div>
    </Layout>
  );
}
