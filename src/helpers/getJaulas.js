

export const GetJaulas = async() =>{
    const url = 'http://10.5.211.253:8000/data/jaulas/get-all';
    const resp = await fetch(url);
    const {data} = await resp.json();
    return {data};
}