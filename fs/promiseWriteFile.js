const { writeFile } = require('fs');

//Função para criar um arquivo que recebe o nome e o conteúdo
const criaArquivo = (name, content)=>{

    //Retorna uma promessa que pode ser res(olvida) ou rej(eitada).
    return new Promise((res, rej)=>{

        //Tenta executar essa função...
        writeFile(name, content, (err)=>{

            //Se der erro, já devolve a mensagem de erro...
            if (err) return rej(err);

            //Ou então resolve/executa o comando
            res();
        });
    })
}

criaArquivo('promiseArquivo.txt', 'Criando um arquivo criando promisses').
then(()=>{
    console.log('O arquivo foi criado com sucesso');
})
.catch(err => console.error(err));