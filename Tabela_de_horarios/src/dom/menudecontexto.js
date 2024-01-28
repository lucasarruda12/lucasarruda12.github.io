class MenuDeContexto {
    #alvo

    constructor(alvo){
        this.#alvo = alvo;
    }

    criar(event){
        this.#alvo.style.backgroundColor = 'grey';
        this.#alvo.style.color = 'white';

        const menu = document.createElement('div');
        menu.id = 'menuDeContexto';
        menu.style.position = 'absolute';
        menu.style.left = event.clientX + 'px';
        menu.style.top = event.clientY + 'px';

        const editar = document.createElement('div');
        editar.innerHTML = 'EDITAR';
        editar.id = 'editar';
        editar.addEventListener('click', () => {
            this.#editarTurmaDoSemestre(this.#alvo);
            this.remover(menu);
        })

        const remover = document.createElement('div');
        remover.innerHTML = 'REMOVER';
        remover.id = 'remover;';
        remover.addEventListener('click', () => {
            this.#removerTurmaDoSemestre(this.#alvo);
            this.remover(menu);
        })

        for (let elemento of [editar, remover]){
            menu.appendChild(elemento);
        }

        document.getElementsByTagName('body')[0].appendChild(menu);

        return menu;
    }

    #removerTurmaDoSemestre(alvo){
        const turmasDoSemestre = document.getElementById('semestre_table');
        const semestre = new MapeadorDeTabela(turmasDoSemestre).reconstruirSemestre();

        const turma = new Turma(
            alvo.children[0].innerHTML,
            new Periodo(alvo.children[1].innerHTML),
            alvo.children[2].innerHTML
        );

        semestre.remover_turma(turma);

        new MapeadorDeTabela(turmasDoSemestre).renderizar(semestre);
    }

    #editarTurmaDoSemestre(alvo){
        const formulario = document.getElementById('semestre_form');
        const nome = alvo.children[0].innerHTML;
        const periodo = alvo.children[1].innerHTML;
        const abreviacao = alvo.children[2].innerHTML;

        new GestorDeFormulario(formulario).mudarValores(nome, abreviacao, periodo);
        this.#removerTurmaDoSemestre(alvo);
    }

    remover(menu){
        menu.remove();

        this.#alvo.style.backgroundColor = 'white';
        this.#alvo.style.color = 'grey';
    }
}