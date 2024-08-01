import "./App.css";
import React, { useState } from "react";
import "./index.css";
import Sidebar from "./app/components/sidebar/Sidebar";
import MainContainer from "./app/components/RootLayout/RootLayout";
import RootLayout from "./app/components/RootLayout/RootLayout";
import AppRoutes from "./app/routes";

function App() {
  return (
    <div id="app">
      <AppRoutes />
    </div>
  );
}

export default App;
