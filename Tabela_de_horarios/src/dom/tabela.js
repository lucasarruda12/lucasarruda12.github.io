class Tabela {
  static DOMelement;

  static iniciar(){
    while(this.DOMelement.firstChild){
      this.DOMelement.removeChild(this.DOMelement.lastChild);
    }

    const thead = document.createElement("thead"); 
    const th = document.createElement("tr");

    ["SEG", "TER", "QUA", "QUI", "SEX", "SAB"].forEach((dia) => {
      const td = document.createElement("td");
      td.innerHTML = dia;

      th.appendChild(td);
    }) 

    thead.appendChild(th);
    this.DOMelement.appendChild(thead);

    ["M", "T", "N"].forEach((turno) => {
      const tbody = document.createElement("tbody");
      tbody.classList.add(turno);

      for (let i = 1; i < 7; i++){
        if (turno == "N" && i >= 5) break;

        const tr = document.createElement("tr");
        tr.id = "horario-" + i;

        for(let j = 2; j < 8; j++){
          const td = document.createElement("td");
          td.innerHTML = i;
          td.id = "dia-" + i + "-" + j; 

          tr.appendChild(td);
        }

        tbody.appendChild(tr);
        this.DOMelement.appendChild(tbody);
      }
    })
  }

  static renderizar(){
    this.iniciar(); 

    for (let turma of Agenda.pegar_turmas()){
      const periodo = turma.getPeriodo();

      for (let dia of periodo.getDias()){
        for (let horario of periodo.getHorarios()){
          const node = this.DOMelement.querySelector("." + periodo.getTurno())
                            .querySelector("#horario-" + horario)
                            .querySelector("#dia-" + horario + "-" + dia);

          node.style.backgroundColor = "pink";
          node.innerHTML = turma.getAbreviacao();
        }
      }
    }
  };
}
