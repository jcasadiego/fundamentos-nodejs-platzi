// var tabla = [
//     {
//         a: 1,
//         b: 'Z'
//     },
//     {
//         a: 2,
//         b: 'otra'
//     }
// ]

// console.table(tabla);

// console.log('Conversacion')
// console.log('Hola');
// console.group('bla')
// console.log('Blablabla');
// console.log('Blablabla');
// console.log('Blablabla');
// console.groupEnd('bla');
// console.log('Adios');
// console.groupEnd('Conversacion');

// console.log('Otra cosa de otra funcion');

function function1(){
    console.group('funcion 1');
    console.log('Esto es de la funcion 1');
    console.log('Esto tambien');
    function2();
    console.log('Hemos vuelto a la funcion 1');
    console.groupEnd('funcion 2');
}

function function2(){
    console.group('funcion 2');
    console.log('Esto es de la funcion 2');
    console.groupEnd('funcion 2');
}

console.log('Empezamos');
function1();