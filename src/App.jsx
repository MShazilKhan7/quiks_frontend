import "./App.css";
import React, { useState } from "react";
import "./index.css";
import Sidebar from "./app/components/sidebar/Sidebar"
import MainContainer from "./app/components/MainContainer";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div id="app">
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar}/>
        <MainContainer isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      </div>
    </>
  );
}

export default App;
