//Console tradicional para exibir mensagem
console.log('Exibindo mensagem no console');

//Console de erro para exibir mensagens de erro
console.error(new Error('Deu erro'));

//Console de tabela para exibir arrays e objetos
const carros = ['Fiat','Ford','Volks'];
console.table(carros);

const dados = {name: 'Roberto', empresa: 'Griel'};
console.table(dados);

//Console de contador. Dentro do () irá ter o nome do contador a ser usado
console.count('processo');
console.count('processo');
console.count('processo');
console.log('Resetando o processo');
console.countReset('processo');
console.count('processo');

console.time('contador');
for (let index = 0; index < 100; index++) {
    //console.log('-');
    
}
console.timeEnd('contador');

//Console de verificação
console.assert(true,'Faça alguma coisa');
console.assert(false, '%s', 'Não funcionou'); // O texto do terceiro parâmetro substitui o %s do segundo parâmetro

//console.clear(); //Limpa o console