class OneCardView{
    #kartyaSzulo
    #elem;
    #id;
    #kartyaElem
    constructor(kartyaSzulo, elem, id){
        this.#kartyaSzulo = kartyaSzulo;
        this.#elem = elem;
        this.#id = id;
        this.#kartyaMegjelenito(this.#id, this.#elem, this.#kartyaSzulo)
        this.#kattintasEsemeny("adatok");
    }

    #kartyaMegjelenito(id, elem, szulo){
        let txt = `<div id="card"><img id="${id}" src="./Kepek/${elem}", alt="${elem}"></div>`
        szulo.append(txt);
        this.#kartyaElem = this.#kartyaSzulo.children("div:last-child")
    }

    
    #kattintasEsemeny(esemenyNev){
        const esemeny = new CustomEvent(esemenyNev, {detail:this})
        this.#kartyaSzulo.children("div:last-child").on("click", ()=>{
            window.dispatchEvent(esemeny)
        })
    }

    
    getElem(){
        return this.#elem;
    }

    getId(){
        return this.#id;
    }

    getKartyaElem(){
        return this.#kartyaElem
    }
}

export default OneCardView;