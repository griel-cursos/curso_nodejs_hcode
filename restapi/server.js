require('dotenv').config();
//A primeira linha sempre deve ser um require do dotenv com o método config
//Sempre que eu precisar chamar uma variável, devo user o comando process.env.VARIAVEL

const express = require('express');
const app = express();
const mongoose = require('mongoose');

//Conectando o MongoDB no schema subscribers
mongoose.connect(process.env.DATABASE_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//Armazena o processo de conexão na constante db
const db = mongoose.connection;

//Se der algum erro, informar no console 
db.on('error', (err)=>{
    console.error(err);
});

//Uma vez que (once...) abriu (open)
db.once('open', ()=>{
    console.log('Database Connected');
});

//Com esse middleware, o express passa a entender os comandos json
app.use(express.json());


//Importando o arquivo de rotas e executando um middleware onde sempre que acessar determinada rota, invoque essa constante
const subscribersRouter = require('./routes/subscribers');
app.use('/subscribers', subscribersRouter);


app.listen(3000, ()=>{
    console.log('Server Running');
});