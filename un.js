const fs = require('fs');

//Se for usar arquivos não bloqueantes, então todos os métodos devem ser não bloqueantes.

fs.readFile('file.txt',(error, data)=>{

    if (error) throw err;
    console.log(data);

    fs.unlink('file.txt', (unlinkErr)=>{
        if (unlinkErr) throw err;
        console.log("Arquivo excluido");
    });

});
//Neste exemplo, o arquivo só será excluido após sua leitura completa
