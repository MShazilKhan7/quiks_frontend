import React from "react";
import { DbSidebar } from "../../components/Dashboard/DbSidebar/dbSidebar";
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";

const DashboardLayout = () => {
  return (
    <div className="bg-back w-full flex">
      <div className="sidebar">
        <SidebarProvider>
          <DbSidebar />
          <main>
            <SidebarTrigger />
          </main>
        </SidebarProvider>
      </div>
      <div>dashboard</div>
    </div>
  );
};

export default DashboardLayout;
