/*
    Crea una función que reciba un array de objetos persona y devuelva un array con el nombre de las personas
    cuyo id coincida con la posición del array en el que se encuentra.


    Ejemplo:
        Entrada: [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ]
        Salida: ['Juan','Gon','Fran']
*/
function obtenerNombresPorId(personas) {
    return personas.filter((persona, index) => persona.id === index + 1).map(persona => persona.name);
  }
  let arrayPersonas = [
    { id: 2, name: 'Pedro' },
    { id: 1, name: 'Juan' },
    { id: 5, name: 'Luis' },
    { id: 3, name: 'Gon' },
    { id: 4, name: 'Fran' }
  ];
  
  let resultado = obtenerNombresPorId(arrayPersonas);
  console.log(resultado); // Debería imprimir: ['Juan','Gon','Fran']
  