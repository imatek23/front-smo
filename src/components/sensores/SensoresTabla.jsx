import React from 'react'

const SensoresTabla = () => {
    return (
        <table className="table-auto border-collapse border-b border-gray-300 w-full text-sm mt-10">
            <thead>
                <tr className="bg-bg-color-placeholder-login">
                    <th className=" border-gray-300 px-4 py-2">#</th>
                    <th className=" border-gray-300 px-4 py-2">Tipo Sensor</th>
                    <th className=" border-gray-300 px-4 py-2">Unidad</th>
                    <th className=" border-gray-300 px-4 py-2">Estado</th>
                    <th className=" border-gray-300 px-4 py-2">Min.</th>
                    <th className=" border-gray-300 px-4 py-2">Max.</th>
                    <th className=" border-gray-300 px-4 py-2">Acciones</th>
                </tr>
            </thead>
            <tbody>
                {/* {lineas.map((linea, index) => (
            <tr key={linea.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                <td className="border border-gray-300 px-4 py-2">{linea.name}</td>
                <td className="border border-gray-300 px-4 py-2">{linea.code}</td>
                <td className="border border-gray-300 px-4 py-2">
                    <span
                        className="inline-block w-4 h-4 rounded-full"
                        style={{ backgroundColor: linea.color }}
                    ></span>
                </td>
                <td className="border border-gray-300 px-4 py-2">
                    <button
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600"
                        onClick={() => onEdit(linea)}
                    >
                        Editar
                    </button>
                    <button
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                        onClick={() => onDelete(linea)}
                    >
                        Eliminar
                    </button>
                </td>
            </tr>
        ))} */}
            </tbody>
        </table>
    )
}

export default SensoresTabla    