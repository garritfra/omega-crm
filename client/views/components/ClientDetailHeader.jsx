import React from "react";
import Layout from "../layouts/Main";
import moment from "moment";

const basePath = process.env.API_BASE_PATH;
const frontendBasePath = process.env.FRONTEND_BASE_PATH;

export default function ClientDetailHeader({ client, user }) {
  return (
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
              <span className="text-right">{client.address || "-"}</span>
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
              <button type="submit" class="badge badge-primary align-self-end">
                Update
              </button>
              <input type="hidden" name="eventType" value="status_changed" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
