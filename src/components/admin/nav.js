import { isAuthenticated } from "auth";
import { NavLink, Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className=" d-flex flex-column flex-shrink-0  bg-light col-md-3" >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="#" className="nav-link link-dark " aria-current="page">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#home" />
            </svg>
            Home
          </a>
        </li>
        <li>
          <NavLink className="nav-link link-dark" to="/admin/category">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#table" />
            </svg>
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink className="nav-link link-dark" to="/admin/product">
            <svg className="bi me-2" width={16} height={16}>
              <use xlinkHref="#table" />
            </svg>
            Products
          </NavLink>
        </li>

      </ul>
      <hr />
    </div>

  );
}
