class Turma {
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

  e_igual_a(outraTurma){
    if(
      this.#nome == outraTurma.getNome() &&
      this.#abreviacao == outraTurma.getAbreviacao() &&
      this.#periodo.e_igual_a(outraTurma.getPeriodo())
    ) {
      return true;
    }

    return false;
  }

  conflita_com(outraTurma){
    if (this.#periodo.conflita_com(outraTurma.getPeriodo())) {
        return true;
    }
  }

  formar_tr(){
    const tr = document.createElement('tr');

    const nome = document.createElement('td');
    nome.innerHTML = this.#nome;

    const periodo = document.createElement('td');
    periodo.innerHTML = this.#periodo.getPeriodoFormatado();

    const abreviacao = document.createElement('td');
    abreviacao.innerHTML = this.#abreviacao;

    for (let elemento of [nome, abreviacao, periodo]){
      tr.appendChild(elemento);
    }

    return tr;
  }
}
