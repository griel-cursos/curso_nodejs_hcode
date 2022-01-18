/*throw new Error('Deu erro');
console.log("não vai exibir essa linha");*/

//Tente executar um comando. Se der erro, então execute o catch automaticamente

function execute(){
    executeTo()
}

function executeTo(){
    throw new Error('Deu erro. Essa mensagem irá vir dentro do error');
}

function init(){
    try {
        execute();    
    } catch (error) {
        console.log('Temos um problema', error.message);
    }
}

init()

console.log('Executando depois da função')

