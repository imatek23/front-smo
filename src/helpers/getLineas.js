export const GetLineas = async() => {

    const url = 'http://10.5.211.101:8000/data/lineas/get-all';
    const resp = await fetch(url);
    const {data} = await resp.json();

    return data;
}