const nome = null // Colegando null ou undefined, o retorno será Anônimo, insira um nome, ele vai retornar esse nome.
console.log(nome?? "Anônimo") 

//*********************************************************************/

const ativo = false // Se o ativo for null ou undefined, ele retornará true.
console.log(ativo ?? true)

//*********************************************************************/

const config = {
    timeout: 0 //se o valor for null ou undefined ele vai retornar o valor de 5000 ao invés de zero.
}

const timeout = config.timeout ?? 5000

console.log(timeout)

//*********************************************************************/
const user = null

console.log(user?.name)

//*********************************************************************/

const user = {
    profile: {
        name: null
    }
}

const nome = user?.profile?.name ?? "Visitante"

console.log(nome)
