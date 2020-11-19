import React from "react";
import Layout from "../layouts/Main";
import moment from "moment";

export default function Detail({ client, user }) {
  const timelineComponent = client.events
    .reverse()
    .slice(0, 2)
    .map((event) => {
      return (
        <div className="col-sm-5">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-capitalize">
                {event.eventType.replace("_", " ")}
              </h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {moment(event.createdAt).fromNow()}
              </h6>
              <p className="card-text text-capitalize">
                {event.value?.replace("_", " ")}
              </p>
            </div>
          </div>
        </div>
      );
    });

  return (
    <Layout user={user}>
      <h4 className="display-4">
        {client.name}{" "}
        <span className="badge badge-pill badge-dark text-capitalize">
          {client.status.replace("_", " ")}
        </span>
      </h4>

      <h4 className="lead text-muted">{client.email}</h4>
      <div className="row mt-4">
        {timelineComponent}
        <div className="col-sm-2 d-flex align-items-center">
          <a className="btn btn-light" href={`/clients/${client.id}/timeline`}>
            View Full Timeline
          </a>
        </div>
      </div>
    </Layout>
  );
}
