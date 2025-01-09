import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import LoginScreen from '../pages/login/LoginScreen'
import NonAuthLayout from '../layout/nonAuthLayout/NonAuthLayout'
import Layout from '../layout/Layout'
import DashboardScreen from '../components/dashboard/DashboardScreen'
import TemperaturaScreen from '../components/temperatura/TemperaturaScreen'
import PruebasManualesScreen from '../components/pruebasManuales/PruebasManualesScreen'
import CalibracionScreen from '../components/calibracion/CalibracionScreen'
import ConfiguracionesCalibracionScreen from '../components/configuracionesCalibracion/ConfiguracionesCalibracionScreen'
import AbastecimientoSilosScreen from '../components/abastecimientoSilos/AbastecimientoSilosScreen'
import JaulaComplementosScreen from '../components/jaulaComplementos/JaulaComplementosScreen'
import AlimentacionScreen from '../components/alimentacion/AlimentacionScreen'
import SelectorasScreen from '../components/selectoras/SelectorasScreen'
import EsclusasScreen from '../components/esclusas/EsclusasScreen'
import TornillosScreen from '../components/tornillos/TornillosScreen'
import TolvasScreen from '../components/tolvas/TolvasScreen'
import JaulasScreen from '../components/jaulas/JaulasScreen'
import ModeloCrecimientoScreen from '../components/modeloCrecimiento/ModeloCrecimientoScreen'
import UsuariosScreen from '../components/usuarios/UsuariosScreen'
import PlanificacionScreen from '../components/planificacion/PlanificacionScreen'
import LineasScreen from '../components/lineas/LineasScreen'
import SilosScreen from '../components/silos/SilosScreen'
import SensoresScreen from '../components/sensores/SensoresScreen'
import BlowersScreen from '../components/blowers/BlowersScreen'
import AlimentoScreen from '../components/alimento/AlimentoScreen'


// Componente para proteger rutas
const ProtectedRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('authToken'); // Verifica si el usuario está autenticado
    return isAuthenticated ? children : <Navigate to="/" />;
};

// Componente para proteger rutas no autenticadas
const NonAuthRoute = ({ children }) => {
    const isAuthenticated = !!localStorage.getItem('authToken'); // Verifica si el usuario está autenticado
    return isAuthenticated ? <Navigate to="/dashboard" /> : children;
};

const RouterApp = () => {
    return (
        <div>
            <Routes>
                {/* Rutas usuarios no autenticados */}
                <Route
                    path="/"
                    element={
                        <NonAuthRoute>
                            <NonAuthLayout>
                                <LoginScreen />
                            </NonAuthLayout>
                        </NonAuthRoute>
                    }
                />

                {/* Rutas de usuarios autenticados */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <DashboardScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/operacion/temperatura"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <TemperaturaScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/operacion/pruebas-manuales"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <PruebasManualesScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/operacion/calibracion"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <CalibracionScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/operacion/configuraciones-calibracion"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <ConfiguracionesCalibracionScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/operacion/abastecimiento-silos"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <AbastecimientoSilosScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/operacion/jaula-complementos"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <JaulaComplementosScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/reporte/alimentacion"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <AlimentacionScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configuracion/lineas"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <LineasScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configuracion/alimento"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <AlimentoScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configuracion/silos"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <SilosScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configuracion/sensores"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <SensoresScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configuracion/blowers"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <BlowersScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configuracion/selectoras"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <SelectorasScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configuracion/esclusas"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <EsclusasScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configuracion/tornillos"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <TornillosScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configuracion/tolvas"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <TolvasScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configuracion/jaulas"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <JaulasScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configuracion/modelo-crecimiento"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <ModeloCrecimientoScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/configuracion/usuarios"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <UsuariosScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/planificacion/planificacion"
                    element={
                        <ProtectedRoute>
                            <Layout>
                                <PlanificacionScreen />
                            </Layout>
                        </ProtectedRoute>
                    }
                />

                {/* Ruta por defecto o 404 */}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>



        </div>
    )
}

export default RouterApp    