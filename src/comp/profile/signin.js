import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import $ from "jquery";

function Signin() {
  const [isHovered, setIsHovered] = useState(false);
  const [emailIn, setEmail] = useState("");
  const [passwordIn, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleMouseOver = () => {
    setIsHovered(true);
  };
  const handleMouseOut = () => {
    setIsHovered(false);
  };
  const backgroundColor = isHovered ? "#faf4ed" : "#fff";

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "emailin") {
      setEmail(value);
    } else {
      setPassword(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    $(".error").remove();
    var validEmail = "";
    if (emailIn.length < 1) {
      $("#emailin").after('<div class="error">Enter the Email</div>');
    } else {
      var regEx1 = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      validEmail = regEx1.test(emailIn);
      if (!validEmail) {
        $("#emailin").after('<div class="error">Enter a valid email</div>');
      }
    }
    if (passwordIn.length < 1) {
      $("#passwordin").after('<div class="error">Enter the Password</div>');
    }

    if (emailIn === "arun@gmail.com" && passwordIn === "123Qwe") {
      navigate("/");
    } else if (emailIn === "" && passwordIn === "") {
      setErrorMessage();
    } else if (emailIn !== "arun@gmail.com" && passwordIn !== "123Qwe") {
      setErrorMessage("Incorrect email and password. Please try again.");
    } else if (emailIn !== "arun@gmail.com") {
      setErrorMessage("Incorrect email. Please try again.");
    } else {
      setErrorMessage("Incorrect password. Please try again.");
    }
  };

  return (
    <div>
      <div className="row d-flex align-items-start justify-content-around gx-0 h-100">
        <div
          className="sign-in h-auto"
          style={{ backgroundColor }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <div
            className="sign-in-box d-flex flex-start justify-content-center"
            style={{ padding: "1.5rem", minHeight: "auto" }}
          >
            <div
              className="sign-in-content w-100 m-auto"
              style={{ maxWidth: "25rem", height: "70rem" }}
            >
              <div className="sign-in-form h-100 position-relative mt-4">
                <fieldset>
                  <legend className="w-100">
                    <h2 className="text-center">Welcome Back</h2>
                    <p className="text-center" style={{ fontSize: "1rem" }}>
                      email: arun@gmail.com || password: 123Qwe
                    </p>
                  </legend>
                  <form onSubmit={handleSubmit} method="get" id="form2">
                    <div className="d-block">
                      <div className="my-2">
                        <input
                          type="email"
                          name="emailin"
                          id="emailin"
                          placeholder="Enter Email"
                          className="my-2"
                          htmlFor="email"
                          value={emailIn}
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
                          name="passwordin"
                          id="passwordin"
                          placeholder="Enter Password"
                          className="my-2"
                          htmlFor="password"
                          value={passwordIn}
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

export default Signin;
