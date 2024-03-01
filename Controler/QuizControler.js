import {QUIZKERDES} from "../Model/Adatok/QuizKerdesek.js"
import QuizView from "../View/QuizView.js"

class QuizControler{
    #paretnElement
    constructor(paretnElement){
        this.#paretnElement = paretnElement
        const KEREDESVALASZ = QUIZKERDES
        new QuizView(this.#paretnElement, KEREDESVALASZ);
    }
}

export default QuizControler