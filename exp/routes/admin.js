const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{

    res.send('Entrou na administração');

});

router.get('/:id', (req, res)=>{
    
    res.send('Entrou na administração com o ID: ' + req.params.id);
    //O nome usado no :parametro deve ser usado no req.params
    
});

router.post('/', (req, res)=>{

    const corpo = `Login: ${req.body.login} \n
    Senha: ${req.body.senha}`;

    res.send('Entrou na administração via POST \n' + corpo);

});

router.patch('/', (req, res)=>{

    res.send('Acessando via PATCH')

});
router.put('/', (req, res)=>{

    res.send('Acessando via put')

});
router.delete('/', (req, res)=>{

    res.send('Acessando via delete')

});


module.exports = router;