import React from "react";
import Layout from "../layouts/Main";
import moment from "moment";

const basePath = process.env.API_BASE_PATH;
const frontendBasePath = process.env.FRONTEND_BASE_PATH;

export default function Detail({ client, user }) {
  const timelineComponent = client.events
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
  console.debug(client);
  return (
    <Layout user={user}>
      <div className="row">
        <div className="col col-8">
          <h4 className="display-4">{client.name}</h4>
          <h4 className="lead text-muted">{client.email}</h4>
        </div>
        <div className="col col-4">
          <div class="card border-dark">
            <div class="card-body d-flex flex-column">
              <div className="d-flex justify-content-between">
                <span>Address</span>
                <span>{client.address || "-"}</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Tel.</span>
                <span>{client.telephone || "-"}</span>
              </div>
              <form
                method="post"
                action={
                  basePath +
                  "/clients/" +
                  client._id +
                  "/events" +
                  "?token=" +
                  user.token +
                  "&redirect=" +
                  frontendBasePath +
                  "/clients/" +
                  client._id
                }
                class="inline"
              >
                <div className="d-flex justify-content-between">
                  <span>Status</span>
                  <select
                    className="card-text text-capitalize"
                    name="value"
                    defaultValue={client.status}
                  >
                    <option value="potential" className="card-text">
                      Potential
                    </option>
                    <option value="active" className="card-text">
                      Active
                    </option>
                    <option value="inactive" className="card-text">
                      Inactive
                    </option>
                    <option value="on_hold" className="card-text">
                      On Hold
                    </option>
                  </select>
                </div>
                <button
                  type="submit"
                  class="badge badge-primary align-self-end"
                >
                  Update
                </button>
                <input type="hidden" name="eventType" value="status_changed" />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="jumbotron jumbotron-fluid row mt-4 py-3 mx-0">
        {timelineComponent}
        <div className="col-sm-2 d-flex align-items-center">
          <a className="btn btn-light" href={`/clients/${client._id}/timeline`}>
            View Full Timeline
          </a>
        </div>
      </div>
    </Layout>
  );
}
