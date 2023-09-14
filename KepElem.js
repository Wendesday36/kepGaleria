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

    txt += "<tr>";
    for (const key in this.#kep) {
      const element = this.#kep[key];
      if (key === "kep") {
        txt += `<td><div><img src ="${element}" alt=""></div></td>`;
      }
      txt += `</tr>`;
    }

    this.tablaElem.append(txt);
  }
  #esemenyTrigger(esemenynev) {
    const esemenyem = new CustomEvent(esemenynev, { detail: this });
    window.dispatchEvent(esemenyem);
  }
}
export default KepElem;
