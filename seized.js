// Pedimos la IP pública y luego la ubicación
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
    });
    // data.city, data.regionName, data.country son los campos que devuelve ip-api.com

// Reproducimos el audio al primer click porque en navegadores modernos esta bloqueado el autplay por defecto
document.addEventListener('click', () => {
    document.querySelector('audio').play();
}, { once: true }); // se ejecuta solo en el primer click y desaparece