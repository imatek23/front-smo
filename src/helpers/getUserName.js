export const getUserName = async (token) => {

    const url = 'http://10.5.211.253:8000/users/me';
    try {
        const resp = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": 'application/json',
                Authorization: `Bearer ${token}`
            }
        });


        if(!resp.ok) throw new Error('Error al obtener los datos de usuario');

        const data = await resp.json();
        return data;

    } catch (error) {
        console.log(error);
        return null;
    }


}