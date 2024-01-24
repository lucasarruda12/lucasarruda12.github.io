const Turma = require('../src/turma');
const Periodo = require('../src/periodo');

const nome = 'Turma Teste';
const periodo = new Periodo('23M12');
const abreviacao = 'TT';
const minhaTurma = new Turma(nome, periodo, abreviacao);

const outroPeriodo = new Periodo('23T12');

test('getters', () => {
    expect(minhaTurma.getNome()).toEqual('Turma Teste');
    expect(minhaTurma.getPeriodo()).toEqual(periodo);
    expect(minhaTurma.getAbreviacao()).toEqual('TT');
})