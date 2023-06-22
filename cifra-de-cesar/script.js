const alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

const seletora = document.getElementById("deslocamento");
const texto = document.getElementById("para-criptografar");
const botao = document.getElementById("botao");

alfabeto.forEach(adicionar);

function adicionar(letra, index) {
  const option = document.createElement("option");
  option.innerHTML = letra;
  option.setAttribute("value", `${index}`);
  document.getElementById("deslocamento").appendChild(option);
}

botao.addEventListener("click", () => {
  let textoParaCriptografar = texto.value;
  let deslocamento = +seletora.value;
  let cifrado = cifrar(textoParaCriptografar, deslocamento);
  document.getElementById("resposta").classList.remove("invisivel");
  document.getElementById("resposta").innerHTML = cifrado;
});

function cifrar(textoParaCriptografar, deslocamento) {
  let textoMaiusculo = textoParaCriptografar.toUpperCase().split("");
  let textoCriptografado = [];
  for (i = 0; i < textoMaiusculo.length; i++) {
    let indiceDaLetra = alfabeto.indexOf(textoMaiusculo[i]);
    if (indiceDaLetra >= 0) {
      textoCriptografado.push(letraPorIndice(indiceDaLetra + deslocamento));
    } else {
      textoCriptografado.push(textoMaiusculo[i]);
    }
  }
  return textoCriptografado.join("");
}

function letraPorIndice(indice) {
  let indiceFinal;
  if (indice >= 0) {
    indiceFinal = indice % alfabeto.length;
  } else {
    indiceFinal = alfabeto.length + (indice % alfabeto.length);
  }
  return alfabeto[indiceFinal];
}

// function cifrar(textoParaCriptografar, deslocamento) {
//   let textoMaiusculo = textoParaCriptografar.toUpperCase().split("");
//   let textoCriptografado = [];
//   textoMaiusculo.forEach((letra) => {
//     let ajuste = alfabeto.indexOf(letra) + deslocamento;
//     let ajusteFinal = ajuste > 25 ? ajuste - 26 : ajuste;
//     textoCriptografado.push(alfabeto[ajusteFinal]);
//   });
//   return textoCriptografado;
// }
