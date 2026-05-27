/*

while (condição){
    //Executa enquanto true
}

*/

//Contador regressivo
let contador = 10 //inciialização

while (contador>=0){//Condição
    console.log(contador)
    contador--//Decremento
}

const prompt = require("prompt-sync")();

let senha = prompt("Insira sua senha: ")

while (senha.length < 8){
    console.log('Insira uma senha com no mínimo 8 caracteres')
    senha = prompt("Insira sua senha: ")
}

console.log('Senha OK')


/*

do{
    //executa ANTES  de checar

}while (condição)


*/

let opcao

do{
    console.log('1. Listar')
    console.log('2. Cadastrar')
    console.log('3. Sair')
    opcao = Number(prompt('Opção: '))

    switch (opcao){
        case 1: console.log('Abrindo listar....');
        break
        case 2: console.log('Abrindo cadastrar....');
        break
        case 3: console.log('Até logo....');
        break
        default: console.log('Opção Inválida...')

    }
}while (opcao !== 3)


