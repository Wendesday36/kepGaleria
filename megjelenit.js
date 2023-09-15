import KepElem from "./KepElem.js";
class Megjelenit {
    #lista = [];
  
    constructor(lista, szuloElem) {
      this.#lista = lista;
  
      szuloElem.append(`<div class= table >`);
      this.tablaElem = szuloElem.children(".table");
      this.megjelenit();
    }
    megjelenit() {
      this.#lista.forEach((elem) => {
        new KepElem(elem, this.tablaElem);
      });
     // console.log("Megjelenit osztaly: megjelenit() hivas");
    }
  }
  
  export default Megjelenit;