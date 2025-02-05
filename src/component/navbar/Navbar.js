import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const handleLogout = () => {
    localStorage.removeItem("token");  // Remove token from localStorage
    localStorage.removeItem("isAuthenticated");  // Remove authentication status
    navigate("/login");  // Redirect to login page after logout
  };

  const isAuthenticated = localStorage.getItem("token");  // Check if the user is authenticated

  // Check if the current path is /dashboard or any subpath (like /dashboard/settings)
  const isDashboardPage = location.pathname.startsWith("/dashboard");

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        {/* Show Home link for all paths except /dashboard or any subpath */}
        {!isDashboardPage && (
          <li>
            <Link to="/" style={styles.navItem}>Home</Link>
          </li>
        )}

        {/* If not authenticated, show Login and Signup links */}
        {!isAuthenticated ? (
          <>
            {!isDashboardPage && (
              <li>
                <Link to="/login" style={styles.navItem}>Login</Link>
              </li>
            )}
            {!isDashboardPage && (
              <li>
                <Link to="/signup" style={styles.navItem}>Signup</Link>
              </li>
            )}
          </>
        ) : (
          <>
            {/* If on Dashboard or any subpage, show only Logout button */}
            {isDashboardPage ? (
              <li style={styles.logoutListItem}>
                <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
              </li>
            ) : (
              <>
                {/* Show Dashboard link for all pages except dashboard */}
                <li>
                  <Link to="/dashboard" style={styles.navItem}>Dashboard</Link>
                </li>
                <li style={styles.logoutListItem}>
                  <button onClick={handleLogout} style={styles.logoutButton}>Logout</button>
                </li>
              </>
            )}
          </>
        )}
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#fff",
  },
  navList: {
    listStyle: "none",
    display: "flex",
    margin: 0,
    padding: 0,
  },
  navItem: {
    color: "#fff",
    textDecoration: "none",
    padding: "10px 20px",
    fontSize: "16px",
  },
  logoutListItem: {
    marginLeft: "auto", // This will push the logout button to the right
  },
  logoutButton: {
    backgroundColor: "#dc3545",
    border: "none",
    color: "#fff",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
  },
};

export default Navbar;
