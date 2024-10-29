const Remplazar = {
  "?": "a",
  "[": "e",
  "\\": "i",
  "~": "o",
  "+": "u",
  "^": "m",
  "¿": "y",
  "=": "t",
  "]": "n",
  "{": "s",
  "}": "q",
  "$": "r",
  "!": "j",
  "¡": "d",
  "%": "b",
  "()": " ",
  "*" : "p",
  "_" : "z",
  "`" : "c",
  "/" : "l",
  "¬" : "ó",
  ";" : "f",
  "#" : "v",
  "-" : "h",

};

let mensajeEncriptado =
  "^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$__~()`~]=\]+~";

let mensajeDesifrado = mensajeEncriptado.split('').map(caracter => {
    return Remplazar[caracter] || caracter;
}).join('');

console.log(mensajeDesifrado)