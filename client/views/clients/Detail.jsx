import React from "react";
import Layout from "../layouts/Main";
import moment from "moment";
import ClientDetailHeader from "../components/ClientDetailHeader";

export default function Detail(props = { client, user }) {
  const timelineComponent = props.client.events
    .reverse()
    .slice(0, 2)
    .map((event) => {
      return (
        <div className="col-sm-5">
          <div className="card h-100">
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
    <Layout user={props.user}>
      <ClientDetailHeader {...props} />

      <div className="jumbotron jumbotron-fluid row mt-4 py-3 mx-0">
        {timelineComponent}
        <div className="col-sm-2 d-flex align-items-center">
          <a
            className="btn btn-light"
            href={`/clients/${props.client._id}/timeline`}
          >
            View Full Timeline
          </a>
        </div>
      </div>
    </Layout>
  );
}
