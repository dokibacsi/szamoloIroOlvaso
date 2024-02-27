class FeladatSzamMegado{
    #parentElement;
    constructor(parentElement) {
      this.#parentElement = parentElement;
      this.#feladatOsszeallit(
        this.#parentElement,
      );
    }
  
    #feladatOsszeallit(pElem) {
      let txt = "";
        txt += `<p id="fszam">Feladatok száma: </p>`;
        txt += '<input class="nbr" type="number" name="number" id="feladatSzam">';
        txt += `<button class="next">Következő</button>`;
      pElem.html(txt);
    }
}

export default FeladatSzamMegado