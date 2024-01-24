module.exports = class Semestre {
    #turmas = [];

    getTurmas(){
        return this.#turmas;
    }

    adicionar_turma(turma){
        if(this.#ha_repeticao(turma)) throw Error('Turma já existe no semestre');

        this.#turmas.push(turma);
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
}