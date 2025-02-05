import React, { useState } from "react";
import { Link } from "react-router-dom";
import Settings from "./settings/Settings"; // Import the Settings component
import Inventory from "./inventory/Inventory"; // Import the Inventory component
import "./Dashboard.css"; // Import the CSS file

const Dashboard = () => {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="container">
      <div className="sidebar">
        <h2 className="sidebarHeading">Welcome</h2>
        <ul className="sidebarList">
          <li>
            <Link
              to="#"
              className={`sidebarLink ${activePage === "dashboard" ? "active" : ""}`}
              onClick={() => setActivePage("dashboard")}
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`sidebarLink ${activePage === "profile" ? "active" : ""}`}
              onClick={() => setActivePage("profile")}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`sidebarLink ${activePage === "settings" ? "active" : ""}`}
              onClick={() => setActivePage("settings")}
            >
              Settings
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`sidebarLink ${activePage === "orders" ? "active" : ""}`}
              onClick={() => setActivePage("orders")}
            >
              Orders
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`sidebarLink ${activePage === "inventory" ? "active" : ""}`}
              onClick={() => setActivePage("inventory")}
            >
              Inventory
            </Link>
          </li>
          <li>
            <Link
              to="#"
              className={`sidebarLink ${activePage === "employee" ? "active" : ""}`}
              onClick={() => setActivePage("employee")}
            >
              Employee
            </Link>
          </li>
        </ul>
      </div>
      <div className="mainContent">
        {activePage === "dashboard" && (
          <>
            <h3>Welcome to Your Dashboard</h3>
            <p>Here, you can manage your account, view your orders, and update your settings.</p>
            <div className="stats">
              <div className="statItem">
                <h4>Total Orders</h4>
                <p>10</p>
              </div>
              <div className="statItem">
                <h4>Total Spent</h4>
                <p>$500</p>
              </div>
            </div>
          </>
        )}
        {activePage === "settings" && <Settings />}
        {activePage === "profile" && <h3>Profile Section (Coming Soon)</h3>}
        {activePage === "orders" && <h3>Orders Section (Coming Soon)</h3>}
        {activePage === "inventory" && <Inventory />}
        {activePage === "employee" && <h3>Employee Section (Coming Soon)</h3>}
      </div>
    </div>
  );
};

export default Dashboard;
