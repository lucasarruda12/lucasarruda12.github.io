class MenuDeContexto {
    #alvo

    constructor(alvo){
        this.#alvo = alvo;
    }

    criar(event){
        const menu = document.createElement('div');
        menu.id = 'menuDeContexto';
        menu.style.position = 'absolute';
        menu.style.left = event.clientX + 'px';
        menu.style.top = event.clientY + 'px';

        const editar = document.createElement('div');
        editar.innerHTML = 'EDITAR';
        editar.id = 'editar';

        const remover = document.createElement('div');
        remover.innerHTML = 'REMOVER';
        remover.id = 'remover;'

        for (let elemento of [editar, remover]){
            menu.appendChild(elemento);
        }

        document.getElementsByTagName('body')[0].appendChild(menu);

        return menu;
    }
}