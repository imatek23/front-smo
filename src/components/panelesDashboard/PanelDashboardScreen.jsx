import React, { useEffect, useState } from "react";
import PanelLineasScreen from "./panelLineas/PanelLineasScreen";
import PanelJaulasScreen from "./panelJaulas/PanelJaulasScreen";


const PanelDashboardScreen = () => {
    return (
        <div >
            <PanelLineasScreen />
            <PanelJaulasScreen />
        </div>
    );
};

export default PanelDashboardScreen;
