

export const GetJaulaIdPlanificacion = async(id) => {
    const url = `http://10.5.211.101:8000/data/planificacion/get-all-jaula/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}