/*
 Calculadora IMC
 */

function calculadoraImc(peso, altura) {
    const isPesoValid = peso > 0 && peso <= 300;
    const isAlturaValid = altura > 0 && altura <= 3;

    if (!(isPesoValid && isAlturaValid)) {
        return {
        result: null,
        message: "Valores inválidos! Insira valores corretos."
        };
    }

    const imc = peso / (altura ** 2);
    let msg = "";

    if (imc < 18.5) {
        msg = `O seu IMC é ${imc.toFixed(1)}. Você está abaixo do peso ideal.`;
    } else if (imc <= 24.9) {
        msg = `Parabéns! O seu IMC é ${imc.toFixed(1)}. Você está dentro da classificação normal.`;
    } else if (imc <= 29.9) {
        msg = `O seu IMC é ${imc.toFixed(1)}. Você está com sobrepeso.`;
    } else if (imc <= 34.9) {
        msg = `O seu IMC é ${imc.toFixed(1)}. Você está com obesidade grau I.`;
    } else if (imc <= 39.9) {
        msg = `O seu IMC é ${imc.toFixed(1)}. Você está com obesidade grau II.`;
    } else {
        msg = `Atenção! O seu IMC é ${imc.toFixed(1)}. Você está com obesidade grau III.`;
    }

    return {
        result: imc.toFixed(1),
        message: msg
    };
}

const prompt = require("prompt-sync")();

const altura = parseFloat(prompt("Digite a sua altura em metro: "));
const peso = parseFloat(prompt("Digite o seu peso em kg: "));

const resposta = calculadoraImc(peso, altura);
console.log(resposta.message);

