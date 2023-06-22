const botao = document.getElementById("botao");
const inputNumero = document.getElementById("numero");
const seletorBaseInicial = document.getElementById("base-atual");
const seletorBaseFinal = document.getElementById("base-final");
const divResultado = document.getElementById("resultado");

botao.addEventListener("click", () => {
  let numeroFinal;
  let numeroAtual = inputNumero.value;

  const baseAtual = +seletorBaseInicial.value;
  const baseFinal = +seletorBaseFinal.value;

  paraDecimal = parseInt(numeroAtual, baseAtual);
  numeroFinal = paraDecimal.toString(baseFinal).toUpperCase();

  divResultado.innerHTML = `${numeroAtual.toUpperCase()}<sub>${baseAtual}</sub> = 
  ${numeroFinal}<sub>${baseFinal}</sub>`;
});
