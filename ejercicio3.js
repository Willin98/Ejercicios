/*Enunciodo ejercicio 3:
Dada una palabra, buscarla en una frase y devolver cuantas veces
aparece en ella.
la frase y la palabra deben ser parametros
de una funcion

Ejemplos:
coincidencias("Hola soy una palabra en una frase","palabra")//devuelve 1
coincidencias("Hola soy una palabra en una frase","victor")//devuelve 0

Como Hacerlo:
-Funcion con dos parametros "frase" y "busqueda"
-poner string en minusculas y limpiarlo
-Comprobar si la busqueda esta incluida en la frase
-Crear un array de palabras de la frase
-Mapear esas palabras y hacer un contador de cada una
-Devolver el contador de la busqueda
*/

function coincidencias(frase, busqueda) {
  let texto_limpio = frase.toLowerCase().replace(/[!¡.,-]/gi, "");
  let result = 0;

  if (texto_limpio.includes(busqueda)) {
    let palabras = texto_limpio.split(" ");
    let mapa = {};

    for (let palabra of palabras) {
      if (mapa[palabra]) {
        mapa[palabra]++;
      } else {
        mapa[palabra] = 1;
      }
    }
    result = mapa[busqueda];
  } else {
    result = 0;
  }
  return result;
}

console.log(
    "numero de coincidencias : ",
    coincidencias("Hola, QUE tal, soy willin. willin. willinn willlin", "epa")
);
