//A função soma recebe o valor a ser somado e também qual a função que será invocada para o callback
function soma(values, callback) {
    return setTimeout(()=>{
        return callback(null, values + 5000);
    }, 5000);
       
}

//Função do callback. O primeiro parâmetro é sempre o erro, em seguida o retorno
function resolveSoma(erro, resultado) {
    if (erro) throw err;

    console.log(resultado)
}

soma(200, resolveSoma)