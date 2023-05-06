import React from "react";
import "../App.css";
import Payment from "./payment";

export default function Ordersummary() {
  return (
    <div>
      <div
        style={{
          border: "1px solid silver",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div className="p-3" style={{ borderBottom: "1px solid silver" }}>
          <b>Order Summar</b>
        </div>
        <div className="items p-3" style={{ borderBottom: "1px solid silver" }}>
          <div>1 Item</div>
          <div className="row gx-0 py-2">
            <div className="col-3">
              <img
                src="./images/nomad1.webp"
                alt="item1"
                className="d-block w-100"
              />
            </div>
            <div className="col-9">
              <div className="px-1 d-flex justify-content-between">
                <div>Block Nomad Sofa</div>
                <div>$1,275.00</div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="p-3 d-flex justify-content-between"
          style={{ borderBottom: "1px solid silver" }}
        >
          <div>Total (USD)</div>
          <div>$1,275.00</div>
        </div>
        <div className="p-3">
          <Payment />
        </div>
      </div>
    </div>
  );
}
