class FeladatOsszeallitView {
    #parentElement;
    #numberList;
    #taskType;
    constructor(parentElement, numberList, taskType) {
      this.#parentElement = parentElement;
      this.#numberList = numberList;
      this.#taskType = taskType;
      this.#feladatOsszeallit(
        this.#parentElement,
        this.#taskType,
        this.#numberList
      );
    }
  
    #feladatOsszeallit(pElem, taskType, list) {
      let txt = "";
        if (taskType == 1) {
          txt += `<p class="feladat">${list[0]} + ${list[1]} = </p>`;
          txt += '<input class="nbr" type="number" name="number" id="nbr">';
          //console.log(txt);
        } else if (taskType == 2) {
          txt += `<p class="feladat">${list[0]} - ${list[1]} = </p>`;
          txt += '<input class="nbr" type="number" name="number" id="nbr">';
          //console.log(txt);
        }
        txt += `<button class="next">Következő</button>`;
  
      //console.log(txt)
      pElem.html(txt);
    }
  }
  
  export default FeladatOsszeallitView;
  