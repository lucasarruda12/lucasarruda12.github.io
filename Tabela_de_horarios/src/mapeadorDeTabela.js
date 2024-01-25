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

            this.#DOMelement.children[0].appendChild(tr);
        }
    }

    reconstruirSemestre(){
        const semestre = new Semestre();

        for (let i = 1; i < this.#DOMelement.children[0].children.length; i++){
            const row = this.#DOMelement.children[0].children[i];
            const nome = row.children[0].innerHTML;
            const abreviacao = row.children[1].innerHTML;
            const periodo = new Periodo(row.children[2].innerHTML);

            const turma = new Turma(nome, periodo, abreviacao);
            semestre.adicionar_turma(turma);
        }

        return semestre;
    }
}

// module.exports = MapeadorDeTabela;