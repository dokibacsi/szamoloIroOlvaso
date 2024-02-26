class AlertView{
    #result
    constructor(result){
        this.parentElement = $("#alert")
        this.joAlertParent = $("#joAlert");
        this.rosszAlertParent = $("#rosszAlert");
        this.#result = result
        this.#alertBoxOsszerak(this.parentElement, this.#result);  
    }

    #alertBoxOsszerak(parentElement, result){
        let txt = ""
        if(result == 1){
            parentElement.show("slow");
            txt += `<div id="joAlert"><p>A válasz helyes! Kaptál egy pontot!</p></div>`
            parentElement.html(txt)
            setTimeout(() => {
                parentElement.hide("slow");
              }, 1500);
        }else{
            parentElement.show("slow");
            txt += `<div id="rosszAlert"><p>A válasz rossz! Nem kaptál pontot!</p></div>`
            parentElement.html(txt)
            setTimeout(() => {
                parentElement.hide("slow");
              }, 1500);
        }
    }

}

export default AlertView