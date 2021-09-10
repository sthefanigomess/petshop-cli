const cachorros = require('./database/cachorros.json');

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
    }
}