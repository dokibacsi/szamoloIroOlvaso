class PontszamView{
    #pontszam
    #szulo
    constructor(pontszam, szulo){
        this.#pontszam = pontszam;
        this.#szulo = szulo
        this.hiba = 20 - this.#pontszam 
        this.#pontszamMegjelenit(this.#szulo)
    }

    #pontszamMegjelenit(szulo){
        let text = `<p id="pontszam">pontszám: ${this.#pontszam}</p>`
        szulo.html(text)
    }
}

export default PontszamView