const cachorros = require('./database/cachorros.json');
const fs = require('fs');

module.exports = {
    listar: function(){
        let copiaDeCachorros = cachorros.map(
            c => {
                let cachorroCopia = JSON.parse(JSON.stringify(c));
                delete cachorroCopia.vacinas;
                delete cachorroCopia.servicos;
                return cachorroCopia;
            }
        )
        console.table(copiaDeCachorros);
    },
    descrever: function(pos) {

        // Verificando se existe um cachorro cadastrado na posição pos
        if(pos < 0 || pos >= cachorros.length){
            console.log("Cachorro inexistente.");
            return;
        }

        let cachorro = cachorros[pos];
        console.log(`Nome: ${cachorro.nome} (${cachorro.sexo == "m"?"Macho":"Fêmea"})`);
        console.log(`Data de Nascimento: ${cachorro.dataDeNascimento}`);
        console.log(`Peso: ${cachorro.peso} kg`);
        console.log(`Castrado: ${cachorro.castrado?"Sim":"Não"}`);
        console.log('')
        console.log("Vacinas");
        console.table(cachorro.vacinas);
        console.log('')
        console.log("Serviços")
        console.table(cachorro.servicos);

    },
    adicionar: (nome, sexo, castrado, dataDeNascimento, peso) => {

        let cachorroNovo = {
            nome,
            sexo,
            castrado,
            dataDeNascimento,
            peso,
            vacinas:[],
            servicos:[]
        }

        cachorros.push(cachorroNovo);

        fs.writeFileSync('./database/cachorros.json',JSON.stringify(cachorros,null,4));
    },
    vacinar: (index, vacina) => {
        if(index < 0 || index >= cachorros.length){
            console.log("Cachorro inexistente.")
            return;
        }
        cachorros[index].vacinas.push({
            nome: vacina,
            data: new Date().toISOString().substr(0,10)
        });
        fs.writeFileSync('./database/cachorros.json',JSON.stringify(cachorros,null,4));
    }
}