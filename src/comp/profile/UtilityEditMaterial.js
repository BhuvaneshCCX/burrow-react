import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import $ from "jquery";

export default function UtilityEditMaterial() {
  const [subName, setSubName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    var final = [];
    $(".error").remove();
    if (!subName.trim()) {
      $("#subName").after('<div class="error">*Enter the Material</div>');
    } else if (!/^[A-Za-z\s]*$/.test(subName.trim())) {
      $("#subName").after(
        '<div class="error">*Material contains only Alphabetics</div>'
      );
    } else {
      final.push("1");
    }

    if (final.length === 1) {
      navigate("/admin-utility");
    }
  };

  return (
    <div
      className="row d-flex align-items-start justify-content-around gx-0 h-100"
      style={{ backgroundColor: "#faf4ed" }}
    >
      <div className="sign-up h-auto">
        <div className="p-2">
          <Link to="/admin-utility">
            <button
              type="submit"
              style={{
                border: "1px solid #d1d0d0",
                backgroundColor: "#514f4d",
                color: "#fff",
                height: "2rem",
                padding: "0 1.25rem",
                width: "10rem",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#383633")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
            >
              <ArrowLeft /> Admin Utility
            </button>
          </Link>
        </div>
        <div
          className="sign-up-box d-flex flex-start justify-content-center"
          style={{ padding: "1.5rem", minHeight: "auto" }}
        >
          <div
            className="sign-up-content w-100 m-auto"
            style={{ maxWidth: "25rem", maxHeight: "auto", minHeight: "50rem" }}
          >
            <div className="sign-up-form h-100 position-relative">
              <fieldset>
                <legend className="w-100">
                  <h2 className="text-center">Edit Material</h2>
                </legend>
                <form onSubmit={handleSubmit} id="adminform">
                  <div className="d-block">
                    <div className="my-2">
                      <input
                        type="text"
                        id="utilityId"
                        placeholder="Utility ID"
                        className="my-2"
                        disabled
                        value="1"
                        style={{
                          border: "1px solid #d1d0d0",
                          backgroundColor: "#d1d0d0",
                          color: "#383633",
                          height: "3.2rem",
                          padding: "0 1.25rem",
                          width: "100%",
                        }}
                      />
                    </div>
                    <div className="my-2">
                      <input
                        type="text"
                        id="subName"
                        placeholder="Material Name"
                        className="my-2"
                        value={subName}
                        onChange={(e) => setSubName(e.target.value)}
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
                      UPDATE MATERIAL
                    </button>
                  </div>
                </form>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
