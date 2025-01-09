import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import logoSm from '../../../assets/images/logo-sm.png';
import logoDark from '../../../assets/images/logo-dark.png';
import logoLight from '../../../assets/images/logo-light.png';
import SidebarLinks from './SidebarLinks';

const SidebarScreen = ({ openSidebar }) => {

    return (
        <div
            className={`bg-bg-color-login-form fixed bottom-0 top-0 text-white shadow-lg transition-all duration-300 ${openSidebar ? "w-72" : "w-16"}`}
        >
            {/* Encabezado del sidebar */}
            <div
                className={`navbar-brand-box p-4 flex items-center justify-between ${!openSidebar && "justify-center"
                    }`}
            >
                {/* Logotipo */}
                {openSidebar ? (
                    <Link to="#" className="logo logo-dark">
                        <img src={logoDark} alt="Logo" className="h-12" />
                    </Link>
                )
                    :
                    (
                        <Link to="#">
                            <img src={logoSm} alt="Logo" className="h-12 w-4/5"  />
                        </Link>
                    )
                }

            </div>

            {/* Menú del sidebar */}
            <div className={`mt-4 ${!openSidebar && "text-center"}`}>
                <SidebarLinks openSidebar={openSidebar} />
            </div>
        </div>
    );
};

export default SidebarScreen;
