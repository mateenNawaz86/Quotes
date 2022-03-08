import React from "react";
import Welcome from "./components/pages/Welcome";
import Products from "./components/pages/Products";

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route exact path="/welcome" element={<Welcome />} />
          <Route exact path="/products" element={<Products />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
