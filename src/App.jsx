import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AllQoutes from "./pages/AllQuotes";
import NewQoutes from "./pages/NewQuotes";
import Layout from "./components/layout/Layout";
import QuoteDetail from "./pages/QuoteDetail";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Navigate replace to="/quotes" exact />} />
          <Route path="/quotes" element={<AllQoutes />} exact />
          <Route path="/quotes/:quoteId/*" element={<QuoteDetail />} />
          <Route path="/new-quotes" element={<NewQoutes />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
