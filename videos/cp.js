const { spawn } = require('child_process');

const ls = spawn('ls', ['-lh', '/usr']);

//STDIO = O que eu quero fazer
ls.stdout.on('data', (data)=>{
    console.log(`stdout: ${data}`);
});


ls.stderr.on('data', (data)=>{
    console.log(`stderr: ${data}`);
});

//O Close indica que o processo encerrou
ls.on('close', (code)=>{
    console.log(`Processo finalizado com sucesso \n code: ${code}`);
});