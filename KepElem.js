class KepElem {
constructor{
    
}


    function AktualisElemMegj(NEZ) {
        const elem = [];
        elem.push(ADATLISTA[NEZ]);
        console.log(elem);
        TARTALOM.html(osszeAllitDivbe(elem));
        const MEGJLENITO = $(".megjelenito .card")
        MEGJLENITO.removeClass("col-sm-3")
        MEGJLENITO.removeClass("container row")
        console.log(MEGJLENITO)
        console.log(NEZ);
      }
      const SECTION = $(".section")
      function MegTekint() {
        const NEZGOMB = $(".nez");
        
        SECTION.hide()
        balgomb.hide();
        jobbgomb.hide();
        bezar.hide();
        NEZGOMB.on("click", function (event) {
          const NEZ = $(event.target).attr("id");
          mostaniIndex = NEZ;
          AktualisElemMegj(NEZ);
          balgomb.show();
          SECTION.show()
          jobbgomb.show();
          bezar.show();
      
          /*     Megjelen(MEGJ)
           */
        });
      }
      /* function Megjelen(MEGJ){
        MEGJ.append('<div class="bezar"><input type="button" value="X"></div>')
        MEGJ.append('<div class="bal_leptetogomb"><input type="button" value="⇠"></div>')
        MEGJ.append(
          ' <div class="jobb_leptetogomb"> <input type="button" value="⇢"></div>'
        );
      } */
      let mostaniIndex = 0;
      
      const KISIKONOK = $("article div");
      for (let index = 0; index < KISIKONOK.length; index++) {
        KISIKONOK[index].addEventListener("click", function () {
          MegTekint(index, ADATLISTA);
          mostaniIndex = index;
        });
      }
      const balgomb = $(".bal_leptetogomb");
      balgomb.on("click", function () {
        mostaniIndex--;
        if (mostaniIndex < 0) {
          mostaniIndex = ADATLISTA.length - 1;
        }
        AktualisElemMegj(mostaniIndex);
      });
      const jobbgomb = $(".jobb_leptetogomb");
      jobbgomb.on("click", function () {
        mostaniIndex++;
        if (mostaniIndex > ADATLISTA.length) {
          mostaniIndex = 0;
        }
        AktualisElemMegj(mostaniIndex);
      });
      const bezar = $(".bezar");
      bezar.on("click", function () {
        $(TARTALOM).hide();
        jobbgomb.hide();
        balgomb.hide();
        bezar.hide();
        SECTION.hide()
      });
}

export default KepElem;
