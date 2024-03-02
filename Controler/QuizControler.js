import { QUIZKERDES } from "../Model/Adatok/QuizKerdesek.js"
import QuizView from "../View/QuizView.js"

class QuizControler {
    #paretnElement
    constructor(paretnElement) {
        this.#paretnElement = paretnElement
        const KEREDESVALASZ = QUIZKERDES
        this.index = 0
        this.#kerdesGeneral(KEREDESVALASZ)
        this.#valaszEll(KEREDESVALASZ, this.index)
    }

    #kerdesGeneral(list) {
        this.index = Math.floor(Math.random() * list.length) + 1;
        new QuizView(this.#paretnElement, list, this.index);
    }

    #valaszEll(list, index) {
        const EgyesValasz = $("#valaszEgy")
        const KettesValasz = $("#valaszKetto")
        const HarmasValasz = $("#valaszHarom")
        EgyesValasz.on("click", () => {
            if (list[index].valaszEgy == list[index].joValasz) {
                console.log("Egyes válasz a jóóóóóÓ!")
                EgyesValasz.css("border", "2px solid green");
                KettesValasz.css("border", "2px solid red");
                HarmasValasz.css("border", "2px solid red");
                setTimeout(() => {
                    this.#kerdesGeneral(list)
                    this.#valaszEll(list, this.index)
                }, 1500)
                
            }
        })
        KettesValasz.on("click", () => {
            if (list[index].valaszKetto == list[index].joValasz) {
                console.log("Kettes válasz a jóóóóóÓ!")
                EgyesValasz.css("background-color", "red");
                KettesValasz.css("background-color", "green");
                HarmasValasz.css("background-color", "red");
                setTimeout(() => {
                    this.#kerdesGeneral(list)
                    this.#valaszEll(list, this.index)
                }, 1500)
            }
        })
        HarmasValasz.on("click", ()=>{
            if(list[index].valaszHarom == list[index].joValasz) {
                console.log("Hármas válasz a jóóóóóÓ!")
                EgyesValasz.css("border", "2px solid red");
                KettesValasz.css("border", "2px solid red");
                HarmasValasz.css("border", "2px solid green");
                setTimeout(() => {
                    this.#kerdesGeneral(list)
                    this.#valaszEll(list, this.index)
                }, 1500)
            }
        })
    }


}


export default QuizControler