class KepElem {
  #kep = {};
  constructor(kep, szuloElem) {
    this.#kep = kep;
    this.tablaElem = szuloElem;
    this.#sor();
    this.sorElem = this.tablaElem.find("div:last-child");
    this.gombElem = this.tablaElem.find("button:last-child");
    //const BTTN = $(`.kedvenc:last-child`);
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
        txt += `<div ><img src ="${element}" alt="">
        <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
      
            <!-- Modal Header -->
            <div class="modal-header">
              <h3 class="modal-title">${this.#kep.cim}</h3>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
      
            <!-- Modal body -->
            <div class="modal-body">
            <img src ="${element}" alt="">
            <br>
           Leírás:   ${this.#kep.leiras}
            </div>
      
            <!-- Modal footer -->
            <div class="modal-footer">
            </div>
      
          </div>
        </div>
      </div>
        
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
    $("#myModal").modal("show");
  }
  CloseBootstrapPopup() {
   // $("#myModal").modal("close");
    //window.parent.$('#myModal').dialog('close');
   // $(this).closest('#myModal').dialog('close'); 
   $('#myModal').modal('toggle');
  }
}
export default KepElem;
