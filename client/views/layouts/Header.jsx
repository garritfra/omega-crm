import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Head() {
  const user = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light container">
      <a className="navbar-brand" href="/">
        Ωmega
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/clients">
              Clients <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {user ? (
            <li className="nav-item">
              <a className="nav-link" href="/auth/logout">
                Logged in as {user.name} - Log Out{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <a className="nav-link" href="/auth/login">
                  Login <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/auth/register">
                  Register <span className="sr-only">(current)</span>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
