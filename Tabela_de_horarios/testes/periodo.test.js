const Periodo = require('../src/periodo');


test('Getters', () => {
    expect(new Periodo('23M12').getDias()).toEqual(['2', '3']);
    expect(new Periodo('23M12').getTurno()).toEqual('M');
    expect(new Periodo('23M12').getHorarios()).toEqual(['1', '2']);
})

test('Periodo não pode ser vazio', () => {
    const vazio = "";
    expect(() => new Periodo(vazio)).toThrow(Error);
})

test('dias da semana são 234567', () => {
    expect(() => new Periodo("1M12")).toThrow(Error);
    expect(() => new Periodo("8M12")).toThrow(Error);
    expect(() => new Periodo("9M12")).toThrow(Error);
    expect(() => new Periodo("19M12")).toThrow(Error);
    expect(() => new Periodo("189M12")).toThrow(Error);
})

test('Turno deve ser M, T ou N', () => {
    expect(() => new Periodo("23P12")).toThrow(Error);

    expect(() => new Periodo("23M12")).toBeDefined();
    expect(() => new Periodo("23T12")).toBeDefined();
    expect(() => new Periodo("23N12")).toBeDefined();
})

test('Horário é 123456', () => {
    expect(() => new Periodo("23M78")).toThrow(Error);
    expect(() => new Periodo("23M78")).toThrow(Error);
    expect(() => new Periodo("23M9")).toThrow(Error);
})

test('À noite não tem 56', () => {
    expect(() => new Periodo("23N56")).toThrow(Error);
})

test('Todos os componentes são necessários', () => {
    expect(() => new Periodo(23)).toThrow(Error);
    expect(() => new Periodo(M)).toThrow(Error);
    expect(() => new Periodo(12)).toThrow(Error);
})

test('Todo período é igual a ele mesmo', () => {
    const meuPeriodo = new Periodo('23M12');
    expect(meuPeriodo.e_igual_a(meuPeriodo)).toBeTruthy();
})

test('Periodos iguais dividem dias, turno e horarios', () => {
    const meuPeriodo = new Periodo('23M12');
    const meuOutroPeriodo = new Periodo('23M12');

    expect(meuPeriodo.e_igual_a(meuOutroPeriodo)).toBeTruthy();
})

test('Periodos diferentes não são iguais', () => {
    const meuPeriodo = new Periodo('23M12');
    const meuPeriodoTarde = new Periodo('23T12');
    const meuPeriodoNaTerca = new Periodo('3T12');
    const meuPeriodoNoFimDoHorario= new Periodo('23M56');
    const meuOutroPeriodo = new Periodo('357T12');

    expect(meuPeriodo.e_igual_a(meuOutroPeriodo)).toBeFalsy();
    expect(meuPeriodo.e_igual_a(meuPeriodoNaTerca)).toBeFalsy();
    expect(meuPeriodo.e_igual_a(meuPeriodoNoFimDoHorario)).toBeFalsy();
    expect(meuPeriodo.e_igual_a(meuPeriodoTarde)).toBeFalsy();
})

test('Periodos iguais conflitam', () => {
    const meuPeriodo = new Periodo('23M12');
    const meuOutroPeriodo = new Periodo('23M12');

    expect(meuPeriodo.conflita_com(meuPeriodo)).toBeTruthy();
    expect(meuPeriodo.conflita_com(meuOutroPeriodo)).toBeTruthy();
})

test('Periodos não podem dividir o mesmo horário no mesmo dia', () => {
    const meuPeriodo = new Periodo('23M12');
    const meuOutroPeriodo = new Periodo('35M12');

    expect(meuPeriodo.conflita_com(meuOutroPeriodo)).toBeTruthy();
})

test('Períodos podem dividir horário e dia em turnos diferentes', () => {
    const meuPeriodo = new Periodo('23M12');
    const meuOutroPeriodo = new Periodo('23T12');

    expect(meuPeriodo.conflita_com(meuOutroPeriodo)).toBeFalsy();
})

test('Periodos podem dividir horario em dias diferentes', () => {
    const meuPeriodo = new Periodo('23M12');
    const meuOutroPeriodo = new Periodo('45M12');

    expect(meuPeriodo.conflita_com(meuOutroPeriodo)).toBeFalsy();
})

test('Périodos podem dividir o mesmo dia, desde que em horários diferentes', () => {
    const meuPeriodo = new Periodo('23M12');
    const meuOutroPeriodo = new Periodo('23M34');

    expect(meuPeriodo.conflita_com(meuOutroPeriodo)).toBeFalsy();
})