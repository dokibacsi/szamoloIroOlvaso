class AlertView{
    #alertType
    #message
    constructor(alertType, message){
        this.alertIcons = []
        this.parentElement = $("#alert")
        this.joAlertParent = $("#joAlert");
        this.rosszAlertParent = $("#rosszAlert");
        this.#alertType = alertType
        this.#message = message
        this.#alertBoxOsszerak(this.parentElement, this.#alertType, this.#message);  
    }

    #alertBoxOsszerak(parentElement, alertType, message){
        let txt = ""
        if(alertType == 1){
            parentElement.show("slow");
            txt += `<div id="correctAlert"><p>${message}</p></div>`
            parentElement.html(txt)
            setTimeout(() => {
                parentElement.hide("slow");
              }, 1500);
        }else if(alertType == 2){
            parentElement.show("slow");
            txt += `<div id="warningAlert"><p>${message}</p></div>`
            parentElement.html(txt)
            setTimeout(() => {
                parentElement.hide("slow");
              }, 1500);
        }else if(alertType == 3){
            parentElement.show("slow");
            txt += `<div id="infoAlert"><p>${message}</p></div>`
            parentElement.html(txt)
            setTimeout(() => {
                parentElement.hide("slow");
              }, 1500);
        }else if(alertType == 4){
            parentElement.show("slow");
            txt += `<div id="wrongAlert"><p>${message}</p></div>`
            parentElement.html(txt)
            setTimeout(() => {
                parentElement.hide("slow");
              }, 1500);
        }
    }

}

export default AlertView