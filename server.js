const express = require('express');
const app = express();
const port = 3000;
const { body, validationResult } = require('express-validator');

// metodo LISTAR os produtos
app.get('/listar', function (req, res) {
    res.send('GET: listar produtos com sucesso!');
});

//metodo CADASTRO os produtos
/*app.post('/cadastrar', function (req, res) {
    res.send('POST: produto cadastrado com sucesso!');
});
*/

//metodo EDITAR 1 PRODUTO
app.put('/editar/:id', function (req, res) {
    res.send('Produto editado com sucesso!')
})

//metodo DELETAR 1 PRODUTO
app.delete('/deletar/:id', function(req, res){
    res.send('Produto deletado com sucesso!');
})

app.listen(port, () => {
    console.log(`Flying to the moon, #DevsAcreditar! 🚀 and running http:localhost: ${port}`)
})

// criando rota cadastrar + validator express

app.post('/cadastrar', [
    //validacao dos dados
    body('nome').notEmpty().withMessage("O campo nome é obrigatório"),
    body('quantidade').notEmpty().withMessage("O campo quantidade é obrigatório")

], (req, res) => {

    // caso encontre erros, ficará nessa variável erros
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    // se caso forem válidos, o sistema executará aqui!
    res.send({ message: 'Tudo válido!' });
});