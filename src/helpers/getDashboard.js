

export const GetDashboard = async () => {
    const url = 'http://10.5.211.253:8001/apinext/dashboard';
    const token = window.localStorage.getItem('apiToken');

    try {
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });

        if (resp.status === 401) {
            throw new Error('No autorizado: el token es inválido o ha expirado.');
        }

        const data = resp.json();
        return data;

    } catch (error) {
        console.log(error);
    }

}