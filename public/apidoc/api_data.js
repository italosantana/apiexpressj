define({ "api": [
  {
    "version": "0.0.1",
    "type": "delete",
    "url": "/deletar/:id",
    "title": "",
    "group": "Autenticação",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de deletar do sistema</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"Produto deletado com sucesso!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Autenticação",
    "name": "DeleteDeletarId"
  },
  {
    "version": "0.0.1",
    "type": "post",
    "url": "/cadastrar/:id",
    "title": "",
    "group": "Autenticação",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de cadastro efetuado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"Produto Cadastrado!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Autenticação",
    "name": "PostCadastrarId"
  },
  {
    "type": "get",
    "url": "/listar",
    "title": "",
    "version": "0.0.1",
    "group": "Produtos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de acesso autorizado</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"Produto listado!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Produtos",
    "name": "GetListar"
  },
  {
    "version": "0.0.1",
    "type": "put",
    "url": "/editar/:id",
    "title": "Editar produtos",
    "group": "Produtos",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>Mensagem de dados atualizados</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso",
          "content": "HTTP/1.1 200 OK\n{\n  \"status\": \"Produtos atualizados!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./_apidoc.js",
    "groupTitle": "Produtos",
    "name": "PutEditarId"
  }
] });
