function soyAsincrona(){
    console.log('Hola soy una función asincrona');
    setTimeout(function() {
        console.log('Estoy siendo asincrona');
    }, 1000)
};

console.log('Iniciando proceso...');
soyAsincrona();
console.log('Terminando proceso...');