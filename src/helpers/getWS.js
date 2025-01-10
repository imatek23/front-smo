


export const GetWS = async (onDataReceived) => {

    const url = 'ws://10.5.211.101:8000/ws/apinext/dashboard';
    const ws = new WebSocket(url);

    //Escuchar eventos
    ws.onopen = () => {
        console.log('WS Conectado');
    }

    //escuchar los mensajes
    ws.onmessage = (e) => {
        const data = JSON.parse(e.data);
        onDataReceived(data);
    }

    ws.onclose = () => {
        console.log('WS Desconectado');
    };

    return ws;
}