// const arrays_sao_iguais = require('./util/igualdade_de_arrays.js');

class Periodo {
    #dias;
    #turno;
    #horarios;

    constructor(periodo){
        if(!this.#e_valido(periodo)) throw new Error('Formatação de periodo Inválida ' + periodo);

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

    getPeriodoFormatado(){
        return (this.#dias.join('') + this.#turno + this.#horarios.join(''));
    }

    e_igual_a(outroPeriodo){
        if (this == outroPeriodo) return true;

        if (
            arrays_sao_iguais(this.#dias, outroPeriodo.getDias()) &&
            this.#turno === outroPeriodo.getTurno() &&
            arrays_sao_iguais(this.#horarios, outroPeriodo.getHorarios())
        ) {
            return true;
        }

        return false;
    }

    conflita_com(outroPeriodo){
        if (this.e_igual_a(outroPeriodo)) return true;

        if (
            this.#conflitaNosDias(outroPeriodo) &&
            this.#conflitaNosHorarios(outroPeriodo) &&
            this.#turno == outroPeriodo.getTurno()
        ) {
            return true;
        }

        return false;
    }

    #conflitaNosDias(outroPeriodo){
        let conflitoNosDias = false;
        for (let dia of this.#dias) {
            if (outroPeriodo.getDias().includes(dia)) conflitoNosDias = true;
        }

        return conflitoNosDias;
    }

    #conflitaNosHorarios(outroPeriodo){
        let conflitoNosHorarios = false;
        for (let horario of this.#horarios) {
            if (outroPeriodo.getHorarios().includes(horario)) conflitoNosHorarios = true;
        }

        return conflitoNosHorarios;
    }
}

// module.exports = Periodo;