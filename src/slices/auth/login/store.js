import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './reducer'; // Asegúrate de que este path sea correcto

const store = configureStore({
    reducer: {
        login: loginReducer,
    },
});

export default store;
