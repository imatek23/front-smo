import React, { useState } from 'react';
import { sensoresUnidad } from '../../../data/sensoresUnidad';
import { sensoresEstado } from '../../../data/sensoresEstado';

const SensoresModalScreen = ({ setOpenModal }) => {
    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(0);

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setOpenModal(false);
    };

    return (
        <div className='w-3/4 mx-auto bg-bg-color-auth rounded-lg p-10'>
            <button onClick={handleCloseModal} className='mb-10'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
            </button>

            <div>
                <h2 className='text-2xl pb-4'>Crear Sensor</h2>
                <hr />
            </div>

            <form onSubmit={handleSubmit} className='w-3/4 mx-auto my-10'>

                <div className='flex items-center justify-between flex-wrap gap-y-10'>
                    <div>
                        <label
                            className="block text-sm font-bold text-gray-300 mb-1"
                        >
                            Tipo de Sensor
                        </label>
                        <input type="text" placeholder='Tipo de Sensor' className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2' />
                    </div>

                    <div>
                        <label
                            className="block text-sm font-bold text-gray-300 mb-1"
                        >
                            Unidad
                        </label>
                        <select name="" id="" className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2'>
                            <option value="">--------------</option>
                            {
                                sensoresUnidad.map(s => (
                                    <option key={s.id} value={s.unidad}>{s.unidad}</option>
                                ))
                            }
                        </select>
                    </div>

                    <div>
                        <label
                            className="block text-sm font-bold text-gray-300 mb-1"
                        >
                            Mínimo
                        </label>
                        <div className='bg-bg-color-placeholder-login flex items-center justify-between w-32'>
                            <button type="button" onClick={() => setMinValue(prev => Math.max(prev - 1, 0))}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-square-arrow-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4l.094 .083l.092 .064l.098 .052l.11 .044l.112 .03l.126 .017l.075 .003l.117 -.007l.149 -.029l.105 -.035l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32l-.094 -.083a1 1 0 0 0 -1.32 .083l-2.293 2.292v-5.585l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>
                            </button>
                            <span>{minValue}</span>
                            <button type="button" onClick={() => setMinValue(prev => prev + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-square-arrow-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5l-.09 .004l-.058 .007l-.118 .025l-.105 .035l-.113 .054l-.111 .071a1.008 1.008 0 0 0 -.112 .097l-4 4l-.083 .094a1 1 0 0 0 .083 1.32l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292v5.585l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.104 -.074l-.098 -.052l-.11 -.044l-.112 -.03l-.126 -.017l-.075 -.003z" /></svg>
                            </button>
                        </div>
                    </div>

                    <div>
                        <label
                            className="block text-sm font-bold text-gray-300 mb-1"
                        >
                            Máximo
                        </label>
                        <div className='bg-bg-color-placeholder-login flex items-center justify-between w-32'>
                            <button type="button" onClick={() => setMaxValue(prev => Math.max(prev - 1, minValue))}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-square-arrow-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5a1 1 0 0 0 -1 1v5.585l-2.293 -2.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l4 4l.094 .083l.092 .064l.098 .052l.11 .044l.112 .03l.126 .017l.075 .003l.117 -.007l.149 -.029l.105 -.035l.113 -.054l.111 -.071a.939 .939 0 0 0 .112 -.097l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32l-.094 -.083a1 1 0 0 0 -1.32 .083l-2.293 2.292v-5.585l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>
                            </button>
                            <span>{maxValue}</span>
                            <button type="button" onClick={() => setMaxValue(prev => prev + 1)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="icon icon-tabler icons-tabler-filled icon-tabler-square-arrow-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-14a3 3 0 0 1 3 -3zm-7 5l-.09 .004l-.058 .007l-.118 .025l-.105 .035l-.113 .054l-.111 .071a1.008 1.008 0 0 0 -.112 .097l-4 4l-.083 .094a1 1 0 0 0 .083 1.32l.094 .083a1 1 0 0 0 1.32 -.083l2.293 -2.292v5.585l.007 .117a1 1 0 0 0 1.993 -.117v-5.585l2.293 2.292l.094 .083a1 1 0 0 0 1.32 -1.497l-4 -4l-.082 -.073l-.104 -.074l-.098 -.052l-.11 -.044l-.112 -.03l-.126 -.017l-.075 -.003z" /></svg>
                            </button>
                        </div>
                    </div>

                    <div>
                        <label
                            className="block text-sm font-bold text-gray-300 mb-1"
                        >
                            Estado
                        </label>
                        <select name="" id="" className='rounded-md bg-bg-color-placeholder-login text-white px-4 py-2'>
                            <option value="">--------------</option>
                            {
                                sensoresEstado.map(s => (
                                    <option key={s.id} value={s.estado}>{s.estado}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <div className='mt-20 mx-auto flex items-center bg-bg-color-btn-login w-48 text-center py-2 px-4 rounded-lg text-gray-300 hover:text-white transition-all duration-300 cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
                    <button className='mx-auto'>Guardar Sensor</button>
                </div>
            </form>
        </div>
    );
};

export default SensoresModalScreen;
