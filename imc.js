// Obtém referência ao elemento HTML "calcular" pelo seu ID
const calcular = document.getElementById("calcular");

// Declara a função que calcula o IMC
function imc() {
  // Obtém os valores do nome, altura e peso inseridos pelo usuário
  const nome = document.getElementById("nome").value;
  const altura = document.getElementById("altura").value;
  const peso = document.getElementById("peso").value;

  // Obtém referência ao elemento HTML "result" para exibir o resultado
  const result = document.getElementById("result");

  // Verifica se todos os campos foram preenchidos pelo usuário
  if (nome != "" && altura != "" && peso != "") {
    // Calcula o IMC, usando o peso e a altura inseridos pelo usuário
    const valorIMC = (peso / (altura * altura)).toFixed(1);

    let classificação = "";

    // Classifica o IMC do usuário com base no seu valor
    if (valorIMC < 18.5) {
      classificação = "abaixo do peso";
    } else if (valorIMC < 25) {
      classificação = "com peso ideal. Parabéns!";
    } else if (valorIMC < 30) {
      classificação = "levemente acima do peso.";
    } else if (valorIMC < 35) {
      classificação = "com obesidade grau I";
    } else if (valorIMC < 40) {
      classificação = "com obesidade grau II.";
    } else {
      classificação = "com obesidade grau III. Cuidado!";
    }

    // Exibe o resultado ao usuário
    result.textContent = `${nome} seu valor imc é ${valorIMC} e você está ${classificação}`;
  } else {
    // Exibe uma mensagem de erro caso algum campo não tenha sido preenchido
    result.textContent = "Preencha todos os campos!!!";
  }
}

// Adiciona o ouvinte de eventos para o elemento "calcular", para que a função "imc" seja executada quando o usuário clicar no botão "calcular"
calcular.addEventListener("click", imc);
