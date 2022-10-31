import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import FormData from "./pages/2.1/Form";
import HighLight from "./pages/2.3/HighLight";
import PantipReview from "./pages/2.2/PantipReview";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/2_1" element={<FormData />} />
        <Route path="/2_2" element={<PantipReview />} />
        <Route path="/2_3" element={<HighLight />} />
        <Route path="*" element={<Navigate to="/2_1" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
