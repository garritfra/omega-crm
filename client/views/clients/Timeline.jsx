import React from "react";
import Layout from "../layouts/Main";
import moment from "moment";
import ClientDetailHeader from "../components/ClientDetailHeader";

export default function Timeline(props = { client, events, user }) {
  const eventViews = props.events.reverse().map((event) => {
    return (
      <li className="list-group-item">
        <h5 className="card-title text-capitalize">
          {event.eventType.replace("_", " ")}
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {moment(event.createdAt).fromNow()}
        </h6>
        <p className="card-text text-capitalize">
          {event.value?.replace("_", " ")}
        </p>
      </li>
    );
  });

  return (
    <Layout user={props.user}>
      <ClientDetailHeader {...props} />
      <ul className="list-group my-5">{eventViews}</ul>
    </Layout>
  );
}
