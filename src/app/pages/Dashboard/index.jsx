import React from "react";
import { DbSidebar } from "../../components/Dashboard/DbSidebar/dbSidebar";
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar";
import { ThemeProvider } from "../../components/Dashboard/DbSidebar/themeProvider";
import Form from "../../components/Dashboard/books/Form";

const DashboardLayout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <div className=" w-full flex">
      <div className="sidebar">
        <SidebarProvider>
          <DbSidebar />
          <main>
            <SidebarTrigger/>
          </main>
        </SidebarProvider>
      </div>
      <main className="w-full">
        <Form />
      </main>
    </div>
    </ThemeProvider>
  );
};

export default DashboardLayout;
