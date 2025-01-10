import React, { useState } from 'react';
import { RolesUsuarios } from '../../../data/rolesUsuarios';
import { CreateUsers } from '../../../helpers/createUser';


const UsuariosModalScreen = ({ setOpenModal, reload,  setReload, setIsLoading }) => {
  const [activeTab, setActiveTab] = useState('informacion');
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    fullName: '',
    role: '',
    password: '',
  });

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await CreateUsers(
        formData.username,
        formData.email,
        formData.fullName,
        formData.role,
        formData.password,
        setIsLoading
      );
      alert('Usuario creado exitosamente');
      setOpenModal(false);
      setReload(!reload)
    } catch (error) {
      alert('Error al crear el usuario');
      console.log(error);
    }
  };

  return (
    <div className='fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
      <div className='bg-bg-color-auth rounded-lg p-5 shadow-lg w-3/4 md:w-1/2 relative'>
        {/* Botón de cerrar */}
        <button onClick={handleCloseModal} className='absolute top-3 right-3 hover:bg-gray-500 hover:text-black rounded-md p-1 transition-all duration-200'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        <h2 className='text-xl font-bold mb-4'>Agregar Usuario</h2>

        {/* Tabs */}
        <div className='flex border-b border-gray-300 mb-4'>
          <button
            className={`px-4 py-2 ${activeTab === 'informacion' ? 'text-white border-b-2 border-green-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('informacion')}
          >
            Información
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'permisos' ? 'text-white border-b-2 border-green-500' : 'text-gray-400'}`}
            onClick={() => setActiveTab('permisos')}
          >
            Permisos
          </button>
        </div>

        {/* Contenido del Tab */}
        <form onSubmit={handleSubmit} >
          {activeTab === 'informacion' && (
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

              <div>
                <label className='block text-sm font-bold text-gray-300 mb-1'>Nombre usuario</label>
                <input type='text' name='username' value={formData.username} onChange={handleChange} placeholder='Ingrese el Nombre de usuario' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2 w-full' />
              </div>
              <div>
                <label className='block text-sm font-bold text-gray-300 mb-1'>E-Mail</label>
                <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Ingrese el email' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2 w-full' />
              </div>
              <div>
                <label className='block text-sm font-bold text-gray-300 mb-1'>Nombre completo</label>
                <input type='text' name='fullName' value={formData.fullName} onChange={handleChange} placeholder='Ingrese el Nombre completo' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2 w-full' />
              </div>
              <div>
                <label className='block text-sm font-bold text-gray-300 mb-1'>Contraseña</label>
                <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Ingrese la contraseña' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2 w-full' />
              </div>
            </div>

          )}

          {activeTab === 'permisos' && (

            <div>
              <label className='block text-sm font-bold text-gray-300 mb-1'>Perfil de Usuario</label>
              <select name='role' value={formData.role} onChange={handleChange} className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2 w-full'>
                <option value=''>Seleccione una opción</option>
                {RolesUsuarios.map(rol => (
                  <option key={rol.id} value={rol.id}>{rol.name}</option>
                ))}
              </select>
            </div>
          )}

          <div className='flex justify-end mt-4'>
            <button
              type='button'
              onClick={handleCloseModal}
              className='bg-gray-500 text-white py-2 px-4 rounded-lg mr-4 hover:bg-gray-600'
            >
              Cancelar
            </button>
            <button
              className='bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700'
            >
              Agregar Usuario
            </button>
          </div>
        </form>
      </div>
    </div >
  );
};

export default UsuariosModalScreen;
