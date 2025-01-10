import React, { useEffect, useState } from 'react'
import { GetUsers } from '../../helpers/getUsers';
import { GetRoles } from '../../helpers/getRoles';
import { DeleteUser } from '../../helpers/deleteUser';
import SpinnerScreen from '../spinners/SpinnerScreen';

const UsuariosTabla = ({ reload, setReload, isLoading, setIsLoading }) => {

    const [listUsers, setListUsers] = useState([]);
    const [listRoles, setListRoles] = useState([]);




    const GetAllUsers = async (t, setIsLoading) => {
        const users = await GetUsers(t, setIsLoading);
        setListUsers(users);
    }


    const GetAllRoles = async (t) => {
        const role = await GetRoles(t);
        setListRoles(role);
    }


    const getRoleName = (roleId) => {
        const role = listRoles.find((r) => r._id === roleId);
        return role ? role.name : 'Sin asignar';
    };

    const handleDelete = async (userName) => {
        await DeleteUser(userName, setIsLoading);

        setReload(prev => !prev);
        console.log(userName);
    }

    useEffect(() => {
        const token = window.localStorage.getItem('authToken');
        GetAllUsers(token, setIsLoading);
        GetAllRoles(token);
        console.log(1)
    }, [reload])


    return (
        <div>
            {
                isLoading ? (
                    <div className='flex flex-col items-center justify-center'>
                        <SpinnerScreen />
                    </div>
                )
                    :
                    (
                        <table className="table-auto border-collapse border-b border-gray-300 w-full text-sm mt-10">
                            <thead>
                                <tr className="bg-bg-color-placeholder-login">
                                    <th className=" border-gray-300 px-4 py-2">#</th>
                                    <th className=" border-gray-300 px-4 py-2">Acciones</th>
                                    <th className=" border-gray-300 px-4 py-2">Nombre de Usuario</th>
                                    <th className=" border-gray-300 px-4 py-2">Nombre</th>
                                    <th className=" border-gray-300 px-4 py-2">Perfil</th>
                                    <th className=" border-gray-300 px-4 py-2">Desactivado</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listUsers.map((user, index) => (
                                    <tr
                                        key={index}
                                        className={`text-center ${index % 2 === 0 ? 'bg-bg-color-placeholder-login' : 'bg-bg-color-login-form'} hover:bg-gray-600`}
                                    >
                                        <td className="px-4 py-2 text-white">{index + 1}</td>
                                        <td className="px-4 py-2">
                                            <button
                                                className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
                                            >
                                                Editar
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user.username)}
                                                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                                            >
                                                Eliminar
                                            </button>
                                        </td>
                                        <td className="px-4 py-2 text-white">{user.username}</td>
                                        <td className="px-4 py-2 text-white">{user.full_name}</td>
                                        <td className="px-4 py-2 text-white">{getRoleName(user.role)}</td>
                                        <td className="px-4 py-2 text-white">{user.disabled ? 'Sí' : 'No'}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    )
            }
        </div>
    )
}

export default UsuariosTabla        