import { KARTYAKEPEK } from "../../Model/Adatok/KartyaKepek.js"
import OneCardView from "./OneCardView.js";

class CardView {
    #CardSzulo
    constructor(cardszulo) {
        this.#CardSzulo = cardszulo
        this.adatLista = [];
        this.lista = KARTYAKEPEK;
        this.#kartyaMegjelenites(this.#CardSzulo, this.lista)
        $(window).on("adatok", (event) => {
            this.adatLista.push(event.detail)
            console.log(this.adatLista)
            if((this.adatLista[0].getElem() === this.adatLista[1]?.getElem()) && this.adatLista[0].getId() !== this.adatLista[1]?.getId()){
                console.log("sus")
                this.adatLista[0].getKartyaElem().hide("slow")
                this.adatLista[1].getKartyaElem().hide("slow")
            }
            if(this.adatLista.length == 2){
                this.adatLista = []
                console.log("Tömb elemei törölve!")
            }
        })
    }

    #kartyaMegjelenites(szulo, lista) {
        let ciklusIndex = 0;
        for (let index = 0; index < 2; index++) {
            this.#kartyaKever(lista)
            lista.forEach((element, index) => {
                new OneCardView(szulo, element, ciklusIndex+index)
            });
            ciklusIndex += lista.length
        }
    }

    #kartyaKever(lista) {
        for (let i = lista.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [lista[i], lista[j]] = [lista[j], lista[i]];
        }
        return lista;
    }

}

export default CardView;