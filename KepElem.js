class KepElem {
  #kep = {};
  constructor(kep, szuloElem) {
    this.#kep = kep;
    this.tablaElem = szuloElem;
    this.#sor();
    this.sorElem = this.tablaElem.find("div:last-child");
      //const BTTN = $(`.kedvenc:last-child`);
    this.sorElem.on("click", () => {
      this.esemenyTrigger();
    });

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
  esemenyTrigger() {
    console.log(this.#kep.cim)
    const esemenyem = new CustomEvent("esemenyem", {
      detail: this,
    });
    window.dispatchEvent(esemenyem);
   // console.log("KepElem osztaly: esemenyTrigger() hivas");
  }
}
export default KepElem;
