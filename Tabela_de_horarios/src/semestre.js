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

  static remover_turma(novaTurma){
    this.#turmas.forEach((turma, index) => {
      if (essa_turma.e_igual_a(nova_turma)){
        this.#turmas.splice(index, 1);
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
    this.#resetarElemento();

    for (let turma of this.#turmas){
      const tr = document.createElement('tr');

      const nome = document.createElement('td');
      nome.innerHTML = turma.getNome();

      const periodo = document.createElement('td');
      periodo.innerHTML = turma.getPeriodo().getPeriodoFormatado();

      const abreviacao = document.createElement('td');
      abreviacao.innerHTML = turma.getAbreviacao();

      for (let elemento of [nome, abreviacao, periodo]){
        tr.appendChild(elemento);
      }

      this.DOMelement.querySelector("tbody").appendChild(tr);
    }
  }

  static #resetarElemento(){
      this.DOMelement.querySelector("tbody").remove()

      const novoBody = document.createElement('tbody');
      this.DOMelement.appendChild(novoBody);
  }
}

// module.exports = Semestre;
