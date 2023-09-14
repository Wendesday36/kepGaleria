class KepElem {
  #kep = {};
  constructor(kep, szuloElem) {
    this.#kep = kep;
    this.tablaElem = szuloElem;
    this.#sor();
    this.sorElem = this.tablaElem.children("tr:last-child");

    //console.log(this.pipa)
  }
  #sor() {
    let txt = "";

    
    for (const key in this.#kep) {
      const element = this.#kep[key];
      if (key === "kep") {
        txt += `<div><img src ="${element}" alt=""></div>`;
      }
      
    }

    this.tablaElem.append(txt);
  }
  #esemenyTrigger(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this });
    window.dispatchEvent(esemenyem);
  }
}
export default KepElem;
