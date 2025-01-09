import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	user: {},
	apiUser: {},
	error: '', // for error message
	loading: false,
	isUserLogout: false,
	errorMsg: false, // for error
};

const loginSlice = createSlice({
	name: 'Login',
	initialState,
	reducers: {
		apiError(state, action) {
			const errorDetail =
				action.payload?.response?.data?.detail || 'Error desconocido';
			state.error = errorDetail; // Almacena el mensaje de error
			state.loading = false; // Detiene el estado de carga
			state.isUserLogout = false; // Asegura que el usuario no está desconectado
			state.errorMsg = true; // Marca que hay un error
		},				
		loginSuccess(state, action) {
			state.user = action.payload;
			state.loading = false;
			state.errorMsg = false;
		},
		loginApiNextSuccess(state, action){
			state.apiUser = action.payload;
			state.loading = false;
			state.errorMsg = false;
		},
		setLoading(state, action) {
			state.loading = action.payload;
		},
		logoutUserSuccess(state, action) {
			state.isUserLogout = true;
		},
		reset_login_flag(state) {
			state.error = null;
			state.loading = false;
			state.errorMsg = false;
		},
	},
});

export const {
	apiError,
	loginSuccess,
	loginApiNextSuccess,
	setLoading,
	logoutUserSuccess,
	reset_login_flag,
} = loginSlice.actions;

export default loginSlice.reducer;
