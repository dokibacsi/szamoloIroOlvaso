import IrasView from "../View/KartyaView.js";
import GombView from "../View/GombView.js";
import FajtaView from "../View/FajtaView.js";
import MatekControler from "./MatekControler.js";
import QuizControler from "./QuizControler.js";
import CardView from "../View/Kartya/CardView.js";


class Controler {
  constructor() {
    this.list;
    this.szamLista = [];
    this.feladatLista = [];
    this.foTer = $("#foTer");
    this.feladatCim = ["MATEK", "QUIZ", "KÁRTYAJÁTÉK"];
    this.BTNPARENTELEM = $("#feladatValaszto");
    this.TITLEPARENTELEM = $("#feladatFajta");
    this.TASKPARENTELEM = $("#feladatTer");
    this.QUIZTER = $("#quizTer");
    this.CARDTER = $("#cardTer")
    new GombView(this.BTNPARENTELEM, this.feladatCim);
    new FajtaView(this.TITLEPARENTELEM, "Válasz egy feladatot!");
    this.matekGomb = $(`#${this.feladatCim[0]}`);
    this.quizGomb = $(`#${this.feladatCim[1]}`);
    this.kartyajGomb = $(`#${this.feladatCim[2]}`);
    this.#feladatValaszto(this.TASKPARENTELEM, this.TITLEPARENTELEM, this.feladatCim);
    this.eredmenyPanel = $("#eredmenyPanel");
    this.eredmenyPanel.hide();
    new IrasView();
  }

  #feladatValaszto(feldatSzulo, cimTer, feladatCimLista) {
    $(this.matekGomb).on("click", () => {
      new FajtaView(cimTer, feladatCimLista[0]);
      const MatekC = new MatekControler(this.foTer, this.eredmenyPanel);
      MatekC.getFeladatGeneral(feldatSzulo, feladatCimLista[0], feladatCimLista[0]);
      this.TASKPARENTELEM.show("slow")
      this.BTNPARENTELEM.hide("slow")
      this.matekGomb.attr("disabled", true);
      this.quizGomb.attr("disabled", false);
      this.kartyajGomb.attr("disabled", false);
    });
    $(this.quizGomb).on("click", () => {
      new FajtaView(cimTer, this.feladatCim[1]);
      const QuizC = new QuizControler(this.QUIZTER); 
      this.BTNPARENTELEM.hide("slow")
      this.QUIZTER.show("slow")
      this.kartyajGomb.attr("disabled", false);
      this.matekGomb.attr("disabled", false);
      this.quizGomb.attr("disabled", true);
    });
    $(this.kartyajGomb).on("click", () => {
      new FajtaView(cimTer, this.feladatCim[2]);
      this.BTNPARENTELEM.hide("slow")
      this.TASKPARENTELEM.hide("slow")
      this.CARDTER.show("slow")
      new CardView(this.CARDTER)
      this.kartyajGomb.attr("disabled", true);
      this.matekGomb.attr("disabled", false);
      this.quizGomb.attr("disabled", false);
    });
  }
}

export default Controler;
