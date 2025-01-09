import React, { useState } from "react";
import SidebarScreen from "./authLayout/sidebar/SidebarScreen";
import NavbarScreen from "./authLayout/navbar/NavbarScreen";

const Layout = ({ children }) => {

    const [openSidebar, setOpenSidebar] = useState(true);

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className={`${openSidebar ? "w-64" : "w-16"} transition-all duration-300 hidden md:block`}>
                <SidebarScreen openSidebar={openSidebar} />
            </div>

            {/* Contenedor principal */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <div className="h-16">
                    <NavbarScreen openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
                </div>

                {/* Contenido principal */}
                <div className="flex-1 overflow-auto text-white ">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Layout;