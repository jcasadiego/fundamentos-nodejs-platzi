process.on('beforeExit', () => {
    console.log('el proceso va a terminar');
})

process.on('exit', () => {
    console.log('Jose, el proceso acabo');
})

process.on('uncaughtException', (err, origen) => {
    console.error('Vaya se nos ha olvidado capturar un error');
    console.error(err);
})

functionQueNoExiste();

console.log('Esto si el error no se recoje, no sale');