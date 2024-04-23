class GestorDeFormulario {
    #DOMelement;

    constructor(DOMelement){
        this.#DOMelement = DOMelement
    }

    montarTurma(){
        const nome = this.#DOMelement.children[0].value;
        const abreviacao = this.#DOMelement.children[1].value;
        const periodo = new Periodo(this.#DOMelement.children[2].value);

        const turma = new Turma(nome, periodo, abreviacao);

        this.mudarValores('', '', '');
        
        return turma;
    }

    mudarValores(nome, abreviacao, periodo){
        this.#DOMelement.children[0].value = nome;
        this.#DOMelement.children[1].value = abreviacao;
        this.#DOMelement.children[2].value = periodo;
    }
}
