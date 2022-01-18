const fs = require('fs').promises;

async function read(){

    //Criando uma função asincrona para ler um arquivo e guardar ele como um binário
    const data = await fs.readFile('texto.txt', 'binary');

    return new Buffer.from(data);
}

try {
    read().then((data)=>{
        console.log(data.toString())
    })
} catch (error) {
    console.err(err)
}