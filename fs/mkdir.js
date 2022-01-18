const fs = require('fs');

//Criando um diretório somente
/*fs.mkdir('projeto', (err, data)=>{
    if (err) throw err;

    console.log('Diretório criado com sucesso');

});*/

//Criando diretórios de forma recursiva
/*fs.mkdir('projeto/assets/images', {
    recursive: true
}, (err, data)=>{
    if (err) throw err;

    console.log('Diretório criado com sucesso')
})*/

const assets = [
    'css',
    'js',
    'images',
    'fonts',
    'lib'
]

const make = (dir)=>{
    dir.forEach((item)=>{
        fs.mkdir(`projeto/assets/${item}`, {
            recursive: true
        }, (err, data)=>{
            if (err) throw err;
        
            console.log('Diretório criado com sucesso', item)
        })
    })
}

make(assets)