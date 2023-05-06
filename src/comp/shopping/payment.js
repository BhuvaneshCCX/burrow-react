import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";
import $ from "jquery";

export default function Payment() {
  const [payment, setPayment] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    var final = [];
    $(".error").remove();
    if ($('input[name="payment-option"]:checked')) {
      if ($('input[name="payment-option"]:checked').val()) {
        final.push("1");
      } else {
        $("#order-error").after(
          '<span class="error text-center" style="color:red">Choose the Payment option</span>'
        );
      }
    }
    if (final.length === 1) {
      navigate("/order-confirmation");
    }
  };

  const buttonText = payment === "upi" ? "PROCEED TO PAYMENT" : "PLACE ORDER";

  return (
    <form onSubmit={handleSubmit} className="gap-3 d-flex flex-column">
      <div className="gap-3 d-flex flex-column">
        <b>Payment</b>
        <label className="d-flex gap-3">
          <input
            type="radio"
            name="payment-option"
            value="upi"
            checked={payment === "upi"}
            onChange={(e) => setPayment(e.target.value)}
          />
          UPI
        </label>
        <label className="d-flex gap-3">
          <input
            type="radio"
            name="payment-option"
            value="cod"
            checked={payment === "cod"}
            onChange={(e) => setPayment(e.target.value)}
          />
          Cash on Delivery
        </label>
      </div>
      <button
        type="submit"
        id="order-error"
        style={{
          border: "1px solid #d1d0d0",
          backgroundColor: "#514f4d",
          color: "#fff",
          height: "3.2rem",
          padding: "0 1.25rem",
          width: "100%",
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#383633")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
      >
        {buttonText}
      </button>
    </form>
  );
}
