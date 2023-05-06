import "../App.css";
import React from "react";
import { useState } from "react";
import $ from "jquery";
import Table from "react-bootstrap/esm/Table";
import { useNavigate } from "react-router-dom";

export default function UtilityMaterial() {
  const [inputValue, setInputValue] = useState("");
  const [tableData, setTableData] = useState([]);
  function handleInputChange(event) {
    setInputValue(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    var final = [];
    $(".error").remove();
    if (inputValue.length < 1) {
      $("#productName4").after('<div class="error">Enter the Material</div>');
    } else {
      var regEx2 = /^[A-Za-z\s]*$/;
      var validName2 = regEx2.test(inputValue);
      if (!validName2) {
        $("#productName4").after(
          '<div class="error">Material Name contains only Alphabetics</div>'
        );
      } else {
        final.push("1");
        setTableData([...tableData, inputValue]);
        setInputValue("");
      }
    }

    if (final.length === 1) {
      navigate("/admin-utility");
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
    navigate("/UtilityEditMaterial");
  };

  return (
    <div className="p-3">
      <h2>Add Material</h2>
      <form
        onSubmit={handleSubmit}
        className="text-start mb-2 d-flex gap-2"
        id="productName4"
      >
        <input
          type="text"
          placeholder="Enter Material"
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
          <th>Material</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        <tr id="material1">
          <td>1</td>
          <td>Leather</td>
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
                  $("#material1").toggle();
                }
              }}
            >
              Delete
            </button>
          </td>
        </tr>
        <tr id="material2">
          <td>2</td>
          <td>Plastic</td>
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
                  $("#material1").toggle();
                }
              }}
            >
              Delete
            </button>
          </td>
        </tr>
        <tr id="material3">
          <td>3</td>
          <td>Wood</td>
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
                  $("#material1").toggle();
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
