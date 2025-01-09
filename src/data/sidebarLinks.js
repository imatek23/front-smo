export const sidebarMenu = [
    {
        label: "Menú",
        items: [
            {
                label: "Control",
                icon: "ri-dashboard-line", // Puedes usar iconos si los necesitas
                children: [
                    { label: "Dashboard", path: "/dashboard" },
                ],
            },
            {
                label: "Operación",
                icon: "ri-tools-line",
                children: [
                    { label: "Temperatura", path: "/operacion/temperatura" },
                    { label: "Pruebas Manuales", path: "/operacion/pruebas-manuales" },
                    { label: "Calibración", path: "/operacion/calibracion" },
                    {
                        label: "Configuraciones de Calibración",
                        path: "/operacion/configuraciones-calibracion",
                    },
                    { label: "Abastecimiento de Silos", path: "/operacion/abastecimiento-silos" },
                    { label: "Jaula Complementos", path: "/operacion/jaula-complementos" },
                ],
            },
            {
                label: "Reporte",
                icon: "ri-file-list-line",
                children: [
                    { label: "Alimentación", path: "/reporte/alimentacion" },
                ],
            },
        ],
    },
    {
        label: "Configuración",
        items: [
            {
                label: "Configuración",
                icon: "ri-settings-2-line",
                children: [
                    { label: "Lines / Lineas", path: "/configuracion/lineas" },
                    { label: "Food / Alimento", path: "/configuracion/alimento" },
                    { label: "Siles / Silos", path: "/configuracion/silos" },
                    { label: "Sensors / Sensores", path: "/configuracion/sensores" },
                    { label: "Blowers", path: "/configuracion/blowers" },
                    { label: "Selectoras", path: "/configuracion/selectoras" },
                    { label: "Esclusas", path: "/configuracion/esclusas" },
                    { label: "Tornillos", path: "/configuracion/tornillos" },
                    { label: "Tolvas", path: "/configuracion/tolvas" },
                    { label: "Jaulas", path: "/configuracion/jaulas" },
                    {label: "Modelo de Crecimiento", path: "/configuracion/modelo-crecimiento",},
                    { label: "Usuarios", path: "/configuracion/usuarios" },
                ],
            },
        ],
    },
    {
        label: "Lineas",
        items: [
            {
                label: "Linea Control",
                icon: "ri-line-chart-line",
                path: "/lineas/control",
            },
        ],
    },
    {
        label: "Planificación",
        items: [
            {
                label: "Planificación",
                icon: "ri-calendar-line",
                children: [
                    {label: 'Planificación', path: '/planificacion/planificacion'}
                ]
            },
        ],
    },
    {
        label: "Blufarming",
        items: [],
    },
];
