import MatekModel from "../Model/MatekModel.js";
import IrasModel from "../Model/IrasModel.js";
import OlvasasModel from "../Model/OlvasasModel.js";
import FajtaView from "../View/FajtaView.js";
import GombView from "../View/GombView.js";
import MatekView from "../View/Feladatok/MatekView.js";
import PontszamView from "../View/PontszamView.js";
import AlertView from "../View/AlertView.js";

class Controler {
  constructor() {
    this.list;
    this.szamLista = [];
    this.feladatLista = [];
    const model = this.#Model();
    this.#View();
  }

  #Model() {
    this.irasModle = new IrasModel();
    this.olvasModle = new OlvasasModel();
    this.matekModel = new MatekModel();
  }

  #View() {
    this.feladatCim = ["MATEK", "QUIZ", "KÁRTYAJÁTÉK"];
    const BTNPARENTELEM = $("#feladatValaszto");
    const TITLEPARENTELEM = $("#feladatFajta");
    const TASKPARENTELEM = $("#feladatTer");
    new GombView(BTNPARENTELEM, this.feladatCim);
    new FajtaView(TITLEPARENTELEM, "Válasz egy feladatot!");
    this.matekGomb = $(`#${this.feladatCim[0]}`);
    this.irasGomb = $(`#${this.feladatCim[1]}`);
    this.olvasasGomb = $(`#${this.feladatCim[2]}`);
    this.#feladatValaszto(TASKPARENTELEM, TITLEPARENTELEM, this.feladatCim);
    this.eredmenyPanel = $("#eredmenyPanel")
    this.pontSzam = parseInt(0)
    this.fSzam = 0;
  }

  #feladatGeneral(feldatSzulo, tipus, feladatCim) {
      if (tipus == feladatCim) {
        this.matekModel = new MatekModel();
        this.szamLista = this.matekModel.getNumberList();
        this.taskType = this.matekModel.getMathTaskType();
        new MatekView(feldatSzulo, this.szamLista, this.taskType);
        this.kovigomb = $(".next");
        new PontszamView(this.pontSzam);
        console.log(this.fSzam)
        this.fSzam++;
        if(this.fSzam <= 20){
          $(this.kovigomb).on("click", () => {
            this.#feladatEllenorzes();
            this.#feladatGeneral(feldatSzulo, feladatCim, feladatCim);
            new PontszamView(this.pontSzam);
          });
        }else if(this.fSzam == 21){
          new EredmenyPanelView()
        }
    }
  }

  #feladatValaszto(feldatSzulo, cimTer, feladatCimLista) {
    $(this.matekGomb).on("click", () => {
      new FajtaView(cimTer, feladatCimLista[0]);
      this.#feladatGeneral(feldatSzulo, feladatCimLista[0], feladatCimLista[0]);
      this.matekGomb.attr("disabled", true);
      this.irasGomb.attr("disabled", false);
      this.olvasasGomb.attr("disabled", false);
    });
    $(this.irasGomb).on("click", () => {
      new FajtaView(cimTer, this.feladatCim[1]);
      this.olvasasGomb.attr("disabled", false);
      this.matekGomb.attr("disabled", false);
      this.irasGomb.attr("disabled", true);
    });
    $(this.olvasasGomb).on("click", () => {
      new FajtaView(cimTer, this.feladatCim[2]);
      this.olvasasGomb.attr("disabled", true);
      this.matekGomb.attr("disabled", false);
      this.irasGomb.attr("disabled", false);
    });
  }

  #feladatEllenorzes() {
    let beirtEredmeny = $(".nbr").val();
    if (this.matekModel.getMathTaskType() == 1) {
      const osszeadEredmeny = this.matekModel.osszead();
      //console.log(osszeadEredmeny);
      if (beirtEredmeny == osszeadEredmeny) {
        new AlertView(1);
        this.pontSzam++;
      } else {
        new AlertView(0);
      }
    } else {
      const kivonEredmeny = this.matekModel.kivon();
      /* console.log(kivonEredmeny);*/
      if (beirtEredmeny == kivonEredmeny) {
        new AlertView(1);
        this.pontSzam++;
      } else {
        new AlertView(0);
      }
    }
    /* console.log(beirtEredmeny); */
  }
}

export default Controler;
