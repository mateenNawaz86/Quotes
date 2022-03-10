import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AllQoutes from "./pages/AllQuotes";
import AddingQoutes from "./pages/AddingQuotes";
import QouteDetail from "./pages/QuoteDetail";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/all-quotes" />} />
          <Route exact path="/add-quotes" element={<AddingQoutes />} />
          <Route path="/quotes/:quoteID/*" element={<QouteDetail />} />
          <Route path="/all-quotes" element={<AllQoutes />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
