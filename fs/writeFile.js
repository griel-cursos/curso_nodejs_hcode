const { writeFile } = require('fs');

writeFile('arquivo.txt', 'Criando arquivo de texto por Node', (err)=>{
    if (err) throw err;

    console.log('Arquivo criado com sucesso')
});