import { KepekLista } from "./Kep.js";
$(function () {
  init();
});

function init() {
  osszeAllitDivbe(KepekLista);
  MegTekint();
}
function osszeAllitDivbe(KepekLista) {
  let txt = "";
  txt += `<div class="container row ">`;
  for (let index = 0; index < lista.length; index++) {
    txt += `<div class="card border col-sm-3" > `;
    txt += `<div class="card-body">`;
    txt += `<h4 class="card-title">${lista[index].cim}</h4>`;
    txt += `<p class="card-text">${lista[index].kep}</p>`;
    txt += `<p class="card-text">${lista[index].leiras}</p>`;
    txt += `<input type="button" id="${index}" class=" btn btn-sucess	nez" value="Nézd meg">`;
    txt += `</div>
          </div>`;
  }
  txt += `</div>`;
  return txt;
}
