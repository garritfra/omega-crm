import React from "react";
import Layout from "../layouts/Main";
import { base } from "../../../server/model/User";

const basePath = process.env.API_BASE_PATH;
const frontendBasePath = process.env.FRONTEND_BASE_PATH;

export default function Clients({ user }) {
  return (
    <Layout user={user}>
      <form
        action={
          basePath +
          "/clients" +
          "?token=" +
          user.token +
          "&redirect=" +
          encodeURIComponent(frontendBasePath) +
          "/clients"
        }
        method="POST"
      >
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                id="name"
              />
            </div>
            <div className="form-group">
              <label for="email">E-Mail</label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="email"
              />
            </div>
            <div className="form-group">
              <label for="status">Current Status</label>
              <select className="form-control" id="status" name="status">
                <option value="potential">Potential</option>
                <option value="active">Active</option>
                <option value="on_hold">On Hold</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <label for="address">Address</label>
              <input
                type="address"
                name="address"
                className="form-control"
                id="address"
              />
            </div>
            <div className="form-group">
              <label for="telephone">Phone</label>
              <input
                type="tel"
                name="telephone"
                className="form-control"
                id="telephone"
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </Layout>
  );
}
