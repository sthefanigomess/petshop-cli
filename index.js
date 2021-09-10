const inquirer = require('inquirer');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

const acoes = require("./settings/acoes");
const cachorros = require('./database/cachorros.json');
const perguntas = require('./settings/perguntas');


inquirer.prompt({type:"loop",name:"lalala",message:"o quê?", questions: perguntas})
.then(
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