const prompt = require('prompt-sync')();

const num1 = parseInt(prompt('Digite o primeiro número: '))

const num2 = parseInt(prompt('Digite o segundo número: '))

console.log(`Escolha o número para a operação:
1: Soma
2: Subtração
3: Multiplicação
4: Divisão`);
const operacao = prompt('Digite sua opção:');


if (operacao == '1'){
    console.log(` O resultado da soma é: ${num1 + num2}`)

}else if (operacao == '2'){
        console.log(` O resultado da subtração é: ${num1 - num2}`)

}else if (operacao == '3'){
        console.log(` O resultado da multiplicação é: ${num1 * num2}`)


}else if (operacao == '4'){
        if (num2 == 0){
            console.log('Erro! Não é possível dividir um número por zero' )
        }else{
            console.log(` O resultado da divisão é: ${num1 / num2}`)
        }
        

}else{
    console.log('Escolha uma operação válida')
}