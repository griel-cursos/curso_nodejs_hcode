console.log('Executando module-01')

module.exports.oculta = ()=>{
    console.log('Executando função oculta');
}

//Exportando uma função como módulo
module.exports.executa = ()=>{
    console.log('Executando função executa');
}

module.exports.welcome = 'Bem vindo'

//REPL - Executa node no terminal
/**
 * node > entra no cli
 * 
 * require() > importa um arquivo
 * 
 * .exit > sai do modulo
 * 
 * Para executar funções no cli, é necessário que o require seja feito em uma variavel
 * const m01 = require();
 * m01.funcao();
 */