const path = require('path');

console.log(path.basename('c:\\temp\\arquivo.html')); //Somente no nome do arquivo. Output: arquivo.html

console.log(path.normalize('c:\\temp/dir/subdir/..')); //Normalizando o caminho. Output: c:\temp\dir

console.log(path.join('/teste/','teste2','teste3/teste4','dir2', '..')); //Cria um caminho. Output: \teste\teste2\teste3\teste4

console.log(path.resolve('path2.js')); //Retorna o caminho do arquivo. Output: D:\webdev\curso_nodejs_hcode\path\path2.js

console.log(path.extname('path.js')); //Retorna a extensão do arquivo. Output: .js