import KepElem from "./KepElem.js";
class Megjelenit {
    #lista = [];
  
    constructor(lista, szuloElem) {
      this.#lista = lista;
  
      szuloElem.append(`<table class= table >`);
      this.tablaElem = szuloElem.children("table");
  
      this.megjelenit();
    }
    megjelenit() {
      this.#lista.forEach((elem) => {
        new KepElem(elem, this.tablaElem);
      });
    }
  }
  
  export default Megjelenit;