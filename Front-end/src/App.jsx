import { Route, Routes, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useAuthContext } from "./context/authcontext.jsx";
import Home from "../pages/Home/home.jsx";
import Login from "../pages/Login/login.jsx";
import Signup from "../pages/Signup/signup.jsx";


function App() {
  const { authUser } = useAuthContext();

  return (
    <div className="p-4 h-screen flex items-center justify-center bg-gray-100">
      <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={authUser ? <Home /> : <Navigate to="/login" />} />
        <Route path="/login" element={authUser ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to="/" /> : <Signup />} />
      </Routes>
    </div>
  );
}

export default App;










