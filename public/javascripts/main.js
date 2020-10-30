const map = L.map('map-template').setView([21.081271, -100.966366], 10);//cambia por tus coordenadas

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
//API es openstreetmap es gratis de llave

const marker = L.marker([21.081271, -100.966366]).addTo(map);