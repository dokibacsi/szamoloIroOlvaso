import MatekModel from "../Model/MatekModel.js";
import IrasModel from "../Model/IrasModel.js";
import OlvasasModel from "../Model/OlvasasModel.js";
import FajtaView from "../View/FajtaView.js";
import GombView from "../View/GombView.js";
import MatekView from "../View/Feladatok/MatekView.js";
import EredmenyView from "../View/EredmenyView.js";

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
    this.joAlert = $("#joAlert");
    this.rosszAlert = $("#rosszAlert");
    this.joAlert.hide();
    this.rosszAlert.hide();
    this.pontSzam = 0;
    this.fSzam = 0;
  }

  #feladatGeneral(feldatSzulo, tipus, feladatCim) {
    if (tipus == feladatCim && this.fSzam < 20) {
      this.matekModel = new MatekModel();
      this.szamLista = this.matekModel.getNumberList();
      this.taskType = this.matekModel.getMathTaskType();
      new MatekView(feldatSzulo, this.szamLista, this.taskType);
      this.kovigomb = $(".next");
      new EredmenyView(this.pontSzam);
      console.log(this.fSzam)
      this.fSzam++;
      $(this.kovigomb).on("click", () => {
        this.#feladatEllenorzes();
        this.#feladatGeneral(feldatSzulo, feladatCim, feladatCim);
        new EredmenyView(this.pontSzam);
      });
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
        this.pontSzam++;
        this.joAlert.show("slow");
        setTimeout(() => {
          this.joAlert.hide("slow");
        }, 2500);
      } else if (beirtEredmeny == "404") {
        this.joAlert.show("slow");
        this.pontSzam = String("404 ERROR!");
        setTimeout(() => {
          this.joAlert.hide("slow");
        }, 2500);
      } else {
        this.rosszAlert.show("slow");
        setTimeout(() => {
          this.rosszAlert.hide("slow");
        }, 2500);
      }
    } else {
      const kivonEredmeny = this.matekModel.kivon();
      /* console.log(kivonEredmeny);*/
      if (beirtEredmeny == kivonEredmeny) {
        this.pontSzam++;
        this.joAlert.show("slow");
        setTimeout(() => {
          this.joAlert.hide("slow");
        }, 2500);
      } else if (beirtEredmeny == "404") {
        this.joAlert.show("slow");
        this.pontSzam = String("404 ERROR!");
        setTimeout(() => {
          this.joAlert.hide("slow");
        }, 2500);
      } else {
        this.rosszAlert.show("slow");
        setTimeout(() => {
          this.rosszAlert.hide("slow");
        }, 2500);
      }
    }
    /* console.log(beirtEredmeny); */
  }
}

export default Controler;
