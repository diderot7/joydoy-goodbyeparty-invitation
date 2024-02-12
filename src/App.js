import React, { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comment from "./pages/Comment";
import Home from "./pages/Home";

const App = () => {
  const [reservationDate, setReservationDate] = useState(new Date());

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/comment" element={<Comment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
export default App;
