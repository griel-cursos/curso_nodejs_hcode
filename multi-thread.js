const crypto = require('crypto');
const start = Date.now();

//Exemplo de função muito pesada para o Node processar, então é invocado o Threadpool através da libuv, que converte para C++, e divide o processamento entre das threads do processador. É dividido em 4 threads
function logHashTime(){
    crypto.pbkdf2("a","b",100000, 512, "sha512",()=>{
        console.log(`Hash processado em ${Date.now() - start}`);
    });
}

logHashTime();
logHashTime();
logHashTime();
logHashTime();
logHashTime(); //Essa irá demorar um pouco mais