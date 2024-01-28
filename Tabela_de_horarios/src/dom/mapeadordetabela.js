// const Semestre = require('./semestre.js');
// const Turma = require('./turma.js');
// const Periodo = require('./periodo.js');

class MapeadorDeTabela {
    #DOMelement;

    constructor(DOMelement){
        this.#DOMelement = DOMelement;
    }

    renderizar(listaDeTurmas){
        this.#resetarElemento();

        for (let turma of listaDeTurmas.getTurmas()){
            const tr = document.createElement('tr');

            const nome = document.createElement('td');
            nome.innerHTML = turma.getNome();

            const periodo = document.createElement('td');
            periodo.innerHTML = turma.getPeriodo().getPeriodoFormatado();

            const abreviacao = document.createElement('td');
            abreviacao.innerHTML = turma.getAbreviacao();

            for (let elemento of [nome, periodo, abreviacao]){
                tr.appendChild(elemento);
            }
            
            tr.addEventListener('contextmenu', (event) => {
                event.preventDefault();

                const menu = new MenuDeContexto(tr);
                const node = menu.criar(event);
                const body = document.getElementsByTagName('body')[0];

                body.addEventListener('mousedown', (event) => {
                    if (!node.contains(event.target)) {
                        menu.remover(node);
                    }
                });
            });

            this.#DOMelement.children[1].appendChild(tr);
        }
    }

    reconstruirSemestre(){
        const semestre = new Semestre();

        for (let row of this.#DOMelement.children[1].children) {
            const nome = row.children[0].innerHTML;
            const abreviacao = row.children[2].innerHTML;
            const periodo = new Periodo(row.children[1].innerHTML);

            const turma = new Turma(nome, periodo, abreviacao);
            semestre.adicionar_turma(turma);
        }

        return semestre;
    }

    // reconstruirAgenda(){
    //     const agenda = new Agenda();

    //     for (let i = 1; i < this.#DOMelement.children[1].children.length; i++){
    //         const row = this.#DOMelement.children[1].children[i];
    //         const nome = row.children[0].innerHTML;
    //         const abreviacao = row.children[1].innerHTML;
    //         const periodo = new Periodo(row.children[2].innerHTML);

    //         const turma = new Turma(nome, periodo, abreviacao);
    //         agenda.adicionar_turma(turma);
    //     }

    //     return agenda;
    // }

    #resetarElemento(){
        this.#DOMelement.children[1].remove()

        const novoBody = document.createElement('tbody');
        this.#DOMelement.appendChild(novoBody);
    }
}

// module.exports = MapeadorDeTabela;