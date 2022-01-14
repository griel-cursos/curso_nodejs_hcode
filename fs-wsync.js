//Exemplo de um arquivo não bloqueante
//Um código não bloqueando precisa ter um callback para executar uma função quando acabar

const fs = require('fs');

console.log((process.hrtime()[0]/60).toFixed(5), "Antes da leitura do arquivo")

const dados = fs.readFile('file.txt', (err, data)=>{

    if (err) throw err;

    console.log("Terminada a leitura do arquivo");

});

console.log("Executando o Console após o arquivo");

console.log((process.hrtime()[0]/60).toFixed(5))