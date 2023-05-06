import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import * as Icon from "react-bootstrap-icons";
import Dropdown from "react-bootstrap/Dropdown";
import Cart from "../shopping/cart";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Unbounded&display=swap');
</style>;

function Aside() {
  const head_dropdown = [
    "Seating",
    "Living Room",
    "Outdoor",
    "Bedroom",
    "Storage",
    "Rugs",
    "Inspiration",
  ];

  const [cartShow, setCartShow] = React.useState(false);

  const navigate = useNavigate();
  const handleUserClick = () => {
    navigate("/user-profile");
  };

  const handleAdminClick = () => {
    navigate("/admin-login");
  };

  return (
    <div id="aside">
      <aside
        id="aside-header"
        className="py-3"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="header-navigation container-fluid d-flex justify-content-between flex-wrap">
          <div className="d-flex align-items-center">
            <Link
              to="/"
              style={{
                fontFamily: "Unbounded, cursive",
                fontSize: "x-large",
                textDecoration: "none",
                color: "black",
              }}
            >
              BURROW
            </Link>
          </div>
          <div className="header-dropdown d-flex align-items-center flex-wrap">
            {head_dropdown.map((props) => {
              return (
                <Link to="/products" className="d-none d-lg-block">
                  <button
                    className="header-ddown mx-4"
                    style={{ background: "transparent", border: " none" }}
                  >
                    {props}
                    {/* <Icon.ChevronDown /> */}
                  </button>
                </Link>
              );
            })}
          </div>
          <div className="d-flex align-items-center">
            <Dropdown>
              <Dropdown.Toggle>
                <Icon.PersonBoundingBox />
              </Dropdown.Toggle>
              <Dropdown.Menu className="profile-menu py-0 ">
                <Dropdown.Item
                  className="profile-item"
                  style={{ borderBlockEnd: "1px solid black" }}
                  onClick={handleUserClick}
                >
                  <Link
                    to="/user-profile"
                    className="text-decoration-none"
                    style={{ color: "black" }}
                  >
                    <div className="d-flex justify-content-evenly align-items-center">
                      <Icon.Person />
                      <span>Customer</span>
                    </div>
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item
                  className="profile-item"
                  onClick={handleAdminClick}
                >
                  <Link
                    to="/admin-login"
                    className="text-decoration-none"
                    style={{ color: "black" }}
                  >
                    <div className="d-flex justify-content-evenly align-items-center">
                      <Icon.PersonGear />
                      <span>Admin</span>
                    </div>
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button
              type="button"
              className="btn btn-demo"
              onClick={() => setCartShow(true)}
            >
              <Icon.Cart2 className="header-ddown" />
            </button>
            <Cart show={cartShow} onHide={() => setCartShow(false)} />
          </div>
        </div>
        <div
          className="seating_dropdown"
          style={{ borderTop: "1px solid gray" }}
        >
          <div className="row gx-0 d-flex py-4 px-3">
            <div className="col-2">
              <h6 style={{ paddingLeft: "1rem" }}>Shop by Category</h6>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Sectionals
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Sofas
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Accent Chairs
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Sleepers
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Fabric Seating
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Leather Seating
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Velvet Seating
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Seating Accessories
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    All Seating
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h6 style={{ paddingLeft: "1rem" }}>Shop by collection</h6>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Nomad collection
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Field collection
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Union collection
                    <span style={{ color: "#8b3b35" }}>NEW</span>
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Compare collection
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-2">
              <h6 style={{ paddingLeft: "1rem" }}>Shop by Upholstery</h6>
              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Performance Fabric Seating
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Italian Leather Seating
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link to="/products" className="dd_link">
                    Performance Velvet Seating
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6">
              <div className="d-flex row">
                <div className="col-8 row">
                  <div className="col-6">
                    <Link
                      to="./products"
                      className="dd_link"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <img
                        src="./images/seating_1.webp"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                      <p>In Stock Seating</p>
                    </Link>
                  </div>
                  <div className="col-6">
                    <Link
                      to="./products"
                      className="dd_Link"
                      style={{ textDecoration: "none", color: "#000" }}
                    >
                      <img
                        src="./images/seating_2.webp"
                        alt=""
                        width="100%"
                        height="100%"
                      />
                      <p>All Seating</p>
                    </Link>
                  </div>
                </div>
                <div className="col-4" />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default Aside;
