class GombView{
    #lista
    #parentElement
    
    constructor(parentElement, lista){
        this.#parentElement = parentElement
        this.#lista = lista;
        this.#gombMegjelenit(this.#parentElement, this.#lista)
    }

    #gombMegjelenit(pElem, list){
        let txt = ""
        list.forEach(elem => {
            txt += `<button id="${elem}">${elem}</button>`
        });
        pElem.html(txt);
    }
    
    
}

export default GombView