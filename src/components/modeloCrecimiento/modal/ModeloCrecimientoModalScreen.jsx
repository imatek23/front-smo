import React from 'react'

const ModeloCrecimientoModalScreen = ({setOpenModal}) => {
    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        setOpenModal(false);
    }

    return (
        <div className='w-3/4 mx-auto bg-bg-color-auth rounded-lg p-10'>
            <button onClick={handleCloseModal} className='mb-10'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </button>

            <div>
                <h2 className='text-2xl pb-4'>Modelo de Crecimiento</h2>
                <hr />
            </div>

            <form onSubmit={handleSubmit} className='w-full mx-auto my-10'>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div>
                        <label
                            className="block text-sm font-bold text-gray-300 mb-1"
                        >
                            Nombre de Modelo
                        </label>
                        <input type="text" placeholder='Nombre de Modelo' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2 w-full' />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-bold text-gray-300 mb-1"
                        >
                            Tipo
                        </label>
                        <input type="text" placeholder='Tipo' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2 w-full' />
                    </div>

                    <fieldset className='col-span-1 md:col-span-2'>
                        <legend className='text-sm font-bold text-gray-300 mb-2'>Coeficientes c1 - a7</legend>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                            {['c1', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7'].map((coef) => (
                                <div key={coef}>
                                    <label
                                        className="block text-sm font-bold text-gray-300 mb-1"
                                    >
                                        {coef}
                                    </label>
                                    <input type="text" placeholder={coef} className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2 w-full' />
                                </div>
                            ))}
                        </div>
                    </fieldset>

                    <fieldset className='col-span-1 md:col-span-2'>
                        <legend className='text-sm font-bold text-gray-300 mb-2'>Coeficientes c2 - b7</legend>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                            {['c2', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7'].map((coef) => (
                                <div key={coef}>
                                    <label
                                        className="block text-sm font-bold text-gray-300 mb-1"
                                    >
                                        {coef}
                                    </label>
                                    <input type="text" placeholder={coef} className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2 w-full' />
                                </div>
                            ))}
                        </div>
                    </fieldset>
                </div>

                <div className='mt-10 flex justify-center'>
                    <button className='flex items-center bg-bg-color-btn-login text-gray-300 hover:text-white transition-all duration-300 py-2 px-4 rounded-lg'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy mr-2"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
                        Guardar Modelo
                    </button>
                </div>
            </form>
        </div>

    )
}

export default ModeloCrecimientoModalScreen 