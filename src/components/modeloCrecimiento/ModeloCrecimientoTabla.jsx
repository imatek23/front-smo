import React from 'react'


const ModeloCrecimientoTabla = () => {
    return (
        <div className="overflow-auto">
        <table className="table-auto border-collapse border-b border-gray-300 w-full text-sm mt-10">
            <thead>
                <tr className="bg-bg-color-placeholder-login">
                    <th className="border-gray-300 px-4 py-2">#</th>
                    <th className="border-gray-300 px-4 py-2">Nombre</th>
                    <th className="border-gray-300 px-4 py-2">Tipo</th>
                    <th className="border-gray-300 px-4 py-2">c1</th>
                    <th className="border-gray-300 px-4 py-2">c2</th>
                    <th className="border-gray-300 px-4 py-2">a0</th>
                    <th className="border-gray-300 px-4 py-2">a1</th>
                    <th className="border-gray-300 px-4 py-2">a2</th>
                    <th className="border-gray-300 px-4 py-2">a3</th>
                    <th className="border-gray-300 px-4 py-2">a4</th>
                    <th className="border-gray-300 px-4 py-2">a5</th>
                    <th className="border-gray-300 px-4 py-2">a6</th>
                    <th className="border-gray-300 px-4 py-2">a7</th>
                    <th className="border-gray-300 px-4 py-2">b0</th>
                    <th className="border-gray-300 px-4 py-2">b1</th>
                    <th className="border-gray-300 px-4 py-2">b2</th>
                    <th className="border-gray-300 px-4 py-2">b3</th>
                    <th className="border-gray-300 px-4 py-2">b4</th>
                    <th className="border-gray-300 px-4 py-2">b5</th>
                    <th className="border-gray-300 px-4 py-2">b6</th>
                    <th className="border-gray-300 px-4 py-2">b7</th>
                    <th className="border-gray-300 px-4 py-2">Acciones</th>
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
    </div>
    
    )
}

export default ModeloCrecimientoTabla   