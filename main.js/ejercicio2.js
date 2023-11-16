/*
    Crea una función que reciba 2 arrays de números y devuelva uno unificado,
    sumando los números de la misma posición.
    Los arrays pueden tener diferente longitud.

    Elemplo: 
      Entrada: [1,4,5,7] [2,1,5,1,1]
      Salida: [3,5,10,8,1]
*/
let array1 = [1, 4, 5, 7];
let array2 = [2, 1, 5, 1, 1];
  
let resultado = sumarArrays(array1, array2);

function sumarArrays(array1, array2) {
    let resultado = [];
  
    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
      resultado.push((array1[i] || 0) + (array2[i] || 0));
    }
  
    console.log(resultado);
  }
  
 
  
 
  