import React from 'react';
import { Link } from 'react-router-dom';

import logoSm from '../../../assets/images/logo-sm.png';
import logoDark from '../../../assets/images/logo-dark.png';
import SidebarLinks from './SidebarLinks';

const SidebarScreen = ({ openSidebar }) => {

    return (
        <div className="flex flex-col h-full bg-bg-color-login-form">
            {/* Encabezado del sidebar */}
            <div className="p-4">
                {/* Logotipo */}
                {openSidebar ? (
                    <Link to="#">
                        <img src={logoDark} alt="Logo" className="w-full" />
                    </Link>
                ) : (
                    <Link to="#">
                        <img src={logoSm} alt="Logo" className="w-7" />
                    </Link>
                )}
            </div>

            {/* Menú del sidebar */}
            <div className="flex-1 overflow-auto">
                <SidebarLinks openSidebar={openSidebar} />
            </div>
        </div>
    );
};

export default SidebarScreen;
