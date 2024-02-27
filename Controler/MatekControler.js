import MatekModel from "../Model/MatekModel.js";
import PontszamView from "../View/Matek/PontszamView.js";
import FeladatSzamMegadoView from "../View/Matek/FeladatSzamMegadoView.js";
import MatekEredmenyPanelView from "../View/Matek/MatekEredmenyPanelView.js";
import AlertView from "../View/AlertView.js";
import FeladatOsszeallitView from "../View/Matek/FeladatOsszeallit.js";

class MatekView {
  #foTer
  #eredmenyPanel
  constructor(foTer, eredmenyPanel) {
    this.#foTer = foTer
    this.#eredmenyPanel = eredmenyPanel
    this.pontSzam = 0;
    this.fSzam = 0;
    this.megadottFeladatSzam = 0;
    this.pontszamSzulo = $("#eredmenyKijelzo")
    this.pontszamSzulo.hide()
  }

  #feladatGeneral(feldatSzulo, tipus, feladatCim) {
    if (tipus == feladatCim) {
      this.pontSzam = 0;
      new FeladatSzamMegadoView(feldatSzulo);
      this.kovigomb = $(".next");
      this.kovigomb.on("click", () => {
        const feladatMennyiseg = $(".nbr").val()
        if(feladatMennyiseg <= 1){
          feladatMennyiseg = 2
        }
        this.#matekFeladatGeneral(feldatSzulo, feladatCim, feladatMennyiseg)
        this.pontszamSzulo.show("slow")
      });
    }
  }

  getFeladatGeneral(feldatSzulo, tipus, feladatCim){
    this.#feladatGeneral(feldatSzulo, tipus, feladatCim)
  }

  #matekFeladatGeneral(feldatSzulo, feladatCim, feladatMennyisege) {
    this.matekModel = new MatekModel();
    this.szamLista = this.matekModel.getNumberList();
    this.taskType = this.matekModel.getMathTaskType();
    new FeladatOsszeallitView(feldatSzulo, this.szamLista, this.taskType);
    this.kovigomb = $(".next");
    new PontszamView(this.pontSzam, this.pontszamSzulo);
    this.pontszamSzulo.show("slow");
    if (this.fSzam == feladatMennyisege - 1) {
      this.kovigomb.attr("disabled", true);
      new MatekEredmenyPanelView(this.#eredmenyPanel, this.pontSzam, feladatMennyisege);
      this.#foTer.hide("slow");
      setTimeout(() => {
        this.#eredmenyPanel.show("slow");
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
          this.#foTer.show("slow");
          location.reload();
        });
      });
    }
  }

  #feladatEllenorzes() {
    let beirtEredmeny = $(".nbr").val();
    if (this.matekModel.getMathTaskType() == 1) {
      const osszeadEredmeny = this.matekModel.osszead();
      //console.log(osszeadEredmeny);
      if (beirtEredmeny == osszeadEredmeny) {
        new AlertView(1, "A válasz jó! +1 pont!");
        this.pontSzam++;
      } else {
        new AlertView(4, "A válasz rossz! 0 pont!");
      }
    } else {
      const kivonEredmeny = this.matekModel.kivon();
      /* console.log(kivonEredmeny);*/
      if (beirtEredmeny == kivonEredmeny) {
        new AlertView(1, "A válasz jó! +1 pont!");
        this.pontSzam++;
      } else {
        new AlertView(4, "A válasz rossz! 0 pont!");
      }
    }
    /* console.log(beirtEredmeny); */
  }
}

export default MatekView;
