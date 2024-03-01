class QuizView {
    #list
    #parentElement
    constructor(parentElemtn, list) {
        this.#parentElement = parentElemtn;
        this.#list = list
        const number = Math.floor(Math.random() * this.#list.length) + 1;
        this.#KerdesValaszMegjelenito(this.#parentElement, number)
    }

    #KerdesValaszMegjelenito(prnt, index) {
        let text = ""
        text += `<h1 class = "kerdes">${this.#list[index].kerdes}</h1>`;
        text += `<div class = "valasz">${this.#list[index].valaszEgy}</div>`;
        text += `<div class = "valasz">${this.#list[index].valaszKetto}</div>`;
        text += `<div class = "valasz">${this.#list[index].valaszHarom}</div>`;
        prnt.html(text)

    }

}

export default QuizView