import Modal from "react-bootstrap/Modal";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { PlusCircle, DashCircle } from "react-bootstrap-icons";

export default function Cart(props) {
  const [count, setCount] = useState(1);
  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  const productitems = [
    {
      productimage: "./images/nomad1.webp",
      productname: "Block Nomad Sofa",
      productcost: "1275",
    },
  ];
  const productcost = (productitems[0].productcost * count).toLocaleString(
    "en-US",
    {
      style: "currency",
      currency: "USD",
    }
  );
  const subtotal = productcost;
  const shipping = subtotal;
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal" style={{ fontWeight: "normal" }}>
          Your Cart
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          {productitems &&
            productitems.map((item) => {
              return (
                <div
                  className="row gx-0 py-2"
                  style={{ borderBottom: "1px solid silver" }}
                >
                  <div className="col-3">
                    <img
                      src={item.productimage}
                      alt="item1"
                      className="d-block w-100"
                    />
                  </div>
                  <div className="col-9">
                    <div className="px-1 d-flex justify-content-between">
                      <div>{item.productname}</div>
                      <div>{productcost}</div>
                    </div>
                  </div>
                  <div className="px-1 d-flex justify-content-between">
                    <div className="d-flex align-items-center justify-content-between col-3 px-2">
                      <DashCircle
                        id="minus"
                        style={{
                          color: "silver",
                        }}
                        onClick={handleMinus}
                      />
                      <div
                        className="px-1"
                        id="pcount"
                        style={{
                          fontWeight: "bold",
                        }}
                      >
                        {count}
                      </div>
                      <PlusCircle
                        id="plus"
                        style={{
                          color: "silver",
                        }}
                        onClick={(e) => setCount(count + 1)}
                      />
                    </div>
                    <div className="col-2">
                      <Link style={{ color: "silver" }}>Remove</Link>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </Modal.Body>
      <Modal.Footer style={{ display: "block" }}>
        <div className="d-flex justify-content-between">
          <div>Subtotal</div>
          <div>{subtotal}</div>
        </div>
        <div className="d-flex justify-content-between pb-2">
          <div>Shipping</div>
          <div>FREE</div>
        </div>
        <div
          className="d-flex justify-content-between pb-2"
          style={{ fontWeight: "bold" }}
        >
          <div>Total</div>
          <div>{shipping}</div>
        </div>
        <Link to="/checkout" className="secure-checkout" onClick={props.onHide}>
          SECURE CHECKOUT
        </Link>
      </Modal.Footer>
    </Modal>
  );
}
