import React from 'react'
import SubnavbarScreen from '../subnavbar/SubnavbarScreen'
import { useState } from 'react';
import AlimentoTabla from './AlimentoTabla';
import AlimentoModalScreen from './modal/AlimentoModalScreen';

const AlimentoScreen = () => {
  const [alimentosTotales, setAlimentoTotales] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => setOpenModal(prev => !prev);

  return (
    <div>
      <SubnavbarScreen>Food / Alimento</SubnavbarScreen>

      <div className='p-5'>

        <div className='flex items-center justify-between'>
          <p>Total de alimentos en el sistema: <span className='text-green-500'>{alimentosTotales}</span></p>

          <button onClick={handleModal} className='flex items-center justify-between bg-green-500 hover:text-white px-4 py-2 rounded-md text-text-color-secundary transition-all duration-300'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-square-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 12h6" /><path d="M12 9v6" /><path d="M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z" /></svg>
            <span>Agregar Alimento</span>
          </button>
        </div>

        <AlimentoTabla />

      </div>

      {
        openModal && <AlimentoModalScreen setOpenModal={setOpenModal} />
      }

    </div>
  )
}

export default AlimentoScreen   