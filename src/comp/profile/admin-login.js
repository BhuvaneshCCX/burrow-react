import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";
import { HouseFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    $(".error").remove();
    var validEmail = "";
    if (email.length < 1) {
      $("#email").after('<div class="error">*Enter the Email</div>');
    } else {
      var regEx1 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      validEmail = regEx1.test(email);
      if (!validEmail) {
        $("#email").after('<div class="error">*Enter a valid email</div>');
      }
    }
    if (password.length < 1) {
      $("#password").after('<div class="error">*Enter the Password</div>');
    }
    // else {
    //   var regEx2 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;
    //   var validPassword = regEx2.test(password);
    //   if (!validPassword) {
    //     $("#password").after(
    //       '<div class="error">*Enter a valid password (minimum 6 characters, including at least one uppercase letter, one lowercase letter, and one numeral)</div>'
    //     );
    //   }
    // }
    if (email === "arun@gmail.com" && password === "123Qwe") {
      navigate("/admin-management");
    } else if (email === "" || password === "") {
      setErrorMessage("");
    } else {
      setErrorMessage("Incorrect email or password. Please try again.");
    }
  };

  return (
    <div>
      <div className="row d-flex align-items-start justify-content-around gx-0 h-100">
        <div className="sign-in h-auto" style={{ backgroundColor: "#faf4ed" }}>
          <div className="p-2">
            <Link to="/">
              <button
                type="submit"
                style={{
                  border: "1px solid #d1d0d0",
                  backgroundColor: "#514f4d",
                  color: "#fff",
                  height: "2rem",
                  padding: "0 1.25rem",
                  width: "12rem",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#383633")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
              >
                <HouseFill /> Website
              </button>
            </Link>
          </div>
          <div
            className="sign-in-box d-flex flex-start justify-content-center"
            style={{ padding: "1.5rem", minHeight: "auto" }}
          >
            <div
              className="sign-in-content w-100 m-auto"
              style={{ maxWidth: "25rem", height: "100vh" }}
            >
              <div className="sign-in-form h-100 position-relative mt-4">
                <fieldset>
                  <legend className="w-100">
                    <h2 className="text-center">Hello Admin!</h2>
                    <p className="text-center" style={{ fontSize: "1rem" }}>
                      email: arun@gmail.com || password: 123Qwe
                    </p>
                  </legend>
                  <form onSubmit={handleSubmit} method="get" id="form2">
                    <div className="d-block">
                      <div className="my-2">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Enter Email*"
                          className="my-2"
                          htmlFor="email"
                          value={email}
                          onChange={handleChange}
                          style={{
                            border: "1px solid #d1d0d0",
                            color: "#383633",
                            height: "3.2rem",
                            padding: "0 1.25rem",
                            width: "100%",
                          }}
                          onMouseOver={(e) =>
                            (e.target.style.backgroundColor = "#d1d0d0")
                          }
                          onMouseOut={(e) =>
                            (e.target.style.backgroundColor = "#fff")
                          }
                        />
                      </div>
                      <div className="my-2">
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Enter Password*"
                          className="my-2"
                          htmlFor="password"
                          value={password}
                          onChange={handleChange}
                          style={{
                            border: "1px solid #d1d0d0",
                            color: "#383633",
                            height: "3.2rem",
                            padding: "0 1.25rem",
                            width: "100%",
                          }}
                          onMouseOver={(e) =>
                            (e.target.style.backgroundColor = "#d1d0d0")
                          }
                          onMouseOut={(e) =>
                            (e.target.style.backgroundColor = "#fff")
                          }
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
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#383633")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#514f4d")
                        }
                      >
                        LOG IN
                      </button>
                    </div>
                    <div
                      className="d-flex justify-content-center"
                      id="message"
                      style={{ color: "red", paddingTop: "1rem" }}
                    >
                      {errorMessage}
                    </div>
                  </form>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
