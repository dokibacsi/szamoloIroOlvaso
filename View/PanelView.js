class PanelView{
    constructor(){
        this.szulo = $("ujrakezdPanel");
        this.#panelMegjelenit()
    }

    #panelMegjelenit(){
        let txt = "<h2>Biztos hogy újra szeretnéd kezdeni?!</h2>";
        txt =+ '<button id="ujrakezdGomb">Mindenképp</button>'
        txt =+ '<button id="megsemGomb">Mégsem</button>'
        this.szulo.html(txt)
    }
}