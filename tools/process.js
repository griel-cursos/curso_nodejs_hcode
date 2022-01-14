require('./subdirectory/sub');
console.log('-----------------------------------');
console.log('Nome do arquivo:', __filename);
console.log('Diretório do arquivo:', __dirname);
console.log('Diretório que foi invocado:', process.cwd());
console.log('Parâmetros de execução:', process.argv);
console.log('Ambiente do servidor:', process.platform);
console.log('Idioma do Sistema operacional:', process.env.LANG);
console.log('Nome do servidor:', process.env.COMPUTERNAME);

switch (process.argv[2]) {
    case '-a':
        console.log('Executando rotina principal');
    break;
    case '-x':
        console.log('Executando rotina de visualização');
    break;
    case '-q':
        console.log('Encerrando a aplicação');
        process.exit(); //Intorrompe imediatamente
    break;
    default:
        console.log('Parâmetro inválido')
}