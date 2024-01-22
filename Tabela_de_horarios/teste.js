document.addEventListener('DOMContentLoaded',() => {
    montar_tabela();

    const semestre_form = document.getElementById('semestre_form');
    const nome = document.getElementById('nome').value;
    const abreviacao =  document.getElementById('abreviacao').value;
    const periodo = document.getElementById('periodo').value;

    semestre_form.addEventListener('submit', (e) => {
        e.preventDefault();
        adicionar_turma(nome, abreviacao, periodo);
    })
})

function adicionar_turma(nome, abreviacao, periodo){
    const elemento_turma = criar_elemento_turma(nome, abreviacao, periodo);
    const semestre_table = document.getElementById('semestre_table');

    semestre_table.appendChild(elemento_turma);
}

function criar_elemento_turma(nome, abreviacao, periodo){
    const parametros = [nome, abreviacao, periodo];
    const linha = document.createElement('tr');

    parametros.forEach((parametro)=>{
        let celula = document.createElement('td');
        celula.innerHTML = parametro;
        linha.appendChild(celula);
    })

    return linha
}

function montar_tabela(){
    const tabela = document.getElementById('horario_completo_table');

    for (let tr of tabela.children[0].children){
        for (let td of tr.children){
            td.innerHTML = td.classList;
        }
    }
}