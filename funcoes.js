const cachorros = require('./database/cachorros.json');
const fs = require('fs')
const path = require('path')

function salvar(){
    let arquivo = path.resolve('./database/cachorros.json')
    let json = JSON.stringify(cachorros)
    fs.writeFileSync(arquivo, json)
}

function buscar(id){
    let cachorro = cachorros.find((cachorro) => cachorro.id == id) 
    if (cachorro != undefined){
        return cachorro
    }
    console.log(`Não existe cachorro com o id ${id}`)
}

function listar(){
    console.table(cachorros)
}

function descrever(id){
    let cachorro = buscar(id)
    if (cachorro != undefined){
        console.table(cachorro)
    }
}

function adicionar(informacoes){
    informacoes.vacinas = []
    informacoes.servicos = []
    let ids = cachorros.map((cachorro) => cachorro.id)
    let id = 1 + Math.max(...ids)
    informacoes.id = id
    cachorros.push(informacoes)
    salvar()
}

function auxindice(id){
    for (let [i, cachorro] of cachorros) {
        if (id == cachorro.id){
            
            return i
        }
    }
    return -1
}

function vacinar(id, vacina, data){
    let vax = {nome: vacina, data: data}
    let indice = auxindice(id)
    if (indice != -1){
        cachorros[indice].vacinas.push(vax)
    }else{
        console.log('Cachorro inexistente')
    }
}

function atribuirServico(id, servico, data){
    let sev = {nome: servico, data: data}
    let indice = auxindice(id)
    if (indice != -1){
        cachorros[indice].servicos.push(sev)
    }else{
        console.log('Cachorro inexistente')
    }
}

function remover(id){
    let indice = auxindice(id)
    if (indice != -1){
        cachorros.splice(indice, 1)
    }else{
        console.log('Cachorro inexistente')
    }
}

module.exports = {
    remover, atribuirServico, vacinar, adicionar, descrever, listar
}