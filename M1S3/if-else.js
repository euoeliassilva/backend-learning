const nota = 7.5;

if (nota >= 9) {
    console.log("Excelente");
}else if (nota >= 7) { // Só é avaliado se a primeira condição (if) for falsa. Não usamos if aqui, do contrário, mesmo se a primeira condição for verdadeira, a segunda com if seria executada, por isso utilizamos else if.
    console.log("Aprovado");
}else if (nota >= 5) {
    console.log("Recuperação");
}else{
    console.log("Reprovado")
}


//***************************************************************/

let token // o resultado será undefined devido o fato da variável não ter sido decladara

if (token){
    console.log("Tem um valor no token")
}else{
    console.log(token)
}


//**************************************************************/
let token = "20aB424258wf$gjfsfj"

if (token){
    console.log("Tem um valor no token")
}else{
    console.log(token)
}

//**************************************************************/

let teste = ' ' === '' //Retoorna false devido a diferença de espaço entre as aspas. Um espaço preenchido é um valor armazenado
console.log(teste)

//**************************************************************/

let nome = '  Elias   '
nome = nome.trim() //remove os espaços em branco no começo e no final da string

if (nome.trim() !== ''){
    console.log(`${nome}! Bem-vindo de volta!`) //Template String
}


//**************************************************************/

