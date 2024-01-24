const Periodo = require('../src/periodo');

module.exports = class Turma {
    #nome;
    #periodo;
    #abreviacao;

    constructor(nome, periodo, abreviacao){
        this.#nome = nome;
        this.#periodo = periodo;
        this.#abreviacao = abreviacao;
    }

    getNome(){
        return this.#nome;
    }

    getPeriodo(){
        return this.#periodo;
    }

    getAbreviacao(){
        return this.#abreviacao;
    }
}