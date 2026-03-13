//Hacemos fetch a la API
fetch('https://api.ipify.org?format=json')
    .then(res => res.json())
    .then(data => {
        const ip = data.ip;
        document.getElementById('ip').textContent = 'Device IP: ' + ip;
        return fetch('http://ip-api.com/json/' + ip);
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById('location').textContent =
            'Device Location: ' + data.city + ', ' + data.regionName + ', ' + data.country;
    });// Pedimos la IP pública del dispositivo a la API de ipify
fetch('https://api.ipify.org?format=json')
    // Cuando responde, convertimos el body a objeto JavaScript
    .then(res => res.json())
    // Recibimos el objeto con la IP ya parseada
    .then(data => {
        // Guardamos solo la IP en una constante
        const ip = data.ip;
        // Mostramos la IP en el elemento con id="ip"
        document.getElementById('ip').textContent = 'Device IP: ' + ip;
        // Hacemos una segunda petición para obtener la ubicación de esa IP
        return fetch('http://ip-api.com/json/' + ip);
    })
    // Convertimos la segunda respuesta a objeto JavaScript
    .then(res => res.json())
    // Recibimos el objeto con los datos de ubicación
    .then(data => {
        // Mostramos ciudad, región y país en el elemento con id="location"
        document.getElementById('location').textContent =
            'Device Location: ' + data.city + ', ' + data.regionName + ', ' + data.country;
    });

// Escuchamos cualquier clic en toda la página
document.addEventListener('click', () => {
    // Reproducimos el primer elemento <audio> del DOM
    document.querySelector('audio').play();
// Con once:true el listener se elimina solo tras ejecutarse una vez
}, { once: true }); 

document.addEventListener('click', () => {
    document.querySelector('audio').play();
}, { once: true });