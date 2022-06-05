console.time('todo');
let suma = 0;

console.time('bucle');

for (let i = 0; i< 1000000000; i++){
    suma += 1;
}

console.timeEnd('bucle');

console.time('bucle 2');

for (let j = 0; j< 10000000000; j++){
    suma += 1;
}

console.timeEnd('bucle 2');

console.time('asincrono');
console.log('Empieza el proceso asincrono');
asincrona()
    .then(() => {
        console.timeEnd('asincrono');
    });

console.timeEnd('todo');

function asincrona(){
    return new Promise((resolve) => {
        setTimeout(function(){
            console.log('termina el proceso asincrono');
            resolve();
        });
    });
}