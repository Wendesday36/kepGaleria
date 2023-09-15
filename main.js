import { KepekLista } from "./Kep.js";
import Megjelenit from "./megjelenit.js";
$(function () {
  const tarolo = $(".tarolo");
  const tablazat = new Megjelenit(KepekLista, tarolo);
  $(tablazat).on("esemenyem", function() {
    console.log(this);
  });
});
