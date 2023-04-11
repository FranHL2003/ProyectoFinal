//cargar mapa
let map = L.map('mapaMalaga').setView([37.1718,-3.5960], 14);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', 
{maxZoom: 19,attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);

//json y localizaciones 
let template = document.querySelector("template");
let interior = document.querySelector("#contenido");
let id = 0;

fetch("granada.json") 
 .then(response => response.json())
  .then(data => {
   data.forEach( function(element){
    let container = document.createElement("div");
    container.classList.add('localizacion')

    let position = template.content.cloneNode(true);
    position.querySelector("h4").innerText = element.properties.nombre;
    position.querySelector("p").innerText = element.properties.horario;
    position.querySelector("#direccion").innerText = element.properties.direccion;
    position.querySelector("#telefono").innerText = element.properties.telefono;
   
    let x = element.properties.x;
    let y = element.properties.y;
  
    let marker = L.marker([x, y]).addTo(map);
    let label = '<b>' + element.properties.nombre + '</b><br/>' + element.properties.direccion;
    
    marker.bindPopup(label);
    container.appendChild(position);
    interior.appendChild(container);
    id++
    });



   })

   //ventana modal