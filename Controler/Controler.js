import MatekModel from "../Model/MatekModel.js";
import IrasModel from "../Model/IrasModel.js";
import OlvasasModel from "../Model/OlvasasModel.js";
import FajtaView from "../View/FajtaView.js";
import GombView from "../View/GombView.js";
import MatekView from "../View/Feladatok/MatekView.js";
import PontszamView from "../View/PontszamView.js";
import AlertView from "../View/AlertView.js";
import MatekEredmenyPanelView from "../View/MatekEredmenyPanelView.js";
import FeladatSzamMegado from "../View/FeladatSzamMegado.js";

class Controler {
  constructor() {
    this.list;
    this.szamLista = [];
    this.feladatLista = [];
    this.#Model();
    this.#View();
  }

  #Model() {
    this.irasModle = new IrasModel();
    this.olvasModle = new OlvasasModel();
    this.matekModel = new MatekModel();
  }

  #View() {
    this.feladatCim = ["MATEK", "QUIZ", "KÁRTYAJÁTÉK"];
    this.foTer = $("#foTer");
    this.BTNPARENTELEM = $("#feladatValaszto");
    const TITLEPARENTELEM = $("#feladatFajta");
    this.TASKPARENTELEM = $("#feladatTer");
    this.pontszamSzulo = $("#eredmenyKijelzo")
    this.pontszamSzulo.hide()
    new GombView(this.BTNPARENTELEM, this.feladatCim);
    new FajtaView(TITLEPARENTELEM, "Válasz egy feladatot!");
    this.matekGomb = $(`#${this.feladatCim[0]}`);
    this.irasGomb = $(`#${this.feladatCim[1]}`);
    this.olvasasGomb = $(`#${this.feladatCim[2]}`);
    this.#feladatValaszto(this.TASKPARENTELEM, TITLEPARENTELEM, this.feladatCim);
    this.eredmenyPanel = $("#eredmenyPanel");
    this.eredmenyPanel.hide();
    this.pontSzam = 0;
    this.fSzam = 0;
    this.megadottFeladatSzam = 0;
  }

  #feladatGeneral(feldatSzulo, tipus, feladatCim) {
    if (tipus == feladatCim) {
      this.pontSzam = 0;
      new FeladatSzamMegado(feldatSzulo);
      this.kovigomb = $(".next");
      this.kovigomb.on("click", () => {
        this.feladatSzam = $(".nbr")
        this.feladatMennyiseg = this.feladatSzam.val()
        if(this.feladatMennyiseg <= 1){
          this.feladatMennyiseg = 2
        }
        this.#matekFeladatGeneral(feldatSzulo, feladatCim, this.feladatMennyiseg)
        this.pontszamSzulo.show("slow")
      });
    }
  }

  #matekFeladatGeneral(feldatSzulo, feladatCim, feladatMennyisege){
    this.matekModel = new MatekModel();
    this.szamLista = this.matekModel.getNumberList();
    this.taskType = this.matekModel.getMathTaskType();
    new MatekView(feldatSzulo, this.szamLista, this.taskType);
    this.kovigomb = $(".next");

    new PontszamView(this.pontSzam, this.pontszamSzulo);
    this.pontszamSzulo.show("slow")
    if (this.fSzam == feladatMennyisege - 1) {
      this.kovigomb.attr("disabled", true);
      new MatekEredmenyPanelView(
        this.eredmenyPanel,
        this.pontSzam,
        feladatMennyisege
      );
      this.foTer.hide("slow");
      setTimeout(() => {
        this.eredmenyPanel.show("slow");
      }, 150);
    } else {
      $(this.kovigomb).on("click", () => {
        
        this.#feladatEllenorzes();
        this.#matekFeladatGeneral(feldatSzulo, feladatCim, feladatMennyisege);
        new PontszamView(this.pontSzam, this.pontszamSzulo);
        let ujrakezdGomb = $("#ujrakezd");
        this.fSzam++;
        //console.log(this.fSzam + " / " +feladatMennyisege)
        //console.log(this.fSzam);
        ujrakezdGomb.on("click", () => {
          this.foTer.show("slow");
          location.reload();
        });
      });
    }
  }

  #feladatValaszto(feldatSzulo, cimTer, feladatCimLista) {
    $(this.matekGomb).on("click", () => {
      new FajtaView(cimTer, feladatCimLista[0]);
      this.#feladatGeneral(feldatSzulo, feladatCimLista[0], feladatCimLista[0]);
      this.TASKPARENTELEM.show("slow")
      this.BTNPARENTELEM.hide("slow")
      this.matekGomb.attr("disabled", true);
      this.irasGomb.attr("disabled", false);
      this.olvasasGomb.attr("disabled", false);
    });
    $(this.irasGomb).on("click", () => {
      new FajtaView(cimTer, this.feladatCim[1]);
      this.BTNPARENTELEM.hide("slow")
      this.TASKPARENTELEM.hide("slow")
      this.pontszamSzulo.hide("slow")
      this.olvasasGomb.attr("disabled", false);
      this.matekGomb.attr("disabled", false);
      this.irasGomb.attr("disabled", true);
    });
    $(this.olvasasGomb).on("click", () => {
      new FajtaView(cimTer, this.feladatCim[2]);
      this.BTNPARENTELEM.hide("slow")
      this.TASKPARENTELEM.hide("slow")
      this.pontszamSzulo.hide("slow")
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
