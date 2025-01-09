import React, { useEffect, useState } from "react";
import { GetLineas } from "../../../helpers/getLineas";
import { GetWS } from "../../../helpers/getWS";

const PanelLineasScreen = ({ editPanel }) => {
    const [getLines, setGetLines] = useState([]);
    const [socketData, setSocketData] = useState([]);

    // Obtener las líneas iniciales
    const GetAllLines = async () => {
        const lines = await GetLineas();
        setGetLines(lines);
    };

    useEffect(() => {
        GetAllLines();
       
    }, []);

    useEffect(() => {
        // Inicia la conexión WebSocket
        const ws = GetWS((data) => {
            // console.log("Datos recibidos del WebSocket:", data);
            setSocketData(data); // Actualizar el estado con los datos recibidos
        });

        // Cerrar conexión al desmontar el componente
        return () => {
            if (ws.readyState === WebSocket.OPEN) {
                ws.close();
                // console.log("Conexión WebSocket cerrada");
            }
        };
    }, []);

    return (
        <div className="flex items-center justify-between flex-wrap">
            {getLines.map((line) => {
                // Encuentra el dato del WebSocket correspondiente al line_code
                const matchedSocketData = socketData.find(
                    (socketItem) => socketItem.LINE === line.line_code
                );
               

                // Si no hay coincidencia, no se renderiza el panel
                if (!matchedSocketData) {
                    return null;
                }

                return (
                    <div key={line.id} className="bg-bg-color-login-form p-2 rounded-md shadow-md w-60">
                        {/* Encabezado del panel */}
                        <div className="flex justify-between items-center mb-2">
                            <span
                                className="font-bold text-[calc(1rem+1vw)]"
                                style={{ color: line.color }}
                            >
                                {line.line_name}
                            </span>
                            <button>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#6b7280"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-power"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M7 6a7.75 7.75 0 1 0 10 0" />
                                    <path d="M12 4l0 8" />
                                </svg>
                            </button>
                        </div>

                        {/* Datos principales */}
                        <div className="flex items-center justify-between mb-2 text-[calc(0.8rem+0.2vw)]">
                            <div>
                                <p className="text-white font-semibold">
                                    {matchedSocketData.temperature.toFixed(2)}°C
                                </p>
                            </div>
                            <div>
                                <p className="text-white font-semibold">
                                    {matchedSocketData.bar.toFixed(2)} bar
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex flex-col items-center justify-center">
                                <p className="text-gray-400 text-xs">P</p>
                                <p className="text-gray-400 text-xs" style={{color: line.color}}>{matchedSocketData.PS}</p>
                            </div>

                            {/* Indicadores */}
                            <div className="text-gray-400 flex items-center justify-between w-4/5">
                                {matchedSocketData.ALG_detail.map((label) => (
                                    <div
                                        key={label.device}
                                        className="flex flex-col items-center justify-center mx-1"
                                    >
                                        <p className="text-xs">{label.device}</p>
                                        <span className={`w-2 h-2 rounded-full ${!label.alarm ? 'bg-green-500' : 'bg-red-500'}`}></span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Estado final */}
                        <div className="bg-gray-700 p-1 mt-2 text-center rounded text-gray-300 text-[calc(0.7rem+0.1vw)]">
                            Línea {matchedSocketData.ALG ? "encendida" : "apagada"}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default PanelLineasScreen;
