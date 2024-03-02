class QuizView {
    #list
    #parentElement
    #index
    constructor(parentElemtn, list, index) {
        this.#parentElement = parentElemtn;
        this.#list = list
        this.#index = index;
        this.#KerdesValaszMegjelenito(this.#parentElement, this.#index)
    }

    #KerdesValaszMegjelenito(prnt, index) {
        let text = ""
        text += `<h1 class = "kerdes">${this.#list[index].kerdes}</h1>`;
        text += `<button id = "valaszEgy">${this.#list[index].valaszEgy}</button>`;
        text += `<button id = "valaszKetto">${this.#list[index].valaszKetto}</button>`;
        text += `<button id = "valaszHarom">${this.#list[index].valaszHarom}</button>`;
        prnt.html(text)

    }

}

export default QuizView