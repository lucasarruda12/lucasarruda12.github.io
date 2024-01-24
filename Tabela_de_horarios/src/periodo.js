module.exports = class Periodo {
    #dias;
    #turno;
    #horarios;

    constructor(periodo){
        if(!this.#e_valido(periodo)) throw new Error('Formatação de periodo Inválida');

        const periodo_separado = this.#separar(periodo);
        this.#dias = periodo_separado.dias;
        this.#turno = periodo_separado.turno;
        this.#horarios = periodo_separado.horario;
    }

    #e_valido(periodo){
        const regexPeriodo = /^[2-7]{1,6}[M|T][1-6]{1,6}$|^[2-7]{1,6}N[1-4]{1,4}$/;
        return regexPeriodo.test(periodo);
    }

    #separar(periodo){
        let retorno = {};
        const periodo_separado = periodo.match(/[MNT]|[^MNT]+/g);

        retorno.dias = periodo_separado[0].split('');
        retorno.turno = periodo_separado[1];
        retorno.horario = periodo_separado[2].split('');

        return retorno;
    }

    getDias(){
        return this.#dias;
    }

    getTurno(){
        return this.#turno;
    }

    getHorarios(){
        return this.#horarios;
    }

    e_igual_a(outroPeriodo){
        
    }
}