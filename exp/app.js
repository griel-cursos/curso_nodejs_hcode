//Importa o express para o documento
const express = require('express');
//Armazena na variavel app o método express()
const app = express();

//Usando middleware para cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser());

//Trazendo o arquivo de rotas
const adminRoutes = require('./routes/admin');

/**
 * Toda chamada possui o método de requisição (req) e de resposta (res).
 * 
 * statusCode 200 significa que a conexão foi bem sucedida.
 */

//Aceitando JSON no Express
app.use(express.json());


//Trazendo arquivos estáticos com Express
app.use('/rota', express.static('public'));


//Criando um middleware
//Recebe uma requisição, dá uma resposta e retorna o que fará em seguida
app.use((req, res, next)=>{

    console.log('Executando Middleware em nível aplicação');

    return next();

});
//Definindo um cookie
app.get('/setcookie', (req,  res)=>{

    res.cookie('user','roberto', {
        maxAge: 900000,
        httpOnly: true
    });

    return res.send('Cookie gravado com sucesso');

});
//Resgatando um cookie
app.get('/getcookie', (req, res)=>{

    let user = req.cookies['user'];

    if (user) {
        return res.send(user);
    }

})


app.get('/', (req, res)=>{

    res.send('Hello World');

});

app.use('/admin', adminRoutes);

//Middlewares para tratamento de erros devem sempre ser no final

//Forçando um erro para ser capturado pelo middleware
app.get('*', (req, res, next)=>{
    setImmediate(()=>{
        next(new Error('Temos um problema'));
    });
})

app.use((err,req, res, next)=>{
    console.log('Houve um erro. Veja a instruções');
    res.status(500).json({message:err.message});
})

app.listen(3000, ()=>{
    console.log('Server running');
})