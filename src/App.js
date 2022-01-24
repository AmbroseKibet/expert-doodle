import React from "react";
import Navbar from "./components/Navbar";
import Pagination from "./pages/Pagination";
import Markdown from "./pages/Markdown";
import RandomPerson from "./pages/RandomPerson";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RandomPerson />} />
        <Route path="/pagination" element={<Pagination />} />
        <Route path="/markdown" element={<Markdown />} />
      </Routes>
    </Router>
  );
}

export default App;
