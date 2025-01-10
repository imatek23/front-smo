export const DeleteUser = async (userName, setIsLoading) => {
    const token = window.localStorage.getItem('authToken');

    setIsLoading(true);
    const url = `http://10.5.211.101:8000/user/${userName}/`;
    const resp = await fetch(url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })

    setIsLoading(false);

    return resp;
}