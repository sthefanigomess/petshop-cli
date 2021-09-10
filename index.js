const inquirer = require('inquirer');


const acoes = require("./settings/acoes");
const cachorros = require('./database/cachorros.json');
const perguntas = require('./settings/perguntas');

inquirer.prompt(perguntas).then(
    respostas => {
        
        switch(respostas.acao){
            case acoes.LISTAR:
                console.log("Listando...");
                break
            case acoes.ADICIONAR:
                console.log("Adicionando...");
                break;
            case acoes.REMOVER:
                console.log("Removendo...");
                break;
        }

        console.log(respostas);
    }
)