async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            console.log('Hola ' + nombre);
            resolve(nombre);
        }, 1500)
    });
};

async function hablar(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            resolve(nombre);
        }, 1000)
    });
}

async function adios(nombre){
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve();
            //reject('Hay un error');
        }, 1000)
    });
}

async function conversacion(nombre, veces, callback){
    if(veces > 0){
        hablar(function() {
            conversacion(nombre, --veces, callback);
        });
    } else {
        adios(nombre, callback);
    }
}

async function main(){
    let nombre = await hola('Jose');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('Terminando proceso...');
}

console.log('Iniciando proceso...');
main();
console.log('Segunda linea q se ejecuta...');