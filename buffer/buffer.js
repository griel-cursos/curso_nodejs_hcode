const Buffer = require('buffer').Buffer;

const buf = Buffer.from('Curso de NodeJS');

console.log(buf); //Exibindo em valores binários
console.log(buf.toString()); //Exibindo em modo de texto
console.log(buf.toString('utf16le')); //Exibindo em caracteres asiáticos

const buf_string = Buffer.from('Carregando uma string','utf-8');
console.log(buf_string.toString())
console.log(Buffer.isBuffer(buf_string)) //Verifico se é uma string
console.log(buf_string.toString('utf-8',0, 10)) //Carregando apenas 10 bytes dessa string