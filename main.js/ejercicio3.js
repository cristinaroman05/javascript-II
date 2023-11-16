/*
    Un palíndromo es una palabra que se deletrea de la misma manera en ambos sentidos.
    Crea una función que reciba una palabra y devuelva true o false si es o no palíndromo.

    Ejemplo:
        Entrada: 'oso'
        Salida: true
*/
function esPalindromo(palabra) {
    let palabraInvertida = palabra.split('').reverse().join('');
    return palabra === palabraInvertida;
    
  }
  
  let resultado = esPalindromo('oso');
  console.log(resultado);