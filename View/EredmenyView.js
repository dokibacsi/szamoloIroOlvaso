class EredmenyView{
    #eredmeny
    constructor(eredmeny){
        this.#eredmeny = eredmeny;
        this.eredmenySzulo = $("#eredmenyKijelzo")
        this.hiba = 20 - this.#eredmeny 
        this.#eredmenyMegjelenit()
    }

    #eredmenyMegjelenit(){
        let text = `<p>pontszám: ${this.#eredmeny}</p>`
        this.eredmenySzulo.html(text)
    }
}

export default EredmenyView