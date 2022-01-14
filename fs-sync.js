//Exemplo de um arquivo bloqueante

//A palavra Sync indica que é um arquivo bloqueante

const fs = require('fs');

console.log((process.hrtime()[0]/60).toFixed(5), "Antes da leitura do arquivo")

const dados = fs.readFileSync('file.txt');

console.log("Executando o Console após o arquivo");

console.log((process.hrtime()[0]/60).toFixed(5))