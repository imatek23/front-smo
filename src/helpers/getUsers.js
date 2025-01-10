

export const GetUsers = async (token, setIsLoading) => {

    setIsLoading(true);
    const url = 'http://10.5.211.101:8000/user/';
    const resp = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    const data = await resp.json();
    setIsLoading(false);
    return data;
}