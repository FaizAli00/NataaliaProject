import React from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "./components/newArrivals/NewArrivals";
import { Routes, Route } from "react-router-dom";
import RegistrationForm from "./components/loginSinUp/RegistrationForm";
import LoginPage from "./components/loginSinUp/Login";
import NewArrivals from "./components/newArrivals/NewArrivals";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/home" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/newarrivals" element={<Products />} /> */}
        <Route path="/newarrivals" element={<NewArrivals />} />
      </Routes>
    </>
  );
}

export default App;
