import React from "react";
import Sidebar from "./components/sidebar";
import Section from "./components/section";
import { GlobalStyle } from "./components/styles/GlobalStyle";
import { WeatherProvider } from "./contexts/WeatherContext";

const App = () => {
  return (
    <WeatherProvider>
      <GlobalStyle />
      <main className="container">
        <Sidebar />
        <Section />
      </main>
    </WeatherProvider>
  );
};

export default App;
