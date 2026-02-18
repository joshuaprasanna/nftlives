import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeChurch from "./componentss/HomeChurch";
import GetInvolved from "./componentss/GetInvolved";
import Contact from "./componentss/Contact";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeChurch />} />
      <Route path="/get-involved" element={<GetInvolved />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
