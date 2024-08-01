import React, { useState } from "react";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`bg-primay w-screen flex h-screen justify-between bg-primary`}
    >
      <div
        className={`left-container h-full md:w-[5rem] bg-black transition-all duration-500 ${
          isSidebarOpen ? "w-[5rem]" : "w-0"
        }`}
      >
        <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
      </div>
      <div
        className={`right-container h-full md:rounded-l-[0.5rem] md:w-[calc(100%-5rem)] bg-back transition-all duration-500 ${
          isSidebarOpen
            ? "w-[calc(100%-5rem)] rounded-l-[0.5rem]"
            : "w-full rounded-l-none"
        }`}
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
