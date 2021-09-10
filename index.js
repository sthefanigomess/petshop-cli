const inquirer = require('inquirer');

const ADICIONAR = "Adicionar";
const LISTAR = "Listar";
const REMOVER = "Remover";

const cachorros = require('./database/cachorros.json');
const perguntas = require('./perguntas');

inquirer.prompt(perguntas).then(
    respostas => {
        
        switch(respostas.acao){
            case LISTAR:
                console.log("Listando...");
                break
            case ADICIONAR:
                console.log("Adicionando...");
                break;
            case REMOVER:
                console.log("Removendo...");
                break;
        }

        console.log(respostas);
    }
)