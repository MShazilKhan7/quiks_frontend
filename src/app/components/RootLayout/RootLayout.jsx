import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { SidebarProvider, SidebarTrigger } from "../ui/sidebar";

export default function RootLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  // window.onclick = function(event) {
  //   if (event.target == modalCompanies) {
  //       modalCompanies.style.display = "none";
  //   }

  //     if (event.target == modalPrivacy) {
  //         modalPrivacy.style.display = "none";
  //     }
  // }

  return (
    <SidebarProvider>
      <div className={`bg-primay w-screen flex h-screen justify-between `}>
        <div
          className={`left-container md:px-4 absolute top-0 left-0 md:static z-10 h-full md:w-[6rem] transition-all duration-500 bg-back_secondary ${
            isSidebarOpen ? "w-[6rem] px-4" : "w-0 px-0"
          }`}
        >
          <Sidebar isOpen={isSidebarOpen} onToggle={toggleSidebar} />
          <button
            className={
              "absolute md:hidden bottom-4 left-1/2 transform text-white w-8 h-8 flex items-center justify-center rounded-full shadow-lg toggle-btn close bg-accent"
            }
            onClick={toggleSidebar}
            aria-label="Toggle Sidebar"
          >
            {isSidebarOpen ? (
              <i className="fas fa-arrow-left text-sm"></i>
            ) : (
              <i className="fas fa-arrow-right text-sm"></i>
            )}
          </button>
        </div>
        <div
          className={`right-container shadow-md w-full h-screen md:rounded-l-[1.3rem] md:w-[calc(100%-6rem)] bg-back`}
        >
          <Header />
          <div className="content-container w-full overflow-y-auto h-[calc(100%-96px)]">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
