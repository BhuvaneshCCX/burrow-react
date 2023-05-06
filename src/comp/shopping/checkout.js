import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import Ordersummary from "./order-summary";
import Shippingaddress from "./shipping-address";
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Unbounded&display=swap');
</style>;

export default function Checkout(props) {
  return (
    <div>
      <div className="py-4" style={{ borderBottom: "1px solid silver" }}>
        <div className="container">
          <Link
            to="/"
            style={{
              fontFamily: "Unbounded, cursive",
              fontSize: "xx-large",
              textDecoration: "none",
              color: "black",
            }}
          >
            BURROW
          </Link>
        </div>
      </div>
      <div className="container d-flex flex-md-wrap">
        <div className="shipping-details col-7">
          <div className="py-3">
            <b>Customer</b>
            <div
              className="d-flex py-3 justify-content-between"
              style={{ borderBottom: "1px solid silver" }}
            >
              <div>
                Email Address:&nbsp;
                <span>arun@gmail.com</span>
              </div>
              <button
                style={{
                  border: "1px solid #d1d0d0",
                  backgroundColor: "#514f4d",
                  color: "#fff",
                  padding: "0 1.25rem",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#383633")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
              >
                Edit
              </button>
            </div>
          </div>
          <div>
            <Shippingaddress />
          </div>
        </div>
        <div className="order-details col-5 p-5">
          <Ordersummary />
        </div>
      </div>
    </div>
  );
}
