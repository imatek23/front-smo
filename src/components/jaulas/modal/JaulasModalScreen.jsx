import React from 'react'
import { PosicionesSelectora } from '../../../data/posicionesSelectora';

const JaulasModalScreen = ({setOpenModal}) => {
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
        <h2 className='text-2xl pb-4'>Agregar Jaula</h2>
        <hr />
      </div>

      <form onSubmit={handleSubmit} className='w-3/4 mx-auto my-10'>

        <div className='flex items-center justify-between flex-wrap gap-y-10'>
          <div>
            <label
              className="block text-sm font-bold text-gray-300 mb-1"
            >
              Nombre de Jaula
            </label>
            <input type="text" placeholder='Nombre de Jaula' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2' />
          </div>
          <div>
            <label
              className="block text-sm font-bold text-gray-300 mb-1"
            >
              Código PLC
            </label>
            <input type="text" placeholder='Código PLC' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2' />
          </div>
          <div>
            <label
              className="block text-sm font-bold text-gray-300 mb-1"
            >
              Porcentaje Blower (0-100)%
            </label>
            <input type="text" placeholder='Porcentaje Blower' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2' />
          </div>
          <div>
            <label
              className="block text-sm font-bold text-gray-300 mb-1"
            >
              Jaula Virtual
            </label>
            <select name="" id="" className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2'>
              <option value="">--------------</option>
              <option value="si">Si</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className='mr-2'>
            <label
              className="block text-sm font-bold text-gray-300 mb-1"
            >
              Tiempo de Soplado (s)
            </label>
            <input type="text" placeholder='Tiempo de Soplado' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2' />
          </div>

          <div>
            <label
              className="block text-sm font-bold text-gray-300 mb-1"
            >
              Número de posición de Selectora
            </label>
            <select name="" id="" className='rounded-md bg-bg-color-placeholder-login w-full text-white px-4 py-2'>
              <option value="">--------------</option>
              {
                PosicionesSelectora.map(pos => (
                  <option value={pos.posicion}>{pos.posicion}</option>
                ))
              }
            </select>
          </div>

          <div>
            <label
              className="block text-sm font-bold text-gray-300 mb-1"
            >
              Ancho de Jaula(m)
            </label>
            <input type="text" placeholder='Ancho de jaula' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2' />
          </div>
          <div>
            <label
              className="block text-sm font-bold text-gray-300 mb-1"
            >
              Largo de Jaula(m)
            </label>
            <input type="text" placeholder='Largo de jaula' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2' />
          </div>
          <div>
            <label
              className="block text-sm font-bold text-gray-300 mb-1"
            >
              Profundidad de Jaula (m)
            </label>
            <input type="text" placeholder='Largo de jaula' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2' />
          </div>

          <div>
            <label
              className="block text-sm font-bold text-gray-300 mb-1"
            >
              Forma de Jaula
            </label>
            <select name="" id="" className='rounded-md bg-bg-color-placeholder-login w-full text-white px-4 py-2'>
              <option value="">--------------</option>
              <option value="circular">Circular</option>
              <option value="cuadrada">Cuadrada</option>
            </select>
          </div>




        </div>

        <div className='mt-20 mx-auto flex items-center bg-bg-color-btn-login w-48 text-center py-2 px-4 rounded-lg text-gray-300 hover:text-white transition-all duration-300 cursor-pointer'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
          <button className='mx-auto'>Guardar Jaula</button>
        </div>


      </form>
    </div>
  )
}

export default JaulasModalScreen 