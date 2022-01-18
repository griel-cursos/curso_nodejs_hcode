const fs = require('fs');

//Lendo arquivos de uma pasta e exibindo no console
fs.readdir('../', (err, data)=>{
    if (err) throw err;

    data.forEach((item)=>{
        //console.log(__dirname + '\\' + item);
    })
});

//Lendo um arquivo e exibindo na tela seu conteúdo de forma não bloqueante
fs.readFile('texto.txt', (err, data)=>{
    if (err) throw err;

    //console.log(data.toString());

});

//Mesma coisa que o exemplo de icma, mas de forma bloqueante (ou seja, enquanto não carregar, não continua o resto do código)
const texto = fs.readFileSync('texto.txt');
console.log(`Texto: ${texto}`);