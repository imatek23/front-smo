export const CreateUsers = async (username, email, fullName, role, password, setIsLoading) => {
    try {

        setIsLoading(true);
        const token = window.localStorage.getItem('authToken');

        const url = `http://10.5.211.101:8000/user/?username=${username}&email=${email}&full_name=${fullName}&disabled=false&role=${role}&password=${password}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({
                username,
                email,
                full_name: fullName,
                disabled: false,
                role,
                password,
            }),
        });

        if (!response.ok) {
            throw new Error('Error al crear el usuario');
        }

        const data = await response.json();
        setIsLoading(false);
        return data;
    } catch (error) {
        console.error('Error en CreateUsers:', error);
        throw error;
    }
};