export const GetRoles = async (token) => {
    const url = 'http://10.5.211.101:8000/permissions/roles';
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    const data = await resp.json();


    return data;
}