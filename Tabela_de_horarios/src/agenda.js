class Agenda {
  static #turmas = [];
  static DOMelement;

  static pegar_turmas(){
    return this.#turmas;
  }

  static adicionar_turma(novaTurma){
    if (this.#ha_repeticao(novaTurma)) throw new Error('Turma já existe na agenda');
    if (this.#ha_conflito(novaTurma)) throw new Error('Há conflito de horário');

    this.#turmas.push(novaTurma);
    this.#renderizar_elementos();
    Tabela.renderizar();
  }

  static remover_turma(novaTurma){
    for (let turma of this.#turmas) {
      const index = this.#turmas.indexOf(turma);

      if (novaTurma.e_igual_a(turma)){
        this.#turmas.splice(index, 1);
      }
    }
  }

  static #ha_repeticao(novaTurma){
    for (let turma of this.#turmas){
      if (novaTurma.e_igual_a(turma)) return true;
    }

    return false;
  }

  static #ha_conflito(novaTurma){
    for (let turma of this.#turmas) {
      if (novaTurma.conflita_com(turma)) return true;
    }

    return false;
  }

  static #renderizar_elementos(){
    this.DOMelement.querySelector("tbody").remove()

    const novoBody = document.createElement('tbody');
    this.DOMelement.appendChild(novoBody);

    for (let turma of this.#turmas){
      const tr = turma.formar_tr();

      this.DOMelement.querySelector("tbody").appendChild(tr);
    }
  }
}

// module.exports = Agenda;
