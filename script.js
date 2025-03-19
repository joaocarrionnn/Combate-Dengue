// Inicializa o mapa no ponto central desejado (latitude, longitude) e define o nível de zoom
var map = L.map('map').setView([-23.550520, -46.633308], 12);  // Exemplo: São Paulo, Brasil

// Adiciona a camada de tiles (imagens) do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adiciona um marcador (marker) no mapa com uma popup de informação
var marker = L.marker([-23.550520, -46.633308]).addTo(map);  // Exemplo: São Paulo, Brasil
marker.bindPopup("<b>São Paulo</b><br>Local de exemplo.").openPopup();

// Exemplo de adicionar um círculo ao mapa
var circle = L.circle([-23.550520, -46.633308], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);
circle.bindPopup("Área de risco para Dengue");


