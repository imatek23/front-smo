import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutScreen = () => {

    const navigate = useNavigate();

    //Función para eliminar el token del usuario y cerrar sesión
    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/');
    }

    return (
        <div className='bg-bg-color-login-form'>
            <p className='text-center p-2 text-text-color-secundary'>¿Quieres cerrar sesión?</p>
            <button onClick={handleLogout} className="flex items-center justify-around p-2 rounded-md shadow-lg w-full hover:bg-bg-color-auth">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff0000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-logout"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" /><path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" /></svg>
                <span className="text-white">Logout</span>
            </button>
        </div>
    );
};

export default LogoutScreen;
