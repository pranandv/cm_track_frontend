import { Routes, Route } from "react-router-dom";
import UserLogin from "./component/onboarding/UserLogin";
import UserRegistration from "./component/onboarding/UserRegistration";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/home/Home";
import Dashboard from "./component/dashboard/Dashboard";
import ProtectedRoute from "./component/authentication/ProtectedRoute";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserRegistration />} />
        
        {/* Protected Route for Dashboard */}
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard />} />}
        />
      </Routes>
    </>
  );
};

export default App;
