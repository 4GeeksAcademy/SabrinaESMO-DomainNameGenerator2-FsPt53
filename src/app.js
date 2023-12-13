/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let verb = [
    "tenemos",
    "creamos",
    "diseñamos",
    "montamos",
    "pintamos",
    "encontramos"
  ];
  let adjective = [
    "grandes",
    "pequeños",
    "diminutos",
    "preciosos",
    "fantasticos",
    "divertidos",
    "modernos"
  ];
  let noun = [
    "libros",
    "muebles",
    "marcos",
    "peluches",
    "juguetes",
    "cuadros",
    "ordenadores"
  ];

  let TLD = [".com", ".es", ".cat", ".net", ".org", ".tv", ".info"];

  function randomArray(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const domainName =
    randomArray(verb) +
    randomArray(adjective) +
    randomArray(noun) +
    randomArray(TLD);

  document.querySelector("#domainNameGenerator").innerHTML = domainName;
};
