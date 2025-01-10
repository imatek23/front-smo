

export const PostLoginDashboard = async () => {
    try {
        const url = 'http://10.5.211.101:8001/apinext/token';
        const resp = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
                grant_type: 'password',
                username: 'admin2',
                password: 'Nj0rdiK2320'
            })
        })

        const data = await resp.json();
        return data;
    } catch (error) {

    }
}