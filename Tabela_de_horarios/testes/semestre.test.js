const Semestre = require('../src/semestre.js');
const Turma = require('../src/turma.js');
const Periodo = require('../src/periodo.js');

const nome = 'Turma Teste';
const periodo = new Periodo('23M12');
const abreviacao = 'TT';
const minhaTurma = new Turma(nome, periodo, abreviacao);
const minhaOutraTurma = new Turma('Minha Outra Turma', periodo, 'MOT');

test('Getters', () => {
    const meuSemestre = new Semestre();
    meuSemestre.adicionar_turma(minhaTurma);

    expect(meuSemestre.getTurmas()[0].e_igual_a(minhaTurma)).toBeTruthy();
})

test('Não deve ser possível adicionar turma já existente ao semestre', () => {
    const meuSemestre = new Semestre();
    meuSemestre.adicionar_turma(minhaTurma);

    expect(() => new Semestre.adicionar_turma(minhaTurma)).toThrow(Error);
})

test('Remover turmas', () => {
    const meuSemestre = new Semestre();
    meuSemestre.adicionar_turma(minhaTurma);
    meuSemestre.adicionar_turma(minhaOutraTurma);

    expect(meuSemestre.getTurmas().length).toEqual(2);
    expect(meuSemestre.getTurmas()[0].e_igual_a(minhaTurma)).toBeTruthy();
    expect(meuSemestre.getTurmas()[1].e_igual_a(minhaOutraTurma)).toBeTruthy();

    meuSemestre.remover_turma(minhaOutraTurma);

    expect(meuSemestre.getTurmas().length).toEqual(1);
    expect(meuSemestre.getTurmas()[0].e_igual_a(minhaTurma)).toBeTruthy();
})