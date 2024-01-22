module.exports = class Periodo {
    #dias;
    #turno;
    #horario;

    constructor(periodo){
        if(!this.#e_valido(periodo)) throw new Error('Formatação de periodo Inválida');
    }

    #e_valido(periodo){
        const regexPeriodo = /^[2-7]{1,6}[M|T][1-6]{1,6}$|^[2-7]{1,6}N[1-4]{1,4}$/;
        return regexPeriodo.test(periodo);
    }

    #separar(periodo){

    }
}