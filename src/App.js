import React from "react";
import Sidebar from "./components/sidebar";
import Section from "./components/section";
import { GlobalStyle } from "./components/styles/GlobalStyle";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <main className="container">
        <Sidebar />
        <Section />
      </main>
    </>
  );
};

export default App;
