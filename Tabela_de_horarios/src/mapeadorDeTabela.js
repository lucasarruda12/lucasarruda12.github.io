// const Semestre = require('./semestre.js');
// const Turma = require('./turma.js');
// const Periodo = require('./periodo.js');

class MapeadorDeTabela {
    #DOMelement;

    constructor(DOMelement){
        this.#DOMelement = DOMelement;
    }

    renderizar(listaDeTurmas){
        for (let turma of listaDeTurmas.getTurmas()){
            const tr = document.createElement('tr');

            const nome = document.createElement('td');
            nome.innerHTML = turma.getNome();

            const periodo = document.createElement('td');
            periodo.innerHTML = turma.getPeriodo();

            const abreviacao = document.createElement('td');
            abreviacao.innerHTML = turma.getAbreviacao();

            tr.appendChild(nome);
            tr.appendChild(abreviacao);
            tr.appendChild(periodo);

            this.#DOMelement.appendChild(tr);
        }
    }
}

// module.exports = MapeadorDeTabela;