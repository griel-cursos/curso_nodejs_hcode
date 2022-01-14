const http = require('http');
const host = '127.0.0.1';
const port = 3000;

//Request: Solicitação ao servidor
//Response: Resposta do servidor

const server = http.createServer((req, res)=>{

    res.statusCode = 200; //Deu tudo certo
    res.setHeader('Content-Type','text/plain'); //Devolve um header de texto puro
    res.end('Olá Mundo! \n Primeiro Script em Nodejs');

});

//Servidor ouvindo a porta, o host, e qual função irá retornar
server.listen(port, host, ()=>{
    console.log(`Deu tudo certo! Servidor rodando na porta ${port} pelo servidor http://${host}`);
});