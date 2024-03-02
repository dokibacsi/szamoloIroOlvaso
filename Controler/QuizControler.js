import { QUIZKERDES } from "../Model/Adatok/QuizKerdesek.js"
import AlertView from "../View/AlertView.js"
import QuizView from "../View/QuizView.js"

class QuizControler {
    #paretnElement
    constructor(paretnElement) {
        this.#paretnElement = paretnElement
        this.KEREDESVALASZ = QUIZKERDES
        this.index = 0
        this.#kerdesGeneral(this.KEREDESVALASZ)
        this.#valaszEll(this.KEREDESVALASZ, this.index)
    }

    #kerdesGeneral(list) {
        this.index = Math.floor(Math.random() * list.length);
        new QuizView(this.#paretnElement, list, this.index);
    }

    #valaszEll(list, index) {
        const EgyesValasz = $("#valaszEgy")
        const KettesValasz = $("#valaszKetto")
        const HarmasValasz = $("#valaszHarom")
        const gombLista = [EgyesValasz, KettesValasz, HarmasValasz]
        EgyesValasz.on("click", () => {
            if (list[index].valaszEgy == list[index].joValasz) {
                console.log("Egyes válasz a jóóóóóÓ!")
                EgyesValasz.css("border", "2px solid green");
                KettesValasz.css("border", "2px solid red");
                HarmasValasz.css("border", "2px solid red");
                new AlertView(1, "A válasz jó! +1 pont!");
            } else {
                EgyesValasz.css("border", "2px solid red");
                this.#gombLetilt(gombLista)
                new AlertView(4, `Helyes megfejtés: ${list[index].joValasz}`);
            }
            this.#idozito()
        })
        KettesValasz.on("click", () => {
            if (list[index].valaszKetto == list[index].joValasz) {
                console.log("Kettes válasz a jóóóóóÓ!")
                EgyesValasz.css("border", "2px solid red");
                KettesValasz.css("border", "2px solid green");
                HarmasValasz.css("border", "2px solid red");
                new AlertView(1, "A válasz jó! +1 pont!");
            } else {
                KettesValasz.css("border", "2px solid red");
                this.#gombLetilt(gombLista)
                new AlertView(4, `Helyes megfejtés: ${list[index].joValasz}`);
            }
            this.#idozito()

        })
        HarmasValasz.on("click", () => {
            if (list[index].valaszHarom == list[index].joValasz) {
                console.log("Hármas válasz a jóóóóóÓ!")
                EgyesValasz.css("border", "2px solid red");
                KettesValasz.css("border", "2px solid red");
                HarmasValasz.css("border", "2px solid green");
                new AlertView(1, "A válasz jó! +1 pont!");
            } else {
                HarmasValasz.css("border", "2px solid red");
                this.#gombLetilt(gombLista)
                new AlertView(4, `Helyes megfejtés: ${list[index].joValasz}`);
            }
            this.#idozito()
        })

    }

    #idozito(){
        setTimeout(() => {
            this.#kerdesGeneral(this.KEREDESVALASZ)
            this.#valaszEll(this.KEREDESVALASZ, this.index)
        }, 1500)
    }

    #gombLetilt(list){
        list[0].attr("disabled", true);
        list[1].attr("disabled", true);
        list[2].attr("disabled", true);
    }
}


export default QuizControler