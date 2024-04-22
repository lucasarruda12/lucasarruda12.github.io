class Formulario{
  static DOMelement;

  static print(){
  }

  static pegar_turma(){
    const nome = this.DOMelement.querySelector("#nome").value;
    const abreviacao = this.DOMelement.querySelector("#abreviacao").value;
    const texto_periodo = this.DOMelement.querySelector("#periodo").value;
    
    const periodo = new Periodo(texto_periodo);

    return new Turma(nome, periodo, abreviacao);
  }
}
