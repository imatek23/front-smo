import React, { useEffect, useRef, useState } from "react";
import { getUserName } from "../../../helpers/getUserName";
import SpinnerScreen from "../../../components/spinners/SpinnerScreen";
import LogoutScreen from "../../../components/logout/LogoutScreen";

const NavbarScreen = ({ setOpenSidebar, openSidebar }) => {

    const [userName, setUserName] = useState('');
    const token = localStorage.getItem('authToken');
    const [isLoading, setIsLoading] = useState(false);
    const [openLogout, setOpenLogout] = useState(false);

    const logoutRef = useRef(null);

    // Se llama al usuario a través del token
    const getUser = async (t) => {
        setIsLoading(true);
        const user = await getUserName(t);
        setUserName(user.full_name);
        setIsLoading(false);
    };

    // Abre o cierra el sidebar
    const handleSidebar = () => {
        setOpenSidebar(!openSidebar);
    };

    // Función para fullScreen
    const handleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((error) => {
                console.log(error);
            });
        } else {
            document.exitFullscreen().catch((error) => {
                console.log(error);
            });
        }
    };

    // Cierra el logout si se hace clic fuera
    const handleClickOutside = (event) => {
        if (logoutRef.current && !logoutRef.current.contains(event.target)) {
            setOpenLogout(false);
        }
    };

    useEffect(() => {
        getUser(token);
    }, [token]);

    useEffect(() => {
        if (openLogout) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        // Cleanup del evento
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [openLogout]);

    return (
        <div className="flex justify-between items-center h-full px-4 md:px-8">
            {/* Botón para el menú móvil */}
            <button onClick={handleSidebar} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 6l16 0" />
                    <path d="M4 12l16 0" />
                    <path d="M4 18l16 0" />
                </svg>
            </button>

            <div className="flex items-center space-x-4">
                <button onClick={handleFullScreen} className="hidden md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#313945" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24V0z" fill="none" />
                        <path d="M4 8v-2a2 2 0 0 1 2 -2h2" />
                        <path d="M4 16v2a2 2 0 0 0 2 2h2" />
                        <path d="M16 4h2a2 2 0 0 1 2 2v2" />
                        <path d="M16 20h2a2 2 0 0 0 2 -2v-2" />
                    </svg>
                </button>

                {/* Iconos de usuario */}
                <div className="relative flex items-center space-x-4 h-16 bg-bg-color-user text-white">
                    {isLoading ? (
                        <SpinnerScreen />
                    ) : (
                        <button onClick={() => setOpenLogout(!openLogout)} className="flex items-center space-x-2 h-full px-4">
                            <img
                                src="https://via.placeholder.com/40"
                                alt="User Avatar"
                                className="w-10 h-10 rounded-full"
                            />
                            <span className="hidden sm:block">{userName}</span>
                        </button>
                    )}
                    {openLogout && (
                        <div ref={logoutRef} className="absolute top-full right-0 z-10 shadow-lg rounded-md w-40 bg-white text-black">
                            <LogoutScreen />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavbarScreen;