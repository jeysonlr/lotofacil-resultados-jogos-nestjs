## Descricao
```
Api para trazer números que mais e menos vezes saíram durante todos os concursos, e com um gerador de tres jogos aleatórios.

Atualizada concurso 2132 do dia 14/01/2021
```

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# ATENCÃO, siga atentamente todos os passos, na sequência

## Iniciando containêrs do banco de dados e do (SGBD)
```
$ docker-compose up -d --build

```
# após instalacão e conteinêrs rodando
## Acessando sitema gerenciador de banco de dados (SGBD)
```
acesse via http://localhot:8080

utilizar as credencias utilizadas no docker-compose.yml

exemplo:
SISTEMA: postgreSQL
SERVIDOR: loterias (nome do container utilizado no docker-compose.yml)
USUARIO: pguser (usuario e senha utilizados no docker-compose.yml)
SENHA: pgpassword (usuario e senha utilizados no docker-compose.yml)
BASE DE DADOS: nao precisa informar valor

Após acessar o SGBD, crie uma base de dados chamada "loterias"

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
