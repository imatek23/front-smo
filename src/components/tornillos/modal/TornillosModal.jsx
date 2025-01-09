import React from 'react'

const TornillosModal = ({setOpenModal}) => {
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
                <h2 className='text-2xl pb-4'>Agregar Tornillo</h2>
                <hr />
            </div>

            <form onSubmit={handleSubmit} className='w-3/4 mx-auto my-10'>

                <div className='flex items-center justify-between flex-wrap gap-y-10'>
                    <div>
                        <label
                            className="block text-sm font-bold text-gray-300 mb-1"
                        >
                            Nombre de Tornillo
                        </label>
                        <input type="text" placeholder='Nombre de Tornillo' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2' />
                    </div>
                    <div>
                        <label
                            className="block text-sm font-bold text-gray-300 mb-1"
                        >
                            Código de Tornillo
                        </label>
                        <input type="text" placeholder='Código de Tornillo' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2' />
                    </div>




                </div>

                <div className='mt-20 mx-auto flex items-center bg-bg-color-btn-login w-48 text-center py-2 px-4 rounded-lg text-gray-300 hover:text-white transition-all duration-300 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
                    <button className='mx-auto'>Guardar Esclusa</button>
                </div>


            </form>
        </div>
    )
}

export default TornillosModal   