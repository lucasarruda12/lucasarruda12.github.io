const Periodo = require('../src/periodo');

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