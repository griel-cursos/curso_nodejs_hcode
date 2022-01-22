//Importa o express para o documento
const express = require('express');
//Armazena na variavel app o método express()
const app = express();

/**
 * Toda chamada possui o método de requisição (req) e de resposta (res).
 * 
 * statusCode 200 significa que a conexão foi bem sucedida.
 */


app.get('/', (req, res)=>{

    res.statusCode = 200;

    res.send('Hello World');

});

app.get('/admin', (req, res)=>{

    res.statusCode = 200;

    res.send('Entrou na administração');

});

app.listen(3000, ()=>{
    console.log('Server running');
})