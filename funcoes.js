const cachorros = require('./database/cachorros.json');

module.exports = {
    listar: function(){
        let copiaDeCachorros = cachorros.map(
            c => {
                let cachorroCopia = Object.assign(c,{});
                delete cachorroCopia.vacinas;
                delete cachorroCopia.servicos;
                return cachorroCopia;
            }
        )
        console.table(copiaDeCachorros);
    }
}