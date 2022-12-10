import { createConnection } from 'typeorm';
//esse metodo faz a busca na aplicação de um arquivo chamado ormconfig, onde ele vai encontrar as informações para fazer a conexão com o BD
createConnection();

/*
    instrução para rodar BD no docker, usando terminal:
    docker run --name postgres -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
    --name, -e, -p definidos no ormconfig
    porta do lado esquerdo pode mudar, ai tem de mudar no ormconfig, mas do lado direito não pode mudar.
    O -d garante que o terminal não fica preso na execução e a última palavra é a imagem, caso ainda não tenha.
*/
