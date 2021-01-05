## Descricao

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# ATENCÃO, siga atentamente todos os passos, na sequência

## Iniciando containês do banco e do (SGBD)
```
$ docker-compose up -d --build

```
# após instalacão e conteinêrs rodando
## Acessando sitema gerenciador de banco de dados (SGBD)
```
http://localhot:8080

utilizar as credencias utilizadas no docker-compose.yml

exemplo:
SISTEMA: postgreSQL
SERVIDOR: bancopgsql (nome do container utilizado no docker-compose.yml)
USUARIO: (usuario e senha utilizados no docker-compose.yml)
SENHA: (usuario e senha utilizados no docker-compose.yml)
BASE DE DADOS: nao precisa informar valor

```

# ATENCÃO
## Após acessar o (SGBD) Sistema Gerenciador de banco de dados
```
$ criar uma database com nome de loterias

Após criar a database, vá ao código, na pasta
    SRC/CONFIG/database-connection.config.ts
e certifique-se que a linha contendo
    synchronize: true,
esteja descomentada
```

## Rodando localmente a API

```bash
$ git config core.autocrlf false

$ yarn
    ou
$ npm install
```

## Documentacão com as rotas da API
```
http://localhost:3333/documentation
```

## primeiro popular a tabela e depois consumir os resultados

## Running the app

```bash

# watch mode
$ yarn start:dev
    ou
$ npm run start:dev

```

### email
``
jeysonlr@gmail.com
``

## License

Nest is [MIT licensed](LICENSE).
