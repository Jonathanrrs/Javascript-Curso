/* Operador ternario */
/* ? como if, : como else */
// let nombre = 'joni';
// nombre == 'joni' ? console.log(nombre) : console.log('no coincide');

/* Operador corto circuit */
/* evalua el primer valor y si es falso se pasa al otro*/
// let c = null || 25;
/* valua si el primer es falso se queda con ese */
// let d = null && a;

/* NÚMEROS */

/* toFixed */
/* Especifica el número de decimales, hace redondeo */
// number.toFixed();

/* parseInt - parseFloat */
/* Convierte texto a número */
// parseInt('var, 10) 10 por el sistema decimal
/* Convertir a número con decimales */
// parseFloat(var)

/* NaN */
/* Cualquier operación matemática que no devuelva un número */
// let number = 5 * 'hola';

/* Math */

/* Math.floor */
/* Redondear un número */
// Math.floor(20.7) -> 20, lo redondea hacia abajo

/* Math.ceil */
/* Redondear un número hacia arriba */
// Math.ceil(20.1) -> 21

/* Math.round */
/* Redondea de .5 para arriba, de .5 para abajo redondea hacia abajo */
// Math.round(20.6) -> 21

/* Math.random */
/* Número aleatorio entre 0 y 1 */
// Math.random() * 10;

/* STRINGS */

/* Propiedad */
/* Cuántos carácteres tiene */
// .length

/* Métodos */

/* Sin parámetros */

/* .trim() */
/* Quitar espacios al principio y al final */
// '   hola '.trim(); -> 'hola

/* .toUpperCase() */
/* Convertir a mayúsculas */
// greet.toUpperCase(); -> 'HOLA'

/* .toLoweCase() */
/* Convertir a minúsculas */
// greet.toLoweCase(); -> 'hola'

/* Encontrar carácteres */

/* indexOf() */
/* en qué posición se encuentra */
//let nombre = 'joni
// nombre.indexOf('j'); -> 0
/* se le puede pasar un parámetro para saber desde cuál contar */
// indexOf(var, posición);

/* lastIndexOf() */
/* empieza a contar desde atrás */
// 'Hola amigos'.lastIndexOf('o');

/* includes */
/* si el texto incluye cierta cadena de tesxto */ 
// 'jonathan'.includes('than'); -> true

/* startsWith */
/* Si comienza con */
// 'Jonathan'.starsWith('J'); -> true

/* endsWith */
/* Si termina con */
// 'Jonathan'.endsWith('j');  -> false


/* MANIPULAR STRINGS */

/* replace */
/* agarra un texto y lo reemplaza por otro */
// 'hola mundo'.replace('mundo', 'world'); -> hola world

/* split */
/* separar un texto segúnn el separador que se ponga */
// 'jonathan'.split('t'); -> ['jona, 'han]


/* substring */
/* separar el texto desde el parametro start y trae lo que sigue */
/* si es end es negativo extrae hacia atrás */
// 'hola mundo'.substring(4); -> ' mundo'

/* substr */
/* busca la cantidad */
/* di start es negativo, empieza a extraer desde atrás */
// 'hola mundo'.substr(2,5); -> 'la mu'

/* slice */
/* la diferencia es cuando hay valores negativos */
/* end negativo no toma los ultimos [end] valores */
/* start negativo: empieza a contar desde el final */
// 'hola mundo'.slice(-5, -2); -> mun
