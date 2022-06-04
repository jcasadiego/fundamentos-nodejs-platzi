function otraFuncion(){
    return seRompe();
}

function seRompe(){
    return 3 + z;
}

function seRompeAsincrona(cb){
    setTimeout(function() {
        try{
            return 3 + z;
        } catch (err){
            console.error('Error en mi funcion asincrona');
            cb(err);
        }
    });
}

try{
    //seRompe();
    //otraFuncion();
    seRompeAsincrona(function(){
        console.log('Hay un error');
    });
} catch(err) {
    console.error('Vara, se ha roto algo....')
    //console.error(err);
    console.error(err.message);
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('Esto va al final');