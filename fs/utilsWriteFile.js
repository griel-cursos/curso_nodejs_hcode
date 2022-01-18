const { promisify } = require('util');
//Documentação da biblioteca util https://nodejs.org/dist/latest-v8.x/docs/api/util.html

const writeFile = promisify(
    require('fs').writeFile
);

const conteudo = 'Criando um arquivo usando Promisify';

writeFile('utilArquivo.txt', conteudo).then(()=>{
    console.log('Arquivo criado com sucesos');
}).catch((err)=>{
    console.error('Deu erro:', err)
});

