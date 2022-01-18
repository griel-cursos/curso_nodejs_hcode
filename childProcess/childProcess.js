const { spawn } = require('child_process');

//Na função spawn cada parámetro adicional precisa ser em um array
const ls = spawn('ls', ['..', '-lh', '/usr']);

//Exibindo os dados de saida 
ls.stdout.on('data', (data)=>{
    console.log(`stdout: ${data}`);
});

//Exibindo os dados de erro, se houver
ls.stderr.on('data', (data)=>{
    console.log(`stderr: ${data}`);
});

ls.on('close',(code)=>{
    console.log(`Processo em segundo plano com o código ${code}`);
})