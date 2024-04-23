const Agenda = require('../src/agenda');
const Periodo = require('../src/periodo');
const Turma = require('../src/turma.js');

const nome = 'Turma Teste';
const periodo = new Periodo('23M12');
const abreviacao = 'TT';
const minhaTurma = new Turma(nome, periodo, abreviacao);
const minhaOutraTurma = new Turma('Minha Outra Turma', periodo, 'MOT');
const meuPeriodoSemConflito = new Periodo('56M12');
const minhaTurmaSemConflito = new Turma('MTSC', meuPeriodoSemConflito, 'MTSC');

test('Getters', () => {
    const minhaAgenda = new Agenda();
    minhaAgenda.adicionar_turma(minhaTurma);

    expect(minhaAgenda.getTurmas()[0].e_igual_a(minhaTurma));
})

test('Não deve ser possível adicionar a mesma turma duas vezes', () => {
    const minhaAgenda = new Agenda();
    minhaAgenda.adicionar_turma(minhaTurma);

    expect(() => minhaAgenda.adicionar_turma(minhaAgenda)).toThrow(Error);
})

test('Não pode haver conflito de turmas', () => {
    const minhaAgenda = new Agenda();
    minhaAgenda.adicionar_turma(minhaTurma);
    expect(() => minhaAgenda.adicionar_turma(minhaOutraTurma)).toThrow(Error);
})

test('Remover turmas', () => {
    const minhaAgenda = new Agenda();
    minhaAgenda.adicionar_turma(minhaTurma);
    minhaAgenda.adicionar_turma(minhaTurmaSemConflito);

    expect(minhaAgenda.getTurmas().length).toEqual(2);
    expect(minhaAgenda.getTurmas()[0].e_igual_a(minhaTurma)).toBeTruthy();
    expect(minhaAgenda.getTurmas()[1].e_igual_a(minhaTurmaSemConflito)).toBeTruthy();

    minhaAgenda.remover_turma(minhaTurmaSemConflito);

    expect(minhaAgenda.getTurmas().length).toEqual(1);
    expect(minhaAgenda.getTurmas()[0].e_igual_a(minhaTurma)).toBeTruthy();
})