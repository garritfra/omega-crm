import React from "react";
import Layout from "../layouts/Main";

export default function Clients({ clients, user }) {
  const clientViews = clients.map((client) => {
    return (
      <a
        href={"/clients/" + client.id}
        className="list-group-item list-group-item-action"
      >
        {client.name}
      </a>
    );
  });

  return (
    <Layout user={user}>
      <div className="row">
        <div className="col-4">
          <a href="/clients/new" className="btn btn-outline-dark btn-block">
            New Client
          </a>
        </div>
        <div className="col-8">
          <div className="list-group">{clientViews}</div>
        </div>
      </div>
    </Layout>
  );
}
