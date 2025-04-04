import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Applayout from "./components/Applayout";
const App = () => {
  //js

  //ui
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Applayout />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
