import React, { useState, useEffect } from "react";
import { Link, NavLink, Redirect, useHistory } from "react-router-dom";
import { authenticate, isAuthenticated } from "auth";
import { useLocation } from "react-router-dom";
import { signout } from "../../auth";






const Header = () => {

  const history = useHistory();
  const { pathname } = useLocation();
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    // console.log(isAuthenticated().username);
    isAuthenticated() && setIsLogged(true);
  }, [pathname, isLogged]);

  // render lại menu
  const checkLogin = () => {
    if (pathname !== "/signin" && isLogged && isAuthenticated().id == 1) {
      return (
        <>
          <NavLink
            to="/admin/dashboard"
            className="text-decoration-none text-uppercase"
          >
            {isAuthenticated().username}
          </NavLink>
          <NavLink
            className="ms-4 text-decoration-none"
            to="/"
            onClick={() =>
              signout(() => {
                history.push("/");
                setIsLogged(false);
              })
            }
          >
            Sign out
          </NavLink>
        </>
      );
    } else if (pathname !== "/signin" && isLogged && isAuthenticated().id != 1) {
      return (
        <>
          <NavLink
            to="/user"
            className="text-decoration-none text-uppercase"
          >
            {isAuthenticated().username}
          </NavLink>
          <NavLink
            className="ms-4 text-decoration-none"
            to="/"
            onClick={() =>
              signout(() => {
                history.push("/");
                setIsLogged(false);
              })
            }
          >
            Sign out
          </NavLink>
        </>
      );
    }
    else if (pathname === "/signin" && isLogged) {
      return <Redirect to="/" />;
    } else {
      return (
        <>
          <NavLink className="btn btn-outline-warning me-2" to="/signin">
            Sign in
          </NavLink>
          {/* <span className="ms-1">|</span> */}
          <NavLink className="btn btn-warning" to="/signup">
            Sign up
          </NavLink>
        </>
      );
    }
  };
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="navbar-brand"  >
          Buger <span>King</span>
        </div>
        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><NavLink className="nav-link px-2 link-dark" to="/">
            Home
          </NavLink></li>
          <li><a href="#" className="nav-link px-2 link-dark">Features</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">Pricing</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">FAQs</a></li>
          <li><a href="#" className="nav-link px-2 link-dark">About</a></li>
        </ul>
        <div className="col-md-3 text-end">
          {checkLogin()}
        </div>
      </header>
    </div>



  );
};

export default Header;
