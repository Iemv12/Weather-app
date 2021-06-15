import React from "react";
import Sidebar from "./components/sidebar";
import { GlobalStyle } from "./components/styles/GlobalStyle";
import "./App.css";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Sidebar />
        <div className="x">hola</div>
      </div>
    </>
  );
};

export default App;
