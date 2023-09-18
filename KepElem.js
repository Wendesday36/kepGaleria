class KepElem {
  #kep = {};
  constructor(kep, szuloElem) {
    this.#kep = kep;
    this.tablaElem = szuloElem;
    this.#sor();
    this.sorElem = this.tablaElem.find("div:last-child");
    this.gombElem = this.tablaElem.find("button:last-child");
   
    this.sorElem.on("click", () => {
      this.esemenyTrigger();
      this.OpenBootstrapPopup();
    });
    this.gombElem.on("click", () => {
      this.CloseBootstrapPopup();
    });
  }
  #sor() {
    let txt = "";
    for (const key in this.#kep) {
      const element = this.#kep[key];
      if (key === "kep") {
        txt += `
          <div >
            <img src="${element}" alt="">
          </div>`;
      }
    }

    this.tablaElem.append(txt);
    
  }
  esemenyTrigger() {
    console.log(this.#kep.cim);
    const esemenyem = new CustomEvent("esemenyem", {
      detail: this,
    });
    window.dispatchEvent(esemenyem);
    // console.log("KepElem osztaly: esemenyTrigger() hivas");
  }
  OpenBootstrapPopup() {
    // Frissítsd a modal címét és tartalmát
    $("#myModalLabel").text(this.#kep.cim);
    $("#myModal .modal-body").html(`
      <img src="${this.#kep.kep}" alt="">
      <br>
      Leírás: ${this.#kep.leiras}
    `);

    // Nyisd meg a modal ablakot
    $("#myModal").modal("show");
  }

  CloseBootstrapPopup() {
    // Bezárás a Bootstrap modal szabályai szerint
    $("#myModal").modal("hide");
  }
}
export default KepElem;