/*Enunciado ejercicio 2:
Dada una cadena de texto, comprobar si
es un palindromo o no.
Los palindromos son palabras que se leen
igual aun estando invertida
Por ejemplo: ana, bob, otto, allivessevilla

No tener en cuenta espacion o simbolos raros

Como hacerlo:
Funcion con parametro "texto"
separar el texto en un array de letras
darle la vuelta
unir el array de letras en un string y 
comparar con el parametro
*/

function palindromo(texto){
    let invertido = texto.split('')
                         .reverse()
                         .join('');
    return (invertido === texto);
}

//console.log("¿Es un palindromo? " + palindromo("otto"));