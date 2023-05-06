import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft } from "react-bootstrap-icons";
import $ from "jquery";

function AdminProductNew() {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  // const [productId, setProductId] = useState("");
  const [productName, setProductName] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);

  function handleCheckboxChange1(event) {
    setIsChecked1(event.target.checked);
    $("#error-color").hide();
  }

  function handleCheckboxChange2(event) {
    setIsChecked2(event.target.checked);
    $("#error-color").hide();
  }

  function handleCheckboxChange3(event) {
    setIsChecked3(event.target.checked);
    $("#error-color").hide();
  }

  function handleCheckboxChange4(event) {
    setIsChecked4(event.target.checked);
    $("#error-color").hide();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var final = [];
    $(".error").remove();
    if (category === "") {
      $("#category").after('<div class="error">Select a Category</div>');
    } else {
      final.push("1");
    }
    if (subCategory === "") {
      $("#subCategory").after('<div class="error">Select a Sub Category</div>');
    } else {
      final.push("2");
    }
    // if (productId.length < 1) {
    //   $("#productId").after('<div class="error">Enter the Product ID</div>');
    // } else {
    //   var regEx1 = /^[A-Za-z\d\s]*$/;
    //   var validName1 = regEx1.test(productId);
    //   if (!validName1) {
    //     $("#productId").after(
    //       '<div class="error">Product ID contains only Alphabetics and Numbers</div>'
    //     );
    //   }
    //   final.push("3");
    // }
    if (productName.length < 1) {
      $("#productName").after(
        '<div class="error">Enter the Product Name</div>'
      );
    } else {
      var regEx2 = /^[A-Za-z\s]*$/;
      var validName2 = regEx2.test(productName);
      if (!validName2) {
        $("#productName").after(
          '<div class="error">Product Name contains only Alphabetics</div>'
        );
      }
      final.push("4");
    }
    if ($('input[name="size"]:checked')) {
      if ($('input[name="size"]:checked').val()) {
        final.push("5");
      } else {
        $("#size").after(
          '<span class="error" style="color:red">Select a Product Size</span>'
        );
      }
    }
    if (!isChecked1 && !isChecked2 && !isChecked3 && !isChecked4) {
      $("#error-color").text("Select at least one Product Color").show();
    } else {
      final.push("6");
    }
    if (quantity.length < 1) {
      $("#quantity").after(
        '<div class="error">Enter the number of products</div>'
      );
    } else {
      final.push("7");
    }
    if (description.length < 1) {
      $("#description").after(
        '<div class="error">Enter the description of the product</div>'
      );
    } else {
      final.push("8");
    }
    if (price.length < 1) {
      $("#price").after(
        '<div class="error">Enter the price($) of single product</div>'
      );
    } else {
      final.push("9");
    }
    const fileInput = $("#file")[0];
    if (!fileInput.files || !fileInput.files[0]) {
      $("#image-file").after(
        '<div class="error">Please upload an image file</div>'
      );
    } else {
      final.push("10");
    }
    if (final.length === 9) {
      navigate("/admin-product");
    }
  };

  return (
    <div
      className="row d-flex align-items-start justify-content-around gx-0 h-100"
      style={{ backgroundColor: "#faf4ed" }}
    >
      <div className="sign-up h-auto">
        <div className="p-2">
          <Link to="/admin-product">
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
              <ArrowLeft /> Product List
            </button>
          </Link>
        </div>
        <div
          className="sign-up-box d-flex flex-start justify-content-center"
          style={{ padding: "1.5rem", minHeight: "50rem" }}
        >
          <div
            className="sign-up-content w-100 m-auto"
            style={{ maxWidth: "25rem", maxHeight: "auto" }}
          >
            <div className="sign-up-form h-100 position-relative">
              <fieldset>
                <legend className="w-100">
                  <h2 className="text-center">Add New Product</h2>
                </legend>
                <form onSubmit={handleSubmit} id="adminform">
                  <div className="d-block">
                    <div className="my-2">
                      <div
                        className="d-flex align-items-center text-center"
                        id="category"
                        style={{
                          border: "1px solid #d1d0d0",
                          color: "#383633",
                          height: "3.2rem",
                          padding: "0 1.25rem",
                          width: "100%",
                        }}
                      >
                        <label
                          className="col-4 d-flex"
                          htmlFor="country-selector"
                        >
                          Category:
                        </label>
                        <select
                          className="col-8 p-1"
                          id="category-selector"
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option value="" disabled>
                            --Product Category--
                          </option>
                          <option value="Seating">Seating</option>
                          <option value="Living Room">Living Room</option>
                          <option value="Outdoor">Outdoor</option>
                          <option value="Bedroom">Bedroom</option>
                          <option value="Storage">Storage</option>
                          <option value="Rugs">Rugs</option>
                          <option value="Inspiration">Inspiration</option>
                        </select>
                      </div>
                    </div>
                    <div className="my-2">
                      <div
                        className="d-flex align-items-center text-center"
                        id="subCategory"
                        style={{
                          border: "1px solid #d1d0d0",
                          color: "#383633",
                          height: "3.2rem",
                          padding: "0 1.25rem",
                          width: "100%",
                        }}
                      >
                        <label
                          className="col-4 d-flex"
                          htmlFor="country-selector"
                        >
                          Sub Category:
                        </label>
                        <select
                          className="col-8 p-1"
                          id="subcategory-selector"
                          value={subCategory}
                          onChange={(e) => setSubCategory(e.target.value)}
                        >
                          <option value="" disabled>
                            --Product Sub Category--
                          </option>
                          <option value="Chairs">Chairs</option>
                          <option value="Sofas">Sofas</option>
                          <option value="Loveseats">Loveseats</option>
                          <option value="Accent">Accent</option>
                          <option value="Sleepers">Sleepers</option>
                          <option value="Kits">Kits</option>
                          <option value="Accessories">Accessories</option>
                        </select>
                      </div>
                    </div>
                    <div className="my-2">
                      <input
                        type="text"
                        id="productId"
                        placeholder="Product ID"
                        className="my-2"
                        value="1"
                        disabled
                        // value={productId}
                        // onChange={(e) => setProductId(e.target.value)}
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
                        id="productName"
                        placeholder="Product Name"
                        className="my-2"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
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
                      <div
                        className="d-flex align-items-center text-center"
                        id="size"
                        style={{
                          border: "1px solid #d1d0d0",
                          color: "#383633",
                          height: "3.2rem",
                          padding: "0 1.25rem",
                          width: "100%",
                        }}
                      >
                        <div className="col-3 d-flex">
                          <label>Size:</label>
                        </div>
                        <div className="col-3">
                          <input
                            type="radio"
                            id="small"
                            name="size"
                            value="Small"
                            checked={size === "Small"}
                            onChange={(e) => setSize(e.target.value)}
                          />
                          <label htmlFor="male">&nbsp;Small</label>
                        </div>
                        <div className="col-3">
                          <input
                            type="radio"
                            id="medium"
                            name="size"
                            value="Medium"
                            checked={size === "Medium"}
                            onChange={(e) => setSize(e.target.value)}
                          />
                          <label htmlFor="female">&nbsp;Medium</label>
                        </div>
                        <div className="col-3">
                          <input
                            type="radio"
                            id="largr"
                            name="size"
                            value="Large"
                            checked={size === "Large"}
                            onChange={(e) => setSize(e.target.value)}
                          />
                          <label htmlFor="other">&nbsp;Large</label>
                        </div>
                      </div>
                    </div>
                    <div className="my-2">
                      <div
                        className="d-flex align-items-center text-center"
                        id="color"
                        style={{
                          border: "1px solid #d1d0d0",
                          color: "#383633",
                          height: "3.2rem",
                          padding: "0 1.25rem",
                          width: "100%",
                        }}
                      >
                        <div className="col-1 d-flex">
                          <label>Color:</label>
                        </div>
                        <div className="col-3">
                          <input
                            type="checkbox"
                            name="checkbox1"
                            value="value1"
                            checked={isChecked1}
                            onChange={handleCheckboxChange1}
                          />
                          <label htmlFor="white">&nbsp;White</label>
                        </div>
                        <div className="col-3">
                          <input
                            type="checkbox"
                            name="checkbox2"
                            value="value2"
                            checked={isChecked2}
                            onChange={handleCheckboxChange2}
                          />
                          <label htmlFor="black">&nbsp;Black</label>
                        </div>
                        <div className="col-3">
                          <input
                            type="checkbox"
                            name="checkbox3"
                            value="value3"
                            checked={isChecked3}
                            onChange={handleCheckboxChange3}
                          />
                          <label htmlFor="brown">&nbsp;Brown</label>
                        </div>
                        <div className="col-3">
                          <input
                            type="checkbox"
                            name="checkbox4"
                            value="value4"
                            checked={isChecked4}
                            onChange={handleCheckboxChange4}
                          />
                          <label htmlFor="gray">&nbsp;Gray</label>
                        </div>
                      </div>
                      <div id="error-color" style={{ color: "red" }}></div>
                    </div>
                    <div className="my-2">
                      <div
                        className="d-flex align-items-center text-center dob1"
                        id="quantity"
                        style={{
                          border: "1px solid #d1d0d0",
                          color: "#383633",
                          height: "3.2rem",
                          width: "100%",
                        }}
                      >
                        <div className="col-3">
                          <label>Quantity:</label>
                        </div>
                        <div className="col-9">
                          <input
                            type="number"
                            min="1"
                            max="101"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
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
                    </div>
                    <div className="my-2">
                      <textarea
                        rows="10"
                        cols="50"
                        id="description"
                        name="description"
                        placeholder="Product Description..."
                        form="adminform"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        style={{
                          border: "1px solid #d1d0d0",
                          color: "#383633",
                          padding: "0.3rem 0.3rem",
                          width: "100%",
                        }}
                        onMouseOver={(e) =>
                          (e.target.style.backgroundColor = "#d1d0d0")
                        }
                        onMouseOut={(e) =>
                          (e.target.style.backgroundColor = "#fff")
                        }
                      ></textarea>
                    </div>
                    <div className="my-2">
                      <div
                        className="d-flex align-items-center text-center"
                        id="image-file"
                        style={{
                          border: "1px solid #d1d0d0",
                          color: "#383633",
                          height: "3.2rem",
                          width: "100%",
                        }}
                      >
                        <div className="col-4">
                          <label>Product Images:</label>
                        </div>
                        <div className="col-8">
                          <div
                            className="d-flex align-items-center"
                            style={{
                              border: "1px solid #d1d0d0",
                              color: "#383633",
                              height: "3.2rem",
                              padding: "0 1.25rem",
                              width: "100%",
                            }}
                          >
                            <input
                              type="file"
                              id="file"
                              accept="image/png, image/jpeg, image/webp"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="my-2">
                      <div
                        className="d-flex align-items-center text-center"
                        id="price"
                        style={{
                          border: "1px solid #d1d0d0",
                          color: "#383633",
                          height: "3.2rem",
                          width: "100%",
                        }}
                      >
                        <div className="col-4">
                          <label>Product Price:</label>
                        </div>
                        <div className="col-8">
                          <input
                            type="number"
                            min="1"
                            max="100000"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="Price of Single Product in $"
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
                      ADD PRODUCT
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

export default AdminProductNew;
