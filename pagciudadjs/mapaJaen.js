

var map = L.map('mapa').setView([37.7716, -3.7870], 15);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    minZoom: 14,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var lista = []
var elementoSeleccionado = 0;



function cargarModal(){
    let elemento = lista[0]
    let nombre = document.getElementById('nombreElemento')
    let direccion = document.getElementById('direccionElemento')
    let horario = document.getElementById('horarioElemento')
    let telefono = document.getElementById('telefonoElemento')
    let categoria = document.getElementById('categoriaElemento')
    direccion.classList.add('mb-2')
    horario.classList.add('mb-2')
    telefono.classList.add('mb-2')
    categoria.classList.add('mb-2')
    nombre.textContent = elemento.nombre
    direccion.textContent = elemento.direccion
    horario.textContent = elemento.horario
    telefono.textContent = elemento.telefono
    categoria.textContent=elemento.categoria
}


fetch("jaen.json")
    .then(res => res.json())
    .then(data => {
        const tbody = document.querySelector("#listaElementos");
        const template = document.querySelector('#elementoLista');
        for (let i = 0; i < data.length; i++) {
            // Clone the new row and insert it into the table
            const clone = template.content.cloneNode(true);
            let nombre = clone.getElementById('nombre')
            let horario = clone.getElementById('horario')
            let categoria=clone.getElementById('categoria')
            let direccion = clone.getElementById('direccion')
            let telefono = clone.getElementById('telefono')
            let ver = clone.getElementById('ver')
            nombre.textContent = data[i].nombre;
            horario.textContent = data[i].horario;
            direccion.textContent = data[i].direccion;
            telefono.textContent = data[i].telefono;
            categoria.textcontent=data[i].categoria
            ver.textcontent=data[i].ver
            if (telefono.textContent != "") {
                telefono.classList.add('tarjeta')
            }
            tbody.appendChild(clone);

            let elemento = {
                nombre: data[i].nombre,
                horario: data[i].horario,
                direccion: data[i].direccion,
                telefono: data[i].telefono,
                categoria: data[i].categoria,
                ver: data[i].ver,
            }
            lista.push(elemento)
            
            template.addEventListener('click', 
                cargarModal()
            )

            var marcador = L.marker([data[i].x, data[i].y]).addTo(map);
            marcador.bindPopup(`${data[i].nombre}`);

        }
    })


    





