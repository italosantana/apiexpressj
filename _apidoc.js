/**
 * @api {get} /listar
 * @apiVersion 0.0.1
 * @apiGroup Produtos
 * @apiSuccess {String} status Mensagem de acesso autorizado
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Produto listado!"
 *    }
 */

/**
* @apiVersion 0.0.1
* @api {post} /cadastrar/:id
* @apiGroup Autenticação
*
* @apiSuccess {String} status Mensagem de cadastro efetuado
*
* @apiSuccessExample {json} Sucesso
*    HTTP/1.1 200 OK
*    {
*      "status": "Produto Cadastrado!"
*    }
*
*/

/**
 * @apiVersion 0.0.1
 * @api {delete} /deletar/:id
 * @apiGroup Autenticação
 *
 * @apiSuccess {String} status Mensagem de deletar do sistema
 *
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "status": "Produto deletado com sucesso!"
 *    }
 *
 */

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