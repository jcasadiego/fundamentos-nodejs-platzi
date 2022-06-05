const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');

//readableStream.setEncoding('utf-8')

// readableStream.on('data', function(chuck){
//     data += chuck;
// });

// readableStream.on('end', function(){
//     console.log(data);
// });

// process.stdout.write('Hola');
// process.stdout.write('que');
// process.stdout.write('tal');

// const transForm = stream.transForm;

// function Mayus(){
//     transForm.call(this);
// }

// util.inherits(Mayus, transForm);

// Mayus.prototype._transform = function(chuck, codif, cb){
//     chunkMayus = chuck.toString().toUpeerCase();
//     this.push(chunkMayus);
//     cb();
// }

// let mayus = new Mayus();

// readableStream
//     .pipe(mayus)
//     .pipe(process.stdout);

class Mayus extends stream.Transform {
    constructor(){
        super();
    };
    
    _transform(chunk, codif, cb) {
        let chunkMayus = chunk.toString().toUpperCase();
        this.push(chunkMayus);
        cb();
    }
}

const mayus = new Mayus();
readableStream.pipe(mayus).pipe(process.stdout);