console.log('Executando module-01')

const oculta = ()=>{
    console.log('Executando função oculta');
}

//Exportando uma função como módulo
executa = ()=>{
    console.log('Executando função executa');
}

welcome = 'Bem vindo'

module.exports = {
    executa, welcome
}

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