import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function ProductList(item) {
  return (
    <div className="d-block col-4">
      <Link
        to="/product-description"
        className="text-decoration-none text-reset"
      >
        <div className="img">
          <div className="img-nor">
            <img src={item.image} className="img-fluid" alt="" />
          </div>
          <div className="img-hov">
            <img src={item.imagehover} className="img-fluid" alt="" />
          </div>
        </div>
        <div>{item.title}</div>
      </Link>
      <div>
        <p className="text-danger">{item.price}</p>
      </div>
    </div>
  );
}
