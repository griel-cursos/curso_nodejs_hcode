//
function sum(value) {
    
    return new Promise((resolve, reject)=>{
        if (Number(value) == NaN || Number(value) == undefined || typeof value != 'number') {
            reject('Não é um número')
        }
        setTimeout(()=>{
            resolve(value + 5000);
         }, 5000);

    });
    
}

async function main() {
    try {
        const result = await sum('c');
        console.log(`O resultado é ${result}`);

    } catch(error) {

        console.log('Erro:', error)
        console.log('Usuário que fez o comando', process.env.USERNAME)

    }

}

main();