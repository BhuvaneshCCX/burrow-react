import React, { useState } from "react";
import "../App.css";
import $ from "jquery";

export default function Shippingaddress() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pincode, setPincode] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    $(".error").remove();
    if (firstName.length < 1) {
      $("#firstname").after('<div class="error">Enter the Firstname</div>');
    } else {
      var regEx = /^[A-Za-z\s]*$/;
      var validName = regEx.test(firstName);
      if (!validName) {
        $("#firstname").after(
          '<div class="error">Firstname contains only Alphabetics</div>'
        );
      }
    }
    if (lastName.length < 1) {
      $("#lastname").after('<div class="error">Enter the Lastname</div>');
    } else {
      regEx = /^[A-Za-z\s]*$/;
      validName = regEx.test(lastName);
      if (!validName) {
        $("#lastname").after(
          '<div class="error">Lastname contains only Alphabetics</div>'
        );
      }
    }
    var validNumber = "";
    if (mobileNumber.length < 1) {
      $("#mobileNumber").after(
        '<div class="error">This field is required</div>'
      );
    } else {
      var regExnum = /^\d{3}\d{3}\d{4}$/;
      validNumber = regExnum.test(mobileNumber);
      if (!validNumber) {
        $("#mobileNumber").after(
          '<div class="error">Enter the 10-digit Phone number</div>'
        );
      }
    }
    if (address.length < 1) {
      $("#address").after('<div class="error">This field is required</div>');
    }
    if (city.length < 1) {
      $("#city").after('<div class="error">This field is required</div>');
    }
    if (state.length < 1) {
      $("#state").after('<div class="error">This field is required</div>');
    }
    if (country.length < 1) {
      $("#country").after('<div class="error">This field is required</div>');
    }
    var validNumber2 = "";
    if (pincode.length < 1) {
      $("#pincode").after('<div class="error">This field is required</div>');
    } else {
      var regExnum2 = /^\d{6}$/;
      validNumber2 = regExnum2.test(pincode);
      if (!validNumber2) {
        $("#pincode").after(
          '<div class="error">Enter the 6-digit Pincode</div>'
        );
      }
    }
  };
  return (
    <div style={{ borderBottom: "1px solid silver" }}>
      <b>Shipping Address</b>
      <form onSubmit={handleSubmit} className="py-3">
        <div className="d-flex">
          <div className="col-6">
            <div>First Name</div>
            <input
              type="text"
              id="firstname"
              className="my-2"
              style={{
                border: "1px solid silver",
                color: "#383633",
                height: "3.2rem",
                padding: "0 1.25rem",
                width: "95%",
              }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d1d0d0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
            />
          </div>
          <div className="col-6">
            <div>Last Name</div>
            <input
              type="text"
              id="lastname"
              className="my-2"
              style={{
                border: "1px solid silver",
                color: "#383633",
                height: "3.2rem",
                padding: "0 1.25rem",
                width: "100%",
              }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d1d0d0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
            />
          </div>
        </div>
        <div>
          <div>Mobile Number</div>
          <input
            type="number"
            id="mobileNumber"
            className="my-2"
            min="0"
            style={{
              border: "1px solid silver",
              color: "#383633",
              height: "3.2rem",
              padding: "0 1.25rem",
              width: "100%",
            }}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d1d0d0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
          />
        </div>
        <div>
          <div>Street Address</div>
          <div className="my-2">
            <textarea
              rows="3"
              cols="50"
              id="address"
              form="adminform"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              style={{
                border: "1px solid #d1d0d0",
                color: "#383633",
                padding: "1rem 1rem",
                width: "100%",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d1d0d0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
            ></textarea>
          </div>
        </div>
        <div className="d-flex">
          <div className="col-6">
            <div>City</div>
            <input
              type="text"
              id="city"
              className="my-2"
              style={{
                border: "1px solid silver",
                color: "#383633",
                height: "3.2rem",
                padding: "0 1.25rem",
                width: "95%",
              }}
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d1d0d0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
            />
          </div>
          <div className="col-6">
            <div>State</div>
            <input
              type="text"
              id="state"
              className="my-2"
              style={{
                border: "1px solid silver",
                color: "#383633",
                height: "3.2rem",
                padding: "0 1.25rem",
                width: "100%",
              }}
              value={state}
              onChange={(e) => setState(e.target.value)}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d1d0d0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
            />
          </div>
        </div>
        <div className="d-flex">
          <div className="col-6">
            <div>Country</div>
            <input
              type="text"
              id="country"
              className="my-2"
              style={{
                border: "1px solid silver",
                color: "#383633",
                height: "3.2rem",
                padding: "0 1.25rem",
                width: "95%",
              }}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d1d0d0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
            />
          </div>
          <div className="col-6">
            <div>Pincode</div>
            <input
              type="number"
              id="pincode"
              className="my-2"
              min="0"
              style={{
                border: "1px solid silver",
                color: "#383633",
                height: "3.2rem",
                padding: "0 1.25rem",
                width: "100%",
              }}
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d1d0d0")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
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
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
