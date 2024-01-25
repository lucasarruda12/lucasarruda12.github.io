// const MapeadorDeTabela = require('./src/mapeadorDeTabela.js');

document.addEventListener('DOMContentLoaded', () => {
    const materias_do_semestre = document.getElementById('semestre_table');
    const mapeadorDoSemestre = new MapeadorDeTabela(materias_do_semestre);

    const periodo = new Periodo('23M12');
    const turma = new Turma('TURMA', periodo.getPeriodoFormatado(), 'TT');
    const semestre = new Semestre();
    semestre.adicionar_turma(turma);

    mapeadorDoSemestre.renderizar(semestre);
    console.log(mapeadorDoSemestre.reconstruirSemestre());
})