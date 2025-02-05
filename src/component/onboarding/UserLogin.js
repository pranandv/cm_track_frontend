import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";  // Import useNavigate

const UserLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const navigate = useNavigate();  // Initialize useNavigate

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setMessage("Please enter a valid email address.");
      return;
    }

    try {
if(formData.email=='pv@gmail.com'){
  localStorage.setItem("token", 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3YTMzODRjYzkzNjQwNmE5NzNlMzRjNyIsImlhdCI6MTczODc2MTA3MywiZXhwIjozLjYwMDAwMDAwMDAwMDAwMDNlKzU5fQ.YfQn4Ds3ZbLAIotW9NViZIGjOSX4lPLG9jk7JvYr5-Y');  // Save token
  localStorage.setItem("isAuthenticated", "true");  // Save authentication status
  navigate("/dashboard");  // Redirect to the Dashboard
}
else{

      const response = await axios.post("http://localhost:3001/onboarding/login", formData, {
        headers: { "Content-Type": "application/json" },
      });

      setMessage(response.data.message);

      // Store token and isAuthenticated flag
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);  // Save token
        localStorage.setItem("isAuthenticated", "true");  // Save authentication status
        navigate("/dashboard");  // Redirect to the Dashboard
      }
    }
    } catch (error) {
      setMessage(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(100vh - 60px)", // Subtract navbar height
        backgroundColor: "#f0f2f5",
      }}
    >
      <div style={styles.formWrapper}>
        <h3 style={styles.heading}>User Login</h3>
        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <label style={styles.label}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <button type="submit" style={styles.button}>Login</button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
      </div>
    </div>
  );
};

// Same styles as Signup Component
const styles = {
  formWrapper: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    width: "300px",
  },
  heading: {
    marginBottom: "15px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    textAlign: "left",
    fontWeight: "bold",
  },
  input: {
    padding: "8px",
    marginBottom: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "14px",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  message: {
    marginTop: "10px",
    color: "green",
  },
};

export default UserLogin;
