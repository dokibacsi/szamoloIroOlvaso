import MatekModel from "../Model/MatekModel.js";
import IrasModel from "../Model/IrasModel.js";
import OlvasasModel from "../Model/OlvasasModel.js";
import FajtaView from "../View/FajtaView.js";
import GombView from "../View/GombView.js";
import MatekView from "../View/Feladatok/MatekView.js";

class Controler{
    constructor(){
        this.szamLista = []
        this.feladatLista = []
        const model = this.#Model();
        const nezet = this.#View()
    }

    #Model(){        
        const irasModle = new IrasModel();
        const olvasModle = new OlvasasModel();
    }

    #View(){
        this.feladatCim = ["MATEK", "ÍRÁS", "OLVASÁS"];
        const BTNPARENTELEM = $("#feladatValaszto")
        const TITLEPARENTELEM = $("#feladatFajta") 
        const TASKPARENTELEM = $("#feladatTer")
        new GombView(BTNPARENTELEM);
        new FajtaView(TITLEPARENTELEM, "Válasz egy feladatot!")
        this.matekGomb = $("#szamolas");
        this.irasGomb = $("#iras");
        this.olvasasGomb = $("#olvasas")
        this.#feladatValaszto(TASKPARENTELEM, TITLEPARENTELEM);
    }

    #feladatValaszto(feldatSzulo, cimTer){
        $(this.matekGomb).on("click", ()=>{
            new FajtaView(cimTer, this.feladatCim[0])
            const mtkModle = new MatekModel()
            this.szamLista = mtkModle.getNumberList();
            this.taskType = mtkModle.getMathTaskType();
            new MatekView(feldatSzulo, this.szamLista, this.taskType)
            $(this.matekGomb).attr("disabled", true)
            $(this.irasGomb).attr("disabled", false)
            $(this.olvasasGomb).attr("disabled", false)
        })
        $(this.irasGomb).on("click", ()=>{
            new FajtaView(cimTer, this.feladatCim[1])
            $(this.irasGomb).attr("disabled", true)
            $(this.matekGomb).attr("disabled", true) ? $(this.matekGomb).attr("disabled", false) : ""
            $(this.olvasasGomb).attr("disabled", true) ? $(this.olvasasGomb).attr("disabled", false) : ""
            
/*             new FeladatView(feladatTer) */
        })
        $(this.olvasasGomb).on("click", ()=>{
            new FajtaView(cimTer, this.feladatCim[2])
            $(this.olvasasGomb).attr("disabled", true)
            $(this.matekGomb).attr("disabled", false)
            $(this.irasGomb).attr("disabled", false)
/*             new FeladatView(feladatTer) */
        })
    }
}

export default Controler