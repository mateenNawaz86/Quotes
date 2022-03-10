import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import Header from "./components/Header/Header";
import AllQoutes from "./pages/AllQuotes";
import AddingQoutes from "./pages/AddingQuotes";
import QouteDetail from "./pages/QuoteDetail";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Navigate replace to="/all-quotes" />} />
        <Route exact path="/add-quotes" element={<AddingQoutes />} />
        <Route exact path="/quotes/:quoteID" element={<QouteDetail />} />
        <Route exact path="/all-quotes" element={<AllQoutes />} />
      </Routes>
    </>
  );
};

export default App;
