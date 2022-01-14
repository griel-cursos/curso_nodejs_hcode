const EventEmitter = require('events');

//Criando uma classe de exemplo que extende do EventEmitter
class Evento extends EventEmitter {}

//Crio uma instancia dessa classe
const meuEvento = new Evento();

//Crio um evento com o nome seguranca e passo os argumentos que eu desejo
meuEvento.on('seguranca', (x,y)=>{
    console.log(`Evento de segurança: ${x} e ${y}`)
});

//Invoco um método, chamando o evento seguranca com nome de usuário e a ação, como exemplo
meuEvento.emit('seguranca','Roberto','Alterou o salário');