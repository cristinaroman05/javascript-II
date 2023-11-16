/*
    Crea una función que reciba un array de personas y devuelva un string con las personas separadas
    por el símbolo recibido en el segundo argumento.

    Ejemplo:
        Entrada: (['Pedro', 'Gon', 'Luis', 'Fran'], '/')
        Salida: 'Pedro/Gon/Luis/Fran'
*/
function unirPersonas(personas, simbolo) {
    console.log(personas.join(simbolo)) ;
  }
  let arrayPersonas = ['Pedro', 'Gon', 'Luis', 'Fran'];
  let separador = '/';
  let resultado = unirPersonas(arrayPersonas, separador);
  console.log(resultado); 