import React from "react";
import "../App.css";
import ProductData from "./products-list.json";
import ProductList from "./products-list";

export default function Products() {
  return (
    <div>
      <div className="row g-0 my-3">
        {/* <h2 className="px-4 py-2">All Seating</h2> */}
      </div>

      <div className="container">
        {/* <div className="row">
          <div className="col-6">
            <p>
              The main feature of any living room is always going to be the
              seating. Pick and choose your seating styles to build the perfect
              place to relax. Unwind by yourself, spend time with your family,
              or entertain guests, all in ultimate comfort.
            </p>
          </div>
          <div className="col-6" />
        </div> */}
        <div className="row d-flex py-2">
          {ProductData.map((current) => (
            <ProductList
              image={current.image}
              title={current.title}
              price={current.price}
              imagehover={current.imagehover}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
