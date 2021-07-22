import { NavLink } from "react-router-dom";
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../auth/login-button";
import LogoutButton from "../auth/logout-button";

function DropNav() {
  const { isAuthenticated } = useAuth0();
  const { user } = useAuth0();

  return (
    <div className="dropdown text-right">
      {isAuthenticated ? (
        <div className="btn-group">
          <button type="button" className="btn btn-outline-light border-0 dropdown-toggle font-xxs py-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {user.name}
          </button>
          <div className="dropdown-menu text-center p-2">
            <NavLink
              to="/"
              exact
              className="dropdown-item font-xs text-left py-2"
            >
              Home
            </NavLink>
            <NavLink
              to="/profile"
              exact
              className="dropdown-item font-xs text-left py-2"
            >
              Profile
            </NavLink>
            <NavLink
              to="/access-test"
              exact
              className="dropdown-item font-xs text-left py-2"
            >
              Access-Test
            </NavLink>
            <LogoutButton />
          </div>
        </div>
      ) : (
        <LoginButton />
      )
      }
      {/* <div className="dropdown-menu">
        <NavLink
          to="/"
          exact
          className="dropdown-item text-light font-sm text-left text-shadow"
          activeClassName="router-link-exact-active"
        >
          Dungeoneer
        </NavLink>
        <NavLink
          to="/profile"
          exact
          className="dropdown-item text-light font-xs text-left"
          activeClassName="router-link-exact-active"
        >
          Profile
        </NavLink>
        <NavLink
        to="/external-api"
        exact
        className="dropdown-item text-light font-xs text-left"
        activeClassName="router-link-exact-active"
        >
        API
      </NavLink>
        <NavLink
          to="/access-test"
          exact
          className="dropdown-item text-light font-xs text-left"
          activeClassName="router-link-exact-active"
        >
          Accessibility
        </NavLink>
      </div> */}
    </div >
  );
}

export default DropNav;
