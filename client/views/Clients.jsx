import React from "react";
import Layout from "./layouts/Main";

export default function Clients({ clients }) {
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
    <Layout>
      <div className="row">
        <div className="col-4">
          <a href="/clients/new">
            <button onClick="console.log('asd')" className="btn btn-primary">
              New Client
            </button>
          </a>
        </div>
        <div className="col-8">
          <div className="list-group">{clientViews}</div>
        </div>
      </div>
    </Layout>
  );
}
