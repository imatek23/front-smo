export const postJwtLogin = async ({ username, password }) => {
    try {
        const response = await fetch('http://10.5.211.101:8000/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'password',
                username: username,
                password: password,
            }),
        });

        if (!response.ok) {
            // Captura el error y lanza un mensaje personalizado si falla la solicitud
            const errorData = await response.json();
            throw new Error(errorData.detail || 'Error en el servidor');
        }

        // Retorna la respuesta JSON (debería incluir el access_token)
        return await response.json();
    } catch (error) {
        console.error('Error en postJwtLogin:', error.message);
        throw error;
    }
};
