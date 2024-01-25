class Agenda {
    #turmas = [];

    getTurmas(){
        return this.#turmas;
    }

    adicionar_turma(novaTurma){
        if (this.#ha_repeticao(novaTurma)) throw new Error('Turma já existe no semestre');
        if (this.#ha_conflito(novaTurma)) throw new Error('Há conflito de horário');

        this.#turmas.push(novaTurma);
    }

    remover_turma(novaTurma){
        for (let turma of this.#turmas) {
            const index = this.#turmas.indexOf(turma);

            if (novaTurma.e_igual_a(turma)){
                this.#turmas.splice(index, 1);
            }
        }
    }

    #ha_repeticao(novaTurma){
        for (let turma of this.#turmas){
            if (novaTurma.e_igual_a(turma)) return true;
        }

        return false;
    }

    #ha_conflito(novaTurma){
        for (let turma of this.#turmas) {
            if (novaTurma.conflita_com(turma)) return true;
        }

        return false;
    }
}

// module.exports = Agenda;