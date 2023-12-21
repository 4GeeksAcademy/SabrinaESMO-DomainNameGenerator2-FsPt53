/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let verb = ["tenemos", "creamos", "diseñamos", "pintamos"];
  let adjective = ["diminutos", "preciosos", "fantasticos", "divertidos"];
  let noun = ["libros", "peluches", "cuadros", "ordenadores"];
  let TLD = [".com", ".net", ".org", ".info"];

  let domainName = "";

  for (let v = 0; v < verb.length; v++) {
    for (let a = 0; a < adjective.length; a++) {
      for (let n = 0; n < noun.length; n++) {
        for (let t = 0; t < TLD.length; t++) {
          domainName += verb[v] + adjective[a] + noun[n] + TLD[t] + "<br>";
        }
      }
    }
  }
  document.querySelector("#domainNameGenerator").innerHTML = domainName;
};
