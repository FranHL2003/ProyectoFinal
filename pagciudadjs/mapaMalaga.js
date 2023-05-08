


var map = L.map('mapa').setView([36.7181, -4.4133], 15);
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
    direccion.classList.add('mb-2')
    horario.classList.add('mb-2')
    telefono.classList.add('mb-2')
    nombre.textContent = elemento.nombre
    direccion.textContent = elemento.direccion
    horario.textContent = elemento.horario
    telefono.textContent = elemento.telefono
}




fetch("http://localhost/Proyecto%20fin%20de%20grado/test.php?province=malaga")
    .then(res => res.json())
    .then(data => {
        const tbody = document.querySelector("#listaElementos");
        const template = document.querySelector('#elementoLista');
        for (let i = 0; i < data.length; i++) {
            // Clone the new row and insert it into the table
            const clone = template.content.cloneNode(true);
            let nombre = clone.getElementById('nombre')
            let horario = clone.getElementById('horario')
            let categoria = clone.getElementById('categoria')
            let direccion = clone.getElementById('direccion')
            let telefono = clone.getElementById('telefono')
            nombre.textContent = data[i].nombre;
            horario.textContent = data[i].horario;
            categoria.textContent = data[i].categoria;
            direccion.textContent = data[i].direccion;
            telefono.textContent = data[i].telefono;
            if (telefono.textContent != "") {
                telefono.classList.add('tarjeta')
            }
            tbody.appendChild(clone);

            let elemento = {
                nombre: data[i].nombre,
                horario: data[i].horario,
                categoria: data[i].categoria,
                direccion: data[i].direccion,
                telefono: data[i].telefono,
            }
            lista.push(elemento)
            
            template.addEventListener('click', 
                cargarModal()
            )

            var marcador = L.marker([data[i].x, data[i].y]).addTo(map);
            marcador.bindPopup(`${data[i].nombre}`);

        }


    })






   // http://localhost/Proyecto%20fin%20de%20grado/test.php?province=jaen
