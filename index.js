const inquirer = require('inquirer');

const ADICIONAR = "Adicionar";
const LISTAR = "Listar";
const REMOVER = "Remover";

const cachorros = [
    {
        id:1,
        nome:"João Grilo",
        peso:10,
        vacinas:[],
        servicos:[]
    },
    {
        id:2,
        nome:"Mascavo",
        peso:14,
        vacinas:[],
        servicos:[]
    },
    {
        id:3,
        nome:"Bronto",
        peso:30,
        vacinas:[],
        servicos:[]
    }
];

const perguntas = [
    {
        type: 'list',
        name: 'acao',
        message: 'O que deseja fazer com os cachorros?',
        choices: [LISTAR,ADICIONAR,REMOVER]
    },
    {
        type: 'input',
        name: 'nomeDoCachorro',
        message: 'Digite o nome do cachorro:',
        when: respostas => respostas.acao == ADICIONAR,
        validate: valor => valor?true:'Digite um nome válido'
    },
    {
        type: 'input',
        name: 'pesoDoCachorro',
        message: 'Digite o peso do cachorro:',
        when: respostas => respostas.acao == ADICIONAR,
        validate: peso => {
            if(!isNaN(peso) && peso > 0){
                return true;
            }
            return 'Digite um peso válido';
        }
    },
    {
        type: 'input',
        name: 'idCachorroParaRemover',
        message: 'Qual o id do cachorro que deseja remover?',
        when: respostas => respostas.acao == REMOVER
    },
    {
        type: 'confirm',
        name: 'confirmaRemocao',
        message: 'Tem certeza que deseja remover o cachorro?',
        default: false,
        when: respostas => respostas.acao == REMOVER
    }

]

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