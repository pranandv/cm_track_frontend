import { useState } from "react";
import axios from "axios";

const UserRegistration = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("formData", formData);
      const response = await axios.post("http://localhost:3001/onboarding/signup", formData);
      console.log("response.data", response.data);
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h3 style={styles.heading}>User Registration</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "calc(100vh - 60px)", // Subtract the navbar height (60px) from viewport height
    margin: "0", // Remove any margin
    padding: "0", // Remove padding
    backgroundColor: "#f0f2f5",
    overflow: "hidden", // Prevent horizontal scroll
  },
  formWrapper: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "100%",
    maxWidth: "400px", // Limiting the width of the form
    overflow: "hidden", // Prevent internal scrolling
    boxSizing: "border-box", // Includes padding and borders in element's total width/height
  },
  heading: {
    marginBottom: "15px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align the label and input to the left
    marginBottom: "15px", // Add space between form groups
    width: "100%", // Ensure it takes up full width
  },
  label: {
    marginBottom: "5px",
    textAlign: "left",
    fontWeight: "bold",
    width: "100%", // Ensure label takes full width for alignment
  },
  input: {
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
    width: "100%", // Make input fields responsive
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%", // Make the button span the full width
  },
  message: {
    marginTop: "10px",
    color: "green",
  },
};

export default UserRegistration;
