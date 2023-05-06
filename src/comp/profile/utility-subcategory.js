import "../App.css";
import React from "react";
import { useState } from "react";
import $ from "jquery";
import Table from "react-bootstrap/esm/Table";
import { useNavigate } from "react-router-dom";

export default function UtilitySubCategory() {
  const [category, setCategory] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [tableData, setTableData] = useState([]);

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    var final = [];
    $(".error").remove();
    if (category === "") {
      $("#productName2").after('<div class="error">Select a Category</div>');
    } else {
      final.push("1");
    }
    if (inputValue.length < 1) {
      $("#productName2").after(
        '<div class="error">Enter the Sub Category</div>'
      );
    } else {
      var regEx = /^[A-Za-z\s]*$/;
      var validName = regEx.test(inputValue);
      if (!validName) {
        $("#productName2").after(
          '<div class="error">Sub Category Name contains only Alphabetics</div>'
        );
      } else {
        final.push("2");
      }
    }

    if (final.length === 2) {
      navigate("/admin-utility");
      setTableData([...tableData, inputValue]);
      setInputValue("");
    }
  }
  const handleDeleteButtonClick = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (confirmDelete) {
      const newData = [...tableData];
      newData.splice(index, 1);
      setTableData(newData);
      $().toggle();
    }
  };

  const navigate = useNavigate();
  const onEdit = () => {
    navigate("/UtilityEditSubCategory");
  };

  return (
    <div className="p-3">
      <h2>Add Sub Category</h2>
      <form
        onSubmit={handleSubmit}
        className="text-start mb-2 d-flex gap-2"
        id="productName2"
      >
        <select
          className="py-2"
          id="category-selector"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            --Select Category--
          </option>
          <option value="Seating">Seating</option>
          <option value="LivingRoom">Living Room</option>
          <option value="Outdoor">Outdoor</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Storage">Storage</option>
          <option value="Rugs">Rugs</option>
          <option value="Inspiration">Inspiration</option>
        </select>
        <input
          type="text"
          placeholder="Enter Sub Category"
          style={{
            border: "1px solid gray",
            color: "#383633",
            height: "2.5rem",
            padding: "0 1.25rem",
            width: "20rem",
          }}
          value={inputValue}
          onChange={handleInputChange}
        />
        <input
          type="submit"
          value="Add"
          style={{
            border: "1px solid #d1d0d0",
            backgroundColor: "#514f4d",
            color: "#fff",
            height: "2.5rem",
            padding: "0 3.2rem",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#383633")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
        ></input>
      </form>
      <Table className="utility-table">
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>SubCategories</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr id="subcategories1">
          <td>1</td>
          <td>Seating</td>
          <td>Chairs</td>
          <td>
            <button
              className="edit"
              onClick={() => onEdit()}
              style={{
                padding: "0.2rem 1.5rem",
                border: "1px solid #d1d0d0",
                backgroundColor: "#514f4d",
                color: "#fff",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#383633")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="edit"
              style={{
                padding: "0.2rem 1.5rem",
                border: "1px solid #d1d0d0",
                backgroundColor: "#514f4d",
                color: "#fff",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#383633")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
              onClick={(e) => {
                const confirmToggle = window.confirm(
                  "Are you sure you want to delete this item?"
                );
                if (confirmToggle) {
                  $("#subcategories1").toggle();
                }
              }}
            >
              Delete
            </button>
          </td>
        </tr>
        <tr id="subcategories2">
          <td>2</td>
          <td>LivingRoom</td>
          <td>Sofas</td>
          <td>
            <button
              className="edit"
              onClick={() => onEdit()}
              style={{
                padding: "0.2rem 1.5rem",
                border: "1px solid #d1d0d0",
                backgroundColor: "#514f4d",
                color: "#fff",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#383633")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="edit"
              style={{
                padding: "0.2rem 1.5rem",
                border: "1px solid #d1d0d0",
                backgroundColor: "#514f4d",
                color: "#fff",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#383633")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
              onClick={(e) => {
                const confirmToggle = window.confirm(
                  "Are you sure you want to delete this item?"
                );
                if (confirmToggle) {
                  $("#subcategories2").toggle();
                }
              }}
            >
              Delete
            </button>
          </td>
        </tr>
        <tr id="subcategories3">
          <td>3</td>
          <td>Rugs</td>
          <td>Kits</td>
          <td>
            <button
              className="edit"
              onClick={() => onEdit()}
              style={{
                padding: "0.2rem 1.5rem",
                border: "1px solid #d1d0d0",
                backgroundColor: "#514f4d",
                color: "#fff",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#383633")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
            >
              Edit
            </button>
          </td>
          <td>
            <button
              className="edit"
              style={{
                padding: "0.2rem 1.5rem",
                border: "1px solid #d1d0d0",
                backgroundColor: "#514f4d",
                color: "#fff",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#383633")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
              onClick={(e) => {
                const confirmToggle = window.confirm(
                  "Are you sure you want to delete this item?"
                );
                if (confirmToggle) {
                  $("#subcategories3").toggle();
                }
              }}
            >
              Delete
            </button>
          </td>
        </tr>
        {tableData.map((value, index) => (
          <tr key={index}>
            <td>{index + 4}</td>
            <td>{category}</td>
            <td>{value}</td>
            <td>
              <button
                className="edit"
                onClick={() => onEdit()}
                style={{
                  padding: "0.2rem 1.5rem",
                  border: "1px solid #d1d0d0",
                  backgroundColor: "#514f4d",
                  color: "#fff",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#383633")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
              >
                Edit
              </button>
            </td>
            <td>
              <button
                className="edit"
                style={{
                  padding: "0.2rem 1.5rem",
                  border: "1px solid #d1d0d0",
                  backgroundColor: "#514f4d",
                  color: "#fff",
                }}
                onMouseOver={(e) =>
                  (e.target.style.backgroundColor = "#383633")
                }
                onMouseOut={(e) => (e.target.style.backgroundColor = "#514f4d")}
                onClick={() => handleDeleteButtonClick(index)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
}
