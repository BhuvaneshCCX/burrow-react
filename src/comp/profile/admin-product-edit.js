import React, { useState } from "react";
import $ from "jquery";
import { useNavigate } from "react-router-dom";

export default function AdminProductEdit({ data, onSave, onCancel }) {
  const [pid, setPId] = useState(data.pid);
  const [category, setCategory] = useState(data.category);
  const [pname, setPName] = useState(data.pname);
  const [size, setSize] = useState(data.size);
  const [color, setColor] = useState(data.color);
  const [price, setPrice] = useState(data.price);
  const [subcategory, setSubCategory] = useState(data.subcategory);
  const [quantity, setQuantity] = useState(data.quantity);
  const [description, setDescription] = useState(data.description);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const final = [];
    $(".error").remove();

    const pname = $("#pnamevalue").val();
    if (pname.length < 1) {
      $("#productName").after(
        '<div class="error">*Enter the Product Name</div>'
      );
    } else {
      const regEx1 = /^[A-Za-z\s]*$/;
      const validName1 = regEx1.test(pname);
      if (!validName1) {
        $("#productName").after(
          '<div class="error">*Product Name contains only Alphabetics</div>'
        );
      } else {
        final.push("1");
      }
    }

    const size = $("#sizevalue").val();
    if (pname.length < 1) {
      $("#size").after(
        '<div class="error">*Enter the Product Size (S,M,L)</div>'
      );
    } else {
      const regEx2 = /^[A-Za-z\s]*$/;
      const validName2 = regEx2.test(size);
      if (!validName2) {
        $("#size").after(
          '<div class="error">*Product Name contains only Alphabetics</div>'
        );
      } else {
        final.push("2");
      }
    }

    const color = $("#colorvalue").val();
    if (color.length < 1) {
      $("#color").after('<div class="error">*Enter the Product Color</div>');
    } else {
      const regEx3 = /^[A-Za-z\s]*$/;
      const validName3 = regEx3.test(color);
      if (!validName3) {
        $("#color").after(
          '<div class="error">*Product Name contains only Alphabetics</div>'
        );
      } else {
        final.push("3");
      }
    }

    const fileInput = $("#file")[0];
    if (!fileInput.files || !fileInput.files[0]) {
      $("#image-file").after(
        '<div class="error">*Please upload an image file</div>'
      );
    } else {
      final.push("4");
    }

    const quantity = $("#quantityvalue").val();
    if (quantity.length < 1) {
      $("#quantity").after(
        '<div class="error">*Enter the number of products</div>'
      );
    } else {
      final.push("5");
    }

    const description = $("#description").val();
    if (description.length < 1) {
      $("#description").after(
        '<div class="error">*Enter the description of the product</div>'
      );
    } else {
      final.push("6");
    }

    const price = $("#pricevalue").val();
    if (price.length < 1) {
      $("#price").after(
        '<div class="error">*Enter the price of the products (in $)</div>'
      );
    } else {
      final.push("7");
    }

    if (final.length === 7) {
      onSave({ pid, category, pname, size, color, price });
      navigate("/admin-product");
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="d-flex justify-content-center h-auto">
      <form onSubmit={handleSubmit} className="d-flex flex-column product-edit">
        <div className="my-2">
          <div
            className="d-flex align-items-center"
            style={{
              border: "1px solid #d1d0d0",
              height: "3.2rem",
              width: "100%",
            }}
          >
            <div className="col-4">
              <label>ID:</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                name="pid"
                placeholder="Product ID"
                value={pid}
                onChange={(event) => setPId(event.target.value)}
                disabled
                style={{
                  border: "1px solid #d1d0d0",
                  color: "#383633",
                  height: "3.2rem",
                  padding: "0 1.25rem",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
        <div className="my-2">
          <div
            className="d-flex align-items-center"
            style={{
              border: "1px solid #d1d0d0",
              color: "#383633",
              height: "3.2rem",
              width: "100%",
            }}
          >
            <div className="col-4">
              <label>Category:</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                disabled
                style={{
                  border: "1px solid #d1d0d0",
                  height: "3.2rem",
                  padding: "0 1.25rem",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
        <div className="my-2">
          <div
            className="d-flex align-items-center"
            style={{
              border: "1px solid #d1d0d0",
              color: "#383633",
              height: "3.2rem",
              width: "100%",
            }}
          >
            <div className="col-4">
              <label>Sub Category:</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                name="category"
                placeholder="Category"
                value={subcategory}
                onChange={(event) => setSubCategory(event.target.value)}
                disabled
                style={{
                  border: "1px solid #d1d0d0",
                  height: "3.2rem",
                  padding: "0 1.25rem",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
        <div className="my-2">
          <div
            id="productName"
            className="d-flex align-items-center"
            style={{
              border: "1px solid #d1d0d0",
              color: "#383633",
              height: "3.2rem",
              width: "100%",
            }}
          >
            <div className="col-4">
              <label>Name:</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                name="pname"
                id="pnamevalue"
                placeholder="Product Name"
                value={pname}
                onChange={(event) => setPName(event.target.value)}
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
                onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
              />
            </div>
          </div>
        </div>
        <div className="my-2">
          <div
            className="d-flex align-items-center"
            id="size"
            style={{
              border: "1px solid #d1d0d0",
              color: "#383633",
              height: "3.2rem",
              width: "100%",
            }}
          >
            <div className="col-4">
              <label>Size:</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                name="size"
                id="sizevalue"
                placeholder="Product Size"
                value={size}
                onChange={(event) => setSize(event.target.value)}
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
                onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
              />
            </div>
          </div>
        </div>
        <div className="my-2">
          <div
            className="d-flex align-items-center"
            id="color"
            style={{
              border: "1px solid #d1d0d0",
              color: "#383633",
              height: "3.2rem",
              width: "100%",
            }}
          >
            <div className="col-4">
              <label>Color:</label>
            </div>
            <div className="col-8">
              <input
                type="text"
                name="color"
                id="colorvalue"
                placeholder="Product Color"
                value={color}
                onChange={(event) => setColor(event.target.value)}
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
                onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
              />
            </div>
          </div>
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
            <div className="col-4">
              <label>Quantity:</label>
            </div>
            <div className="col-8">
              <input
                type="number"
                id="quantityvalue"
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
                onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
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
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d1d0d0")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
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
            className="d-flex align-items-center"
            id="price"
            style={{
              border: "1px solid #d1d0d0",
              color: "#383633",
              height: "3.2rem",
              width: "100%",
            }}
          >
            <div className="col-4">
              <label>Price:</label>
            </div>
            <div className="col-8">
              <input
                type="number"
                id="pricevalue"
                min="1"
                max="1000000"
                name="price"
                placeholder="Product Price"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
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
                onMouseOut={(e) => (e.target.style.backgroundColor = "#fff")}
              />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between mt-1">
          <button
            type="submit"
            style={{
              padding: "0.5rem 5rem",
              border: "1px solid #d1d0d0",
              backgroundColor: "#514f4d",
              color: "#fff",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#383633")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
          >
            Update
          </button>
          <button
            type="button"
            onClick={handleCancel}
            style={{
              padding: "0.5rem 5rem",
              border: "1px solid #d1d0d0",
              backgroundColor: "#514f4d",
              color: "#fff",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#383633")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
