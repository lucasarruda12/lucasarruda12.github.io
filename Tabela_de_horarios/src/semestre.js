class Semestre {
  static DOMelement;
  static #turmas = [];

  static listar_turmas(){
    return this.#turmas;
  }

  static adicionar_turma(novaTurma){
    if(this.#ha_repeticao(novaTurma)) throw new Error('Turma já existe no semestre');

    this.#turmas.push(novaTurma);
    this.#renderizar_elementos();
  }

  static remover_turma(nova_turma){
    this.#turmas.forEach((essa_turma, index) => {
      if (essa_turma.e_igual_a(nova_turma)){
        this.#turmas.splice(index, 1);

        this.#renderizar_elementos();
        return;
      }
    }) 
  }

  static #ha_repeticao(novaTurma){
    for (let turma of this.#turmas){
      if (novaTurma.e_igual_a(turma)) return true;
    }

    return false;
  }

  static #renderizar_elementos(){
    this.DOMelement.querySelector("tbody").remove()

    const novoBody = document.createElement('tbody');
    this.DOMelement.appendChild(novoBody);

    for (let turma of this.#turmas){
      const tr = turma.formar_tr();
  
      tr.addEventListener("click", () => {
        Agenda.adicionar_turma(turma);
      })

      this.DOMelement.querySelector("tbody").appendChild(tr);
    }
  }
}

// module.exports = Semestre;
