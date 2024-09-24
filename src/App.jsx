/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ActionType from "./pages/ActionType";
import Apparel from "./pages/Apparel";
import Confirmation from "./pages/Confirmation";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/actionType" element={<ActionType />} />
          <Route path="/apparel" element={<Apparel />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={5000} 
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </Router>
    </>
  );
};

export default App;
