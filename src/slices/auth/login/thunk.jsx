//Include Both Helper File with needed methods
import { postJwtLogin } from '../../../helpers/api_helpers';
import { PostLoginDashboard } from '../../../helpers/apiDashboard';
import reducer, {
    loginSuccess,
    setLoading,
    logoutUserSuccess,
    apiError,
    reset_login_flag,
    loginApiNextSuccess,
} from './reducer';


export const loginUser = (user, history) => async (dispatch) => {
    try {
        dispatch(setLoading(true));

        // Login principal
        const mainResp = await postJwtLogin({
            username: user.email,
            password: user.password,
        });

        // Login en la API secundaria (apinext)
        const apiResp = await PostLoginDashboard();

        if (mainResp && mainResp.access_token && apiResp?.access_token) {
            // Almacenar ambos tokens
            window.localStorage.setItem('authToken', mainResp.access_token); // Token principal
            window.localStorage.setItem('apiToken', apiResp.access_token); // Token de API secundaria

            // Despachar acciones de éxito
            dispatch(loginSuccess(mainResp));
            dispatch(loginApiNextSuccess(apiResp));

            // Redirigir al usuario al dashboard
            history('/dashboard');
        } else {
            throw new Error('Error en la autenticación');
        }
    } catch (error) {
        // Manejo de errores
        dispatch(apiError(error.message || 'Error desconocido'));
        console.error('Error en loginUser:', error);
    } finally {
        dispatch(setLoading(false));
    }
};



export const logoutUser = () => async dispatch => {
    try {
        localStorage.removeItem('authUser');

        dispatch(logoutUserSuccess(true));
    } catch (error) {
        dispatch(apiError(error));
    }
};

export const redirectToLogout = () => async dispatch => {
    globalRouter.navigate('/logout');
};



export const resetLoginFlag = () => async dispatch => {
    try {
        const response = dispatch(reset_login_flag());
        return response;
    } catch (error) {
        dispatch(apiError(error));
    }
};
