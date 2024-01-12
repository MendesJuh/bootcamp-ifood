function calcularImc() {
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    let result = null;

    const imc = peso / (altura * altura);

    if (imc < 17) {
        result = "Muito abaixo do peso";
    } else if (imc < 18.5) {
        result = "Abaixo do peso";
    } else if (imc < 24.9) {
        result = "Peso está normal";
    } else if (imc < 29.9) { 
        result = "Acima do peso";
    } else if (imc < 34.9) {
        result = "Obesidade I";
    } else {
        result = "Obesidade grau II";
    }

    document.getElementById("result").textContent = `Seu IMC é ${imc.toFixed(2)} e você está ${result}`;
}


