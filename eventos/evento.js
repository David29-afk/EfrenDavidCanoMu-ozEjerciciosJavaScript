

let botonCalcular = document.getElementById('calcular')

botonCalcular.addEventListener('click', (calculo) => {

    let estatura = document.getElementById('estatura').value;
    let peso = document.getElementById('peso').value;

    const est = parseFloat(estatura);
    const pes = parseFloat(peso);

    let suma = est + pes

    let division = suma / pes

    document.getElementById('resultado').value = division

})



 


  let seleccion = document.getElementById('seleccion')

seleccion.addEventListener('change', (divisa) => {

    let valorEentrada = document.getElementById('entrada1').value;
    let valorEntrada2 = document.getElementById('entrada2').value;

    const entrada = parseFloat(valorEentrada);
    const entrada2 = parseFloat(valorEntrada2);

    const seleccionOpcion = divisa.target.value

    let conversion;// let conversion = 17.8 * entrada
    //     let conversion2 = 919 * entrada
    //     let conversion3 = 3977.72 * entrada

   
    switch (seleccionOpcion) {
        case '1':
          conversion = 17.8 * entrada;
          break;
        case '2':
          conversion = 919.25 * entrada;
          break;
        case '3':
          conversion = 3974.58 * entrada;
          break;
       
      }

      document.getElementById('entrada2').value = conversion
})







// const notasPrueba = {
// nuevas: [
//     {
//         id: 1,
//     titulo: 'Sacar la basura',
//     texto: 'Mi mama me va a regañar si no lo hago',
//     realizada: false
//     }
// ]

// }

// let notasNuevas = notasPrueba.nuevas

// let idGlobal = 1; // Último ID creado manualmente


// function crearNuevaNota() {
//   idGlobal += 1; // Incrementar el ID global
//   console.log('Nuevo ID de nota creado:', idGlobal);
 

// let contenedorNotas = document.getElementById ('contenedor')

// let notas = document.createElement ('div')
// notas.className = "card text-bg-warning mb-3 cardNotas"
// notas.id = `nota-${idGlobal}`;
// notas.innerHTML =`
// <div class="card-header">
//                     <div class="form-check">
//                         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
//                         <label class="form-check-label" for="flexCheckDefault">
//                             ${notasNuevas[0].titulo}
//                         </label>
//                     </div>
//                 </div>
//                 <div class="text-center mb-3">
//                     <div class="card-body">
                      
//                       <p class="card-text">${notasNuevas[0].texto} </p>
//                       <a href="#" class="btn btn-danger">Borrar nota</a>
//                     </div>
//                   </div>
// `
// contenedorNotas.appendChild(notas);

// }

// crearNuevaNota();

// // crearNuevaNota(); // Salida: Nuevo ID de nota creado: 2
// // crearNuevaNota(); // Salida: Nuevo ID de nota creado: 3

// function agregarNota(titulo, texto) {
//     const nuevaNota = {
//       titulo: titulo,
//       texto: texto
//     };
//     notasNuevas.push(nuevaNota);
//     console.log('Nota agregada:', nuevaNota);
//   }
  
//   // Ejemplo de uso de la función agregarNota
//   agregarNota('Nuevo Título', 'Nuevo Texto');
//   console.log(notasPrueba);



//   function guardarNota() {
//     const titulo = document.getElementById('tituloNota').value;
//     const texto = document.getElementById('contenidoNota').value;
  
//     if (titulo.trim() === '' || texto.trim() === '') {
//       alert('Por favor, llene todos los campos.');
//       return;
//     }
  
//     // agregarNota(titulo, texto);
//     // // pintarNotas();
//   }
  
// guardarNota();


// let botonGuardar = document.getElementById ('botoncitoguardar')

// botonGuardar.addEventListener ('click', (guardar) => {


// console.log(guardarNota);

// })





    // a. Crear un array donde vamos a guardar las notas
    let notas = [];
  
    // b. Agregar un par de notas de prueba
    notas.push({ id: 1, titulo: 'Nota 1', texto: 'Texto de la nota 1', realizada: false });
    notas.push({ id: 2, titulo: 'Nota 2', texto: 'Texto de la nota 2', realizada: false });
  
    // c. Crear una variable idGlobal e inicializarla
    let idGlobal = 2;
  
    // d. Crear un div que va a ser el contenedor de las notas (esto ya está en el HTML)
  
    // e. Crear una función que pinte las notas en forma de tarjetas dentro del div contenedor
    function pintarNotas() {
      const contenedor = document.getElementById('contenedor');
      contenedor.innerHTML = ''; // Limpiar el contenedor
  
      if (notas.length === 0) {
        contenedor.innerHTML = '<p>NO HAY NOTAS PARA MOSTRAR</p>';
        return;
      }
  
      notas.forEach((nota) => {
        const nuevaNota = document.createElement('div');
        nuevaNota.className = 'nota';
        nuevaNota.id = `nota-${nota.id}`;
  
        nuevaNota.innerHTML = `
          <div class="card-header">
            <div class="form-check">
              <input onClick="marcarRealizada(${nota.id})" class="form-check-input" type="checkbox" ${nota.realizada ? "checked" : ""} id="flexCheckDefault-${nota.id}">
              <label class="form-check-label" for="flexCheckDefault-${nota.id}">
                ${nota.titulo}
              </label>
            </div>
          </div>
          <div class="text-center mb-3">
            <div class="card-body">
              <p class="card-text">${nota.texto}</p>
              <button class="btn btn-danger" onClick="borrarNota(${nota.id})">Borrar nota</button>
            </div>
          </div>
        `;
  
        contenedor.appendChild(nuevaNota);
      });
    }
  
    // g. Crear una función agregarNota
    function agregarNota(titulo, texto) {
      idGlobal++;
      const nuevaNota = { id: idGlobal, titulo, texto, realizada: false };
      notas.push(nuevaNota);
    }
  
    // h. Al presionar el botón guardar
    document.getElementById('guardarBtn').addEventListener('click', () => {
      const titulo = document.getElementById('titulo').value;
      const texto = document.getElementById('texto').value;
  
      if (titulo.trim() === '' || texto.trim() === '') {
        alert('Por favor, llene todos los campos.');
        return;
      }
  
      agregarNota(titulo, texto);
      pintarNotas();
    });
  
    // Limpiar campos
    document.getElementById('limpiarBtn').addEventListener('click', () => {
      document.getElementById('titulo').value = '';
      document.getElementById('texto').value = '';
    });
  
    // i. Función borrarNota
    window.borrarNota = function(id) {
      notas = notas.filter(nota => nota.id !== id);
      pintarNotas();
    };
  
    // n. Función marcarRealizada
    window.marcarRealizada = function(id) {
      const nota = notas.find(nota => nota.id === id);
      if (nota) {
        nota.realizada = !nota.realizada;
        pintarNotas();
      }
    };
  
    // p. Filtrar por realizadas
    function filtrarPorRealizadas(array) {
      const filtroRealizadas = document.getElementById('filtroRealizadas').checked;
      return filtroRealizadas ? array.filter(nota => nota.realizada) : array;
    }
  
    // q. Filtrar por texto
    function filtrarPorTexto(array, texto) {
      if (texto.trim() === '') return array;
      return array.filter(nota => nota.titulo.includes(texto) || nota.texto.includes(texto));
    }
  
    // r. Actualizar las notas filtradas
    function actualizarNotasFiltradas() {
      const texto = document.getElementById('filtroTexto').value;
      let notasFiltradas = filtrarPorTexto(notas, texto);
      notasFiltradas = filtrarPorRealizadas(notasFiltradas);
      pintarNotasFiltradas(notasFiltradas);
    }
  
    function pintarNotasFiltradas(notasFiltradas) {
      const contenedor = document.getElementById('contenedor');
      contenedor.innerHTML = ''; // Limpiar el contenedor
  
      if (notasFiltradas.length === 0) {
        contenedor.innerHTML = '<p>NO HAY NOTAS PARA MOSTRAR</p>';
        return;
      }
  
      notasFiltradas.forEach((nota) => {
        const nuevaNota = document.createElement('div');
        nuevaNota.className = 'nota';
        nuevaNota.id = `nota-${nota.id}`;
  
        nuevaNota.innerHTML = `
          <div class="card-header">
            <div class="form-check">
              <input onClick="marcarRealizada(${nota.id})" class="form-check-input" type="checkbox" ${nota.realizada ? "checked" : ""} id="flexCheckDefault-${nota.id}">
              <label class="form-check-label" for="flexCheckDefault-${nota.id}">
                ${nota.titulo}
              </label>
            </div>
          </div>
          <div class="text-center mb-3">
            <div class="card-body">
              <p class="card-text">${nota.texto}</p>
              <button class="btn btn-danger" onClick="borrarNota(${nota.id})">Borrar nota</button>
            </div>
          </div>
        `;
  
        contenedor.appendChild(nuevaNota);
      });
    }
  
    document.getElementById('filtroTexto').addEventListener('input', actualizarNotasFiltradas);
    document.getElementById('filtroRealizadas').addEventListener('change', actualizarNotasFiltradas);
  
    // Llamar a la función para pintar las notas iniciales
    pintarNotas();
  
  












  
 
//   function pintarNotas() {
//     const contenedor = document.getElementById('contenedor');
//     contenedor.innerHTML = ''; // Limpiar el contenedor


  
//     notasPrueba.forEach((nota, index) => {
//       const nuevaNota = document.createElement('div');
//       nuevaNota.className = 'card text-bg-warning mb-3 cardNotas';
//       nuevaNota.id = `nota-${index + 1}`;
  
//       nuevaNota.innerHTML = `
//         <div class="card-header">
//           <div class="form-check">
//             <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault-${index + 1}">
//             <label class="form-check-label" for="flexCheckDefault-${index + 1}">
//               ${nota.titulo}
//             </label>
//           </div>
//         </div>
//         <div class="text-center mb-3">
//           <div class="card-body">
//             <p class="card-text">${nota.texto}</p>
//             <a href="#" class="btn btn-danger">Borrar nota</a>
//           </div>
//         </div>
//       `;
  
//       contenedor.appendChild(nuevaNota);
//     });
//   }
  
//   // Llamar a la función para pintar las notas iniciales
//   pintarNotas();