import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext";

export default function Head() {
  const user = useContext(UserContext);

  const onLogout = () => {
    notification.error({
      message: "Not yet implemented",
      description: "To log out, please clear the cookies.",
    });
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="/">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="/clients">
              Clients <span class="sr-only">(current)</span>
            </a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          {user ? (
            <li class="nav-item">
              <a class="nav-link" href="/auth/logout">
                {user.name} <span class="sr-only">(current)</span>
              </a>
            </li>
          ) : (
            <>
              <li class="nav-item">
                <a class="nav-link" href="/auth/login">
                  Login <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/auth/register">
                  Register <span class="sr-only">(current)</span>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}
