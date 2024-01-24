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

test('Toda turma é igual a ela mesma', () => {
    expect(minhaTurma.e_igual_a(minhaTurma)).toBeTruthy();
})

test('Turmas iguais tem todos os mesmos atributos', () => {
    const minhaSegundaTurma = new Turma('Minha Segunda Turma', periodo, abreviacao);
    const minhaTerceiraTurma = new Turma(nome, periodo, 'MTT');

    const meuOutroPeriodo = new Periodo('23M12');
    const minhaQuartaTurma = new Turma(nome, meuOutroPeriodo, abreviacao);

    expect(minhaTurma.e_igual_a(minhaSegundaTurma)).toBeFalsy();
    expect(minhaTurma.e_igual_a(minhaTerceiraTurma)).toBeFalsy();
    expect(minhaTurma.e_igual_a(minhaQuartaTurma)).toBeTruthy();
})

test('Turmas conflitam se seus períodos conflitam', () => {
    const meuPeriodo = new Periodo('23M12');
    const meuOutroPeriodo = new Periodo('35M12');

    const minhaTurma = new Turma(nome, meuPeriodo, abreviacao);
    const minhaOutraTurma = new Turma(nome, meuOutroPeriodo, abreviacao);

    expect(minhaTurma.conflita_com(minhaOutraTurma)).toBeTruthy();
})

test('Turmas conflitam somente se seus períodos conflitam', () => {
    const meuPeriodo = new Periodo('23M12');
    const meuOutroPeriodo = new Periodo('56M12');

    const minhaTurma = new Turma(nome, meuPeriodo, abreviacao);
    const minhaOutraTurma = new Turma(nome, meuOutroPeriodo, abreviacao);

    expect(minhaTurma.conflita_com(minhaOutraTurma)).toBeFalsy();
})