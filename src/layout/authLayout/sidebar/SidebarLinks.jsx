import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { sidebarMenu } from "../../../data/sidebarLinks";

const SidebarLinks = ({ openSidebar }) => {
    const location = useLocation(); // Obtiene el path actual
    const [activeSection, setActiveSection] = useState(null); // Controla la sección activa

    // Maneja el clic en el padre para mostrar/ocultar las rutas secundarias
    const toggleSection = (index) => {
        setActiveSection((prev) => (prev === index ? null : index)); // Alterna entre abrir y cerrar
    };

    return (
        <div>
            {sidebarMenu.map((section, index) => (
                <div key={index} className="mb-4 pl-5">
                    {/* Encabezado de la sección */}
                    {openSidebar && (
                        <h6 className="uppercase text-sm text-gray-400">
                            {section.label}
                        </h6>
                    )}
                    <ul>
                        {section.items.map((item, idx) => {
                            const isActive = activeSection === `${index}-${idx}`; // Verifica si la sección está activa
                            const isParentActive =
                                location.pathname === item.path ||
                                (item.children &&
                                    item.children.some(
                                        (child) => child.path === location.pathname
                                    ));

                            return (
                                <li
                                    key={idx}
                                    className={`menu-item py-2 ${openSidebar ? "justify-start" : "justify-center"
                                        }`}
                                >
                                    {/* Enlace padre */}
                                    <button
                                        onClick={() => toggleSection(`${index}-${idx}`)}
                                        className={`flex items-center w-4/5 text-left ${isParentActive || isActive ? "text-white" : "text-gray-500"
                                            }`}
                                    >
                                        <i className={`${item.icon} text-xs`} />
                                        {openSidebar && (
                                            <span className="ml-2">{item.label}</span>
                                        )}
                                        {/* Ícono dinámico */}
                                        {item.children && openSidebar && (
                                            <span className="ml-auto">
                                                {isActive ? (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#6b7280"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-minus"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 12l14 0" />
                                                    </svg>
                                                ) : (
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="#6b7280"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M12 5l0 14" />
                                                        <path d="M5 12l14 0" />
                                                    </svg>
                                                )}
                                            </span>
                                        )}
                                    </button>

                                    {/* Submenú (rutas hijas) */}
                                    {item.children && openSidebar && isActive && (
                                        <ul className={`submenu overflow-hidden mt-2 text-gray-700 transition-all duration-300 ease-in-out ${isActive ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                                            {item.children.map((child, childIdx) => (
                                                <li
                                                    key={childIdx}
                                                    className={`submenu-item px-4 py-1 text-sm transition-all duration-300 ${location.pathname === child.path ? "text-white" : "hover:text-white"
                                                        }`}
                                                >
                                                    <Link to={child.path}>- {child.label}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default SidebarLinks;
