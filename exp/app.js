//Importa o express para o documento
const express = require('express');
//Armazena na variavel app o método express()
const app = express();

//Trazendo o arquivo de rotas
const adminRoutes = require('./routes/admin');

/**
 * Toda chamada possui o método de requisição (req) e de resposta (res).
 * 
 * statusCode 200 significa que a conexão foi bem sucedida.
 */

//Aceitando JSON no Express
app.use(express.json());

app.get('/', (req, res)=>{

    res.send('Hello World');

});

app.use('/admin', adminRoutes);



app.listen(3000, ()=>{
    console.log('Server running');
})