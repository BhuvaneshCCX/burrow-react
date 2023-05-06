export default function AdminProductTable({ data, onEdit, onDelete }) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Category</th>
          <th>Name</th>
          <th>Size</th>
          <th>Color</th>
          <th>Price($)</th>
          <th>Action</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index.pid}>
            <td>{item.pid}</td>
            <td>{item.category}</td>
            <td>{item.pname}</td>
            <td>{item.size}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>
            <td>
              <button
                className="edit"
                onClick={() => onEdit(item)}
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
                className="delete"
                onClick={() => onDelete(item)}
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
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
