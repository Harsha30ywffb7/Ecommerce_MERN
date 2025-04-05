import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applayout from "./components/Applayout";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Body from "./components/Body";
const App = () => {
  //js

  //ui
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Applayout />}>
            <Route path="/home" element={<Body />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
