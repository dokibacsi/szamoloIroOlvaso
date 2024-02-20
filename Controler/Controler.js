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
    this.feladatCim = ["MATEK", "ÍRÁS", "OLVASÁS"];
    const BTNPARENTELEM = $("#feladatValaszto");
    const TITLEPARENTELEM = $("#feladatFajta");
    const TASKPARENTELEM = $("#feladatTer");
    new GombView(BTNPARENTELEM);
    new FajtaView(TITLEPARENTELEM, "Válasz egy feladatot!");
    this.matekGomb = $("#szamolas");
    this.irasGomb = $("#iras");
    this.olvasasGomb = $("#olvasas");
    this.#feladatValaszto(TASKPARENTELEM, TITLEPARENTELEM);
    this.joAlert = $("#joAlert");
    this.rosszAlert = $("#rosszAlert");
    this.joAlert.hide();
    this.rosszAlert.hide();
    this.pontSzam = 0;
  }

  #feladatGeneral(feldatSzulo, tipus) {
    if (tipus == "MATEK") {
      this.matekModel = new MatekModel();
      this.szamLista = this.matekModel.getNumberList();
      this.taskType = this.matekModel.getMathTaskType();
      new MatekView(feldatSzulo, this.szamLista, this.taskType);
      this.kovigomb = $(".next");
      new EredmenyView(this.pontSzam)
      $(this.kovigomb).on("click", () => {
        this.#feladatEllenorzes();
        this.#feladatGeneral(feldatSzulo, "MATEK");
        new EredmenyView(this.pontSzam)
      });
    }
  }

  #feladatValaszto(feldatSzulo, cimTer) {
    $(this.matekGomb).on("click", () => {
      new FajtaView(cimTer, this.feladatCim[0]);
      this.#feladatGeneral(feldatSzulo, "MATEK");

      this.matekGomb.attr("disabled", true);
      this.irasGomb.attr("disabled", false);
      this.olvasasGomb.attr("disabled", false);
    });
    $(this.irasGomb).on("click", () => {
      new FajtaView(cimTer, this.feladatCim[1]);
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
      console.log(osszeadEredmeny)
      if (beirtEredmeny == osszeadEredmeny) {
        this.pontSzam++;
        this.joAlert.show("slow");
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
      console.log(kivonEredmeny)
      if (beirtEredmeny == kivonEredmeny) {
        this.pontSzam++;
        this.joAlert.show("slow");
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
    console.log(beirtEredmeny);
  }
}

export default Controler;
