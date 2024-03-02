class FajtaView{
    #text
    #parentElement
    constructor(parentElement, text){
        this.#parentElement = parentElement
        this.#text = text;
        this.#fajtaSzovegMegjelenit(this.#parentElement, this.#text);
    }

    #fajtaSzovegMegjelenit(pElem, text){
        let title = `<p>${text}</p>`
        pElem.html(title);
    }

}

export default FajtaView