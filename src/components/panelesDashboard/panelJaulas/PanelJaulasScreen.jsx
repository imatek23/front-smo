import React, { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import ReactSwitch from "react-switch";
import { GetJaulas } from "../../../helpers/getJaulas";
import { GetLineas } from "../../../helpers/getLineas";
import { GetJaulaIdPlanificacion } from "../../../helpers/getJaulaIdPlanificacion";
import { GetWS } from "../../../helpers/getWS";

const PanelJaulasScreen = () => {
  const [finCiclo, setFinCiclo] = useState(false);
  const [socketData, setSocketData] = useState([]);
  const [combinedData, setCombinedData] = useState([]);

  const handleCiclo = () => setFinCiclo((prev) => !prev);

  const fetchData = async (socketData) => {
    try {
      // Obtener líneas y jaulas
      const lineas = await GetLineas();
      const { data: jaulas } = await GetJaulas();

      // Combinar datos
      const lineasConJaulas = await Promise.all(
        socketData.map(async (socketItem) => {
          // Asociar línea con el socket mediante `line_code` y `LINE`
          const lineaAsociada = lineas.find((linea) => linea.line_code === socketItem.LINE);
          if (!lineaAsociada) return null; // Saltar si no se encuentra la línea

          // Asociar jaulas con línea mediante `codigo` y `line_code`
          const jaulasAsociadas = jaulas.filter((jaula) => jaula.codigo === lineaAsociada.line_code);

          // Obtener planificación para cada jaula mediante `jaulaId` y `_id`
          const jaulasConPlanificacion = await Promise.all(
            jaulasAsociadas.map(async (jaula) => {
              const planificacion = await GetJaulaIdPlanificacion(jaula._id);
              return { ...jaula, planificacion };
            })
          );

          return { ...lineaAsociada, jaulas: jaulasConPlanificacion };
        })
      );

      setCombinedData(lineasConJaulas.filter((linea) => linea !== null)); // Filtrar líneas no encontradas
      console.log("Datos combinados:", lineasConJaulas);
    } catch (error) {
      console.error("Error al obtener datos:", error);
    }
  };

  useEffect(() => {
    // Obtener datos del WebSocket
    const ws = GetWS((data) => {
      console.log("Datos del WebSocket:", data);
      setSocketData(data);
      fetchData(data); // Llamar al fetchData con datos del socket
    });

    return () => {
      if (ws.readyState === WebSocket.OPEN) ws.close();
    };
  }, []);

  return (
    <div className="flex items-center justify-between flex-wrap gap-y-4">
      {combinedData.map((linea) =>
        linea.jaulas.map((jaula, index) => (
          <div
            key={`${linea.line_code}-${index}`}
            className="bg-bg-color-login-form p-2 w-60 rounded shadow-lg"
          >
            {/* Encabezado del panel */}
            <div className="flex items-start justify-between">
              <h2 style={{ color: linea.color }}>{jaula.name || "Sin Nombre"}</h2>
              <div className="flex flex-col justify-center">
                <p>POS: {jaula.pos}</p>
                <p>PPM: {socketData.find((data) => data.LINE === linea.line_code)?.PPM || "N/A"}</p>
              </div>
            </div>

            {/* Contenido principal */}
            <div>
              <p>Jaula ID: {jaula._id}</p>
              <p>Planificación: {JSON.stringify(jaula.planificacion)}</p>
              <p>Coordenadas: X:{jaula.coord_x} Y:{jaula.coord_y}</p>
            </div>

            <div className="flex justify-between items-center">
              <p>Estado</p>
              <ReactSwitch
                checked={finCiclo}
                onChange={handleCiclo}
                onColor="#41528a"
                onHandleColor="#ffffff"
                uncheckedIcon={false}
                checkedIcon={false}
                height={16}
                width={40}
              />
            </div>

            {/* Barra de progreso */}
            <div className="flex items-center justify-between">
              <div className="w-4/5">
                <ProgressBar
                  completed={Math.round((jaula.coord_x / 100) * 100)}
                  height="8px"
                  isLabelVisible={false}
                  baseBgColor="#878a99"
                  bgColor="#8f483c"
                />
              </div>
              <p>{`${Math.round((jaula.coord_x / 100) * 100)}%`}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PanelJaulasScreen;
