class GombView{
    #parentElement
    constructor(parentElement){
        this.#parentElement = parentElement
        this.#gombMegjelenit(this.#parentElement)
    }

    #gombMegjelenit(pElem){
        let txt = `<button id="szamolas">MATEK</button>`
        txt += `<button id="iras">ÍRÁS</button>`
        txt += `<button id="olvasas">OLVASÁS</button>`

        pElem.html(txt);
    }
    
    
}

export default GombView