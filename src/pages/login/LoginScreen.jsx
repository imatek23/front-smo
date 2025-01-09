import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../slices/auth/login/thunk';
import { loginApiNextSuccess } from '../../slices/auth/login/reducer';

const LoginScreen = () => {
    const [passwordShow, setPasswordShow] = useState(false); // Mostrar/Ocultar contraseña
    const [loading, setLoading] = useState(false); // Estado de carga
    const [error, setError] = useState(''); // Estado de error


    const dispatch = useDispatch();
    const navigate = useNavigate();



    // Validación de formulario con Formik y Yup
    const validation = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Debe ingresar un correo electrónico válido.')
                .required('Ingresa un correo electrónico.'),
            password: Yup.string().required('Ingresa una contraseña.'),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            setError('');
            try {
                await dispatch(loginUser(values, navigate));
            } catch (err) {
                setError(err.message || 'Error desconocido');
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <div className="relative min-h-screen bg-color-login-form flex items-center justify-center px-4">
            {/* Formulario flotante sobre el header */}
            <div className="bg-gray-800 text-gray-300 p-6 rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-md lg:max-w-lg">
                {/* Título */}
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-text-color-title-login">
                        Bienvenido
                    </h2>
                    <p className="text-sm sm:text-base">
                        Inicia sesión para acceder a imFeeder.
                    </p>
                </div>

                {/* Mensaje de Error */}
                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                {/* Formulario */}
                <form onSubmit={validation.handleSubmit}>
                    {/* Correo Electrónico */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium"
                        >
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Ingresa tu correo electrónico"
                            className="w-full mt-2 px-4 py-2 rounded-lg bg-bg-color-placeholder-login border border-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            value={validation.values.email}
                        />
                        {validation.touched.email && validation.errors.email && (
                            <p className="text-red-500 text-sm mt-1">
                                {validation.errors.email}
                            </p>
                        )}
                    </div>

                    {/* Contraseña */}
                    <div className="mb-4">
                        <div className="flex justify-between items-center">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium"
                            >
                                Contraseña
                            </label>
                            <a
                                href="#"
                                className="text-blue-400 text-sm hover:underline"
                            >
                                ¿Olvidaste tu contraseña?
                            </a>
                        </div>
                        <div className="relative mt-2">
                            <input
                                type={passwordShow ? 'text' : 'password'}
                                id="password"
                                name="password"
                                placeholder="Ingresa tu contraseña"
                                className="w-full px-4 py-2 rounded-lg bg-bg-color-placeholder-login border border-gray-700 text-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                onChange={validation.handleChange}
                                onBlur={validation.handleBlur}
                                value={validation.values.password}
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-3 text-gray-500"
                                onClick={() => setPasswordShow(!passwordShow)}
                            >
                                {passwordShow ? (
                                    <i className="ri-eye-off-fill"></i>
                                ) : (
                                    <i className="ri-eye-fill"></i>
                                )}
                            </button>
                        </div>
                        {validation.touched.password && validation.errors.password && (
                            <p className="text-red-500 text-sm mt-1">
                                {validation.errors.password}
                            </p>
                        )}
                    </div>

                    {/* Botón de Enviar */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-2 text-white font-bold rounded-lg transition ${loading
                                    ? 'bg-gray-600 cursor-not-allowed'
                                    : 'bg-bg-color-btn-login focus:ring-2 focus:ring-blue-400'
                                }`}
                        >
                            {loading ? 'Cargando...' : 'Iniciar Sesión'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginScreen;
