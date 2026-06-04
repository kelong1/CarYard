import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Navbar from "./Components/Navbar";
import ProductCarForm from "./Pages/ProductCarForm";
import ViewCars from "./Pages/ViewCars";
import UpdateProductCar from "./Pages/UpdateProductCar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<ProductCarForm />} />
          <Route path="/viewcars" element={<ViewCars />} />
          <Route path="/updateproductcar" element={<UpdateProductCar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
