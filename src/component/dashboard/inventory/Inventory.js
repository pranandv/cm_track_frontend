import React, { useState } from "react";
import axios from "axios";

const Inventory = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Handle adding inventory
  const handleAddInventory = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken"); // Fetch token from localStorage or cookies

    if (!token) {
      setError("You are not authenticated. Please login.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/inventory/add",
        {
          name,
          quantity,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setMessage(response.data.message); // Display success message
      setName(""); // Clear input fields
      setQuantity("");
    } catch (err) {
      setError("Error adding inventory. Please try again.");
    }
  };

  return (
    <div className="inventoryContainer">
      <h3>Add New Inventory</h3>
      {error && <div className="errorMessage">{error}</div>}
      {message && <div className="successMessage">{message}</div>}
      <form onSubmit={handleAddInventory} className="inventoryForm">
        <div className="inputGroup">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="inputGroup">
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submitButton">
          Add Inventory
        </button>
      </form>
    </div>
  );
};

export default Inventory;
