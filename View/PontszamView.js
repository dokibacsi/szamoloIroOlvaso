class PontszamView{
    #pontszam
    #szulo
    constructor(pontszam, szulo){
        this.#pontszam = pontszam;
        this.#szulo = szulo
        this.#pontszamMegjelenit(this.#szulo)
    }

    #pontszamMegjelenit(szulo){
        let text = `<p id="pontszam">pontszám: ${this.#pontszam}</p>`
        szulo.html(text)
    }
}

export default PontszamView