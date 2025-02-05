import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Inventory.css"; // Import external CSS

const Inventory = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => setMessage(""), 1000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  // Handle adding inventory
  const handleAddInventory = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (!token) {
      setError("You are not authenticated. Please login.");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:3001/inventory/add",
        { name, quantity },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage(response.data.message);
      setName("");
      setQuantity("");
    } catch (err) {
      setError("Error adding inventory. Please try again.");
    }
  };

  return (
    <div className="inventory-container">
      <h3 className="title">Add New Inventory</h3>
      {error && <div className="error-message">{error}</div>}
      {message && <div className="success-message">{message}</div>}
      <form onSubmit={handleAddInventory} className="inventory-form">
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Quantity</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">Add Inventory</button>
      </form>
    </div>
  );
};

export default Inventory;
