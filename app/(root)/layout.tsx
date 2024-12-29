import React from "react";
import SideBar from "@/components/shared/SideBar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <main className="root">
    <SideBar/>
    {/* MobileNav */}
    <div className="root-container">
        <div className="wrapper">
        {children}


        </div>
    </div>
  </main>;
};

export default Layout;

