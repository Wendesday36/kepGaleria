class KepElem {
  constructor(szuloElem, elem) {
    this.szuloElem = szuloElem;
    this.elem = elem;
    szuloElem.append(
      `<div class="card"><div class="card-header">${elem.cim}</div><div class="card-body">${elem.éve}</div><button  class="kedvenc">Kedvenc</button><button  class="delete">Delete</button></div>`
    );

    const BTTN = $(`.kedvenc:last-child`);
    const deletebt = $(`.delete:last-child`);
    BTTN.on("click", () => {
      this.esemenyTrigger();
    });
    deletebt.on("click", () => {
      this.torol();
    });
  }

  esemenyTrigger() {
    const esemeny = new CustomEvent("kedvenc", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
  torol() {
    const esemeny = new CustomEvent("torol", {
      detail: this,
    });
    window.dispatchEvent(esemeny);
  }
  megjelenit(adat){
    console.log(adat)
    let TERMEKLISTA=adat;
    const szuloElem = $("article");
    for (let index = 0; index < TERMEKLISTA.length; index++) {
      const t1 = new Termek(szuloElem, TERMEKLISTA[index]);
    }
  }
}

export default KepElem;
