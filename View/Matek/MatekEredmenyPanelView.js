class MatekEredmenyPanelView{
    #szulo
    #pontszam
    #feladatMennyiseg
    constructor(szulo, pontszam, feladatMennyiseg){
        this.#szulo = szulo
        this.#pontszam = pontszam
        this.#feladatMennyiseg = feladatMennyiseg
        this.parentElement = $("#eredmenyPanel");
        console.log(this.#pontszam, this.#feladatMennyiseg)
        this.eredmenySzazalek = (this.#pontszam / this.#feladatMennyiseg) * 100
        this.eredmenySzazalek = this.eredmenySzazalek.toFixed(0)
        this.#showMePanel(this.parentElement)
    }

    #showMePanel(parentElement){
        let txt = "";
        txt += "<h1>Az eredményed:</h1>"
        txt += `<h3>Pontszám: ${this.#pontszam} / ${this.#feladatMennyiseg}</h3>`
        txt += `<h3>Százalék: ${this.eredmenySzazalek}%</h3>`
        txt += '<button id="ujrakezd">Újrakezdés</button>'
        parentElement.html(txt)
    }
}

export default MatekEredmenyPanelView