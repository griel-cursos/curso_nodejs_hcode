//A Promise possui dois parâmetros que precisam ser o resolve e o reject. Se der certo, invoca a resolve, e se der erro invoca a reject
function soma(values) {
    
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{
            resolve(values + 5000);
         }, 5000);

    });
    
}


soma(200)
.then((resultado)=>{
    console.log('Resolvido!', resultado)
})
.catch()