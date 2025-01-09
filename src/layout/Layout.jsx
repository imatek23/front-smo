import React, { useState } from "react";
import SidebarScreen from "./authLayout/sidebar/SidebarScreen";
import NavbarScreen from "./authLayout/navbar/NavbarScreen";

const Layout = ({ children }) => {

    const [openSidebar, setOpenSidebar] = useState(true);

    return (
        <div className="layout-wrapper flex h-screen transition-all duration-300">
            {/* Sidebar */}
            <div className={openSidebar && 'sidebar-wrapper'}>
                <SidebarScreen openSidebar={openSidebar} />
            </div>

            {/* Contenedor principal */}
            <div
                className={`main-content-wrapper flex-1 flex flex-col transition-all duration-300 ${openSidebar ? "ml-0" : "ml-16"
                    }`}
            >
                {/* Navbar */}
                <div className="navbar-wrapper bg-gray-800 h-16 flex items-center">
                    <NavbarScreen openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
                </div>

                {/* Contenido principal */}
                <div className="flex-1 overflow-auto bg-bg-color-main text-white">
                    {children}
                </div>
            </div>

        </div>
    );
};

export default Layout;
