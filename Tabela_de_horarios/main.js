// const MapeadorDeTabela = require('./src/mapeadorDeTabela.js');

document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementsByTagName('body')[0];

    body.addEventListener('mousedown', (event) => {
        if (event.button != 2) return;

        const menu = new MenuDeContexto();
        const node = menu.criar(event);

        body.addEventListener('mousedown', (event) => {
            if(!node.contains(event.target) || event.button == 2) {
                node.remove();
            }
        })
    });

    const materias_do_semestre = document.getElementById('semestre_table');
    const mapeadorDoSemestre = new MapeadorDeTabela(materias_do_semestre);

    const formulario = document.getElementById('semestre_form')
    const gestorDeFormulario = new GestorDeFormulario(formulario);

    const semestre = new Semestre();

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        const turma = gestorDeFormulario.montarTurma();
        semestre.adicionar_turma(turma);
        mapeadorDoSemestre.renderizar(semestre);
    });
})