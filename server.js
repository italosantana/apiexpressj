const express = require('express');
const app = express();
const port = 3000;
const { body, validationResult } = require('express-validator');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static("public"));

/**
 * @api {get} /listar Listar
 * @apiVersion 0.0.1
 * @apiGroup Produtos
 * @apiDescription API de Listar os Produtos
 * 
 * @apiHeader {string} listar Listar Produtos

 * @apiHeaderExample {json} Request-Example:
 * {
 *    "listar": "/listar",
 *    "hashPass": "402562bbebdabd3dc1c86ad268ab3136aebd1756",
 *     "keep": 1
 * }
 * @apiSuccess {String} status Mensagem de acesso autorizado
 * @apiSuccess {String} token Token de Acesso
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "GET: Listar produtos com sucesso!"
 *      "token": "c447c5b517efa57e04e1a4732b2a3b5df82f9d72"
 *    }
 * 
 * @apiError {String} status Mensagem de acesso negada
 * 
 * @apiErrorExample {json} Error
 *    HTTP/1.1 406 Not Acceptable
 *    {
 *      "status": "Foi feito errado!"
 *    }
 *
 */
app.get('/listar', function (req, res) {
    res.send('GET: listar produtos com sucesso!');
});

/**
 * @apiVersion 0.0.1
 * @api {put} /editar/:id Editar produtos
 * @apiGroup Produtos
 *
 * @apiSuccess {String} status Mensagem de dados atualizados
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Produtos atualizados!"
 *    }
 *
 */
app.put('/editar/:id', function (req, res) {
    res.send('Produto editado com sucesso!')
})

/**
 * @apiVersion 0.0.1
 * @api {delete} /deletar:id Deletar produtos
 * @apiGroup Produtos
 *
 * @apiSuccess {String} status Mensagem de deletar do sistema
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Produto deletado do sistema!"
 *    }
 *
 */
app.delete('/deletar/:id', function(req, res){
    res.send('Produto deletado com sucesso!');
})


/**
 * @apiVersion 0.0.1
 * @api {post} /cadastrar/:id Cadastros
 * @apiGroup Produtos
 * @apiDescription API de cadastro de novo produto
 *
 * @apiHeader {string} produto Nome do produto
 * @apiHeader {string} quantidade Quantidade de produtos
 * 
 * @apiHeaderExample {json} Request-Example:
 * {
 *    "produto": "Nike Air",
 *    "quantidade": "22",
 * }
 * 
 * @apiSuccess {String} status Mensagem de cadastro efetuado
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 201 Created
 *    {
 *      "status": "Produto Cadastrado!"
 *    }
 * 
 * @apiError {String} status Mensagem de Cadastro Não Efetivado 
 * 
 * @apiErrorExample {json} Email em Uso
 *    HTTP/1.1 400 Bad Request
 *    {
 *      "status": "Produto já foi cadastrado"
 *    }
 *  @apiErrorExample {json} Falta Campo hashPass ou user
 *    HTTP/1.1 400 Bad Request
 *    {
 *      "status": "Faltam Argumentos"
 *    }
 *
 */
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
