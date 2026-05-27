/*
for(inicialização ; condição ; incremento/decremento){
    //bloco de código que deverá ser executado
}
*/

//Exibir em ordem crescente de 0 a 9
for (let i = 0; i <=9; i++){ //i++ === (i = i+ 1)
    console.log(i)
}

//Exibir em ordem decrescente de 0 a 9

for (let i = 9; i >=0; i--){ //i-- === (i = i - 1)
    console.log(i)
}

// Exibir de 0 a 10 de 2 em 2

for (let i = 0; i <= 10; i+=2){// i+=2 === (i = i + 2)
    console.log(i)
}


// Continue em loop

for (let i = 0; i <= 10; i+=2){// i+=2 === (i = i + 2)
    console.log(i)

    if(i===8){
        continue //salta para o próximo proceso de repetição (loop)
    }

    console.log('****************')
}


// Break em loop

for (let i = 0; i <= 10; i+=2){// i+=2 === (i = i + 2)
    console.log(i)

    if(i===8){
        break //Encerra todo o processo de repetição
    }

    console.log('****************')
}
