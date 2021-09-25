const express = require('express');
const app = express();
const port = 3000;
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// metodo LISTAR os produtos
app.get('/listar', function (req, res) {
    res.send('GET: listar produtos com sucesso!');
});

//metodo EDITAR 1 PRODUTO
app.put('/editar/:id', function (req, res) {
    res.send('Produto editado com sucesso!')
})

//metodo DELETAR 1 PRODUTO
app.delete('/deletar/:id', function(req, res){
    res.send('Produto deletado com sucesso!');
})


// criando rota cadastrar + validator express

app.post("/cadastrar/:id", [
    //validacao dos dados

    body("produto").notEmpty().withMessage("O campo 'produto' é obrigatório"),
    body("quantidade").notEmpty().withMessage("O campo 'quantidade' é obrigatório")

], (req, res) => {

    // caso encontre erros, ficará nessa variável erros
    const errors = validationResult(req);

    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    
    // se caso forem válidos, o sistema executará aqui!
    res.send({ message: "O produto acabou de ser cadastrado com sucesso!" });
});

app.listen(port, () => {
    console.log(`Flying to the moon, #DevsAcreditar! 🚀 and running http:localhost: ${port}`)
})
