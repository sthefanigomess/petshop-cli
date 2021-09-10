const cachorros = require('./database/cachorros.json');

module.exports = {
    listar: function(){
        console.table(cachorros);
    }
}