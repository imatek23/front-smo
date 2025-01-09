import React, { useState } from "react";
import PanelDashboardScreen from "../panelesDashboard/PanelDashboardScreen";
import ReactSwitch from "react-switch";
import SubnavbarScreen from "../subnavbar/SubnavbarScreen";

const DashboardScreen = () => {

  const [editPanel, setEditPanel] = useState(false);
  const [resetPanel, setResetPanel] = useState(false);


  const handleEditPanels = () => {
    if (!editPanel) {
      setEditPanel(true);
    } else {
      setEditPanel(false);
    }
  }

  const handleResetPanel = () => {
    setResetPanel(true);
    setTimeout(() => {
      setResetPanel(false);
    }, 1000)
  }

  return (
    <div className="relative h-screen">
      <SubnavbarScreen>
      Dashboard
      </SubnavbarScreen>

      <div className="px-4 pt-4 bg-bg-color-login-form">
        <div className="flex items-center justify-between pb-4">
          <div className="flex items-center justify-between w-72 text-sm">
            <p>Edit layout</p>
            <ReactSwitch
              checked={editPanel}
              onChange={handleEditPanels}
              onColor="#86d3ff"
              onHandleColor="#2693e6"
              handleDiameter={20}
              uncheckedIcon={false}
              checkedIcon={false}
              boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
              activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
              height={16}
              width={40}
            />
            <p>
              Plc <span>Conectado</span>
            </p>
          </div>

          <div className="flex items-center justify-between w-52">
            <button className={`flex items-center justify-between p-2 ${editPanel ? 'bg-red-500' : 'bg-text-color-secundary'} rounded-lg ${editPanel ? 'text-white' : 'text-bg-color-placeholder-login'} `}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
              Guardar
            </button>
            <button disabled={!editPanel} onClick={handleResetPanel} className={`p-2 ${editPanel ? 'bg-green-500' : 'bg-text-color-secundary'} rounded-lg ${editPanel ? 'text-white' : 'text-bg-color-placeholder-login'} `}>Restablecer</button>
          </div>
        </div>
        <hr />
      </div>

      {/* Paneles */}
      <div
        className="relative h-[calc(100vh-150px)] overflow-hidden"
        id="dashboard-container"
      >
        {/* Componente que contienen los paneles */}
        <PanelDashboardScreen editPanel={editPanel} resetPanel={resetPanel} />
      </div>
    </div>
  );
};

export default DashboardScreen;
