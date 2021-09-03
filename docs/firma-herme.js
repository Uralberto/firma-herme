const mediah2 = document.getElementById("media-h-2");
const mediah = document.getElementById("media-h");
const palitoh = document.getElementById("palito-h");
const erm = document.getElementById("erm");
const ele = document.getElementById("ele");
const iene = document.getElementById("iene");
const de = document.getElementById("de");
const a = document.getElementById("a");
const fr = document.getElementById("efe-ere");
const asinrabo = document.getElementById("a-sin-rabo");
const ene = document.getElementById("ene");
const ce = document.getElementById("ce");
const o = document.getElementById("o");
const nombre = document.getElementById("nombre");

let lmediah2 = mediah2.getTotalLength();
let lmediah = mediah.getTotalLength();
let lpalitoh = palitoh.getTotalLength();
let lerm = erm.getTotalLength();
let lele = ele.getTotalLength();
let liene = iene.getTotalLength();
let lde = de.getTotalLength();
let la = a.getTotalLength();
let lfr = fr.getTotalLength();
let lasinrabo = asinrabo.getTotalLength();
let lene = ene.getTotalLength();
let lce = ce.getTotalLength();
let lo = o.getTotalLength();
console.log("media-h-2", lmediah2);
console.log("media-h", lmediah);
console.log("palito-h", lpalitoh);
console.log("erm", lerm);
console.log("ele", lele);
console.log("iene", liene);
console.log("de", lde);
console.log("a", la);
console.log("fr", lfr);
console.log("asinrabo", lasinrabo);
console.log("ene", lene);
console.log("ce", lce);
console.log("o", lo);

let letras = nombre.textContent.split("");

nombre.textContent = " ";
console.log(letras);

letras.forEach((letra, i) => {
  console.log(letras[i]);
});

let i = 0;
let t = 150;
let f = 1;

function mostrarNombre() {
  const a = setInterval(function () {
    nombre.textContent = nombre.textContent + letras[i];
    i++;
    if (i > letras.length - 1) {
      clearInterval(a);
    }
  }, t);
}

mostrarNombre();
