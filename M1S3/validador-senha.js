/*
LIVE CODING
VALIDADOR DE SENHA

*/

function validarSenha(senha){ 
    if (typeof senha !== 'string'){
        return {
            ok: false,
            msg: 'Deve ser uma "string"'
        }
    }

    const minLen = senha.length >= 8
    const maxLen = senha.length <= 64
    const temMaius = /[A-Z]/.test(senha)    // Testando se dentro da senha tem alguma letra maiúscula de A a Z. Expressões Regulares (Veriricar depois)
    const temNum = /[0-9]/.test(senha)
    const temEsp = /[!@*#%$]/.test(senha)
    const temMinus = /[a-z]/.test(senha)
    const temEspaco = !/\s/.test(senha) // espaço em branco é representado por /\s/. O ! é para justamente verificar se não tem espaços

    const ok = minLen && maxLen 
                && temMaius && temNum 
                && temEsp && temMinus 
                && temEspaco

    return {
        ok: ok,
        msg: ok ? 'Senha Forte' : 'Senha Fraca',
    }
}


const prompt = require('prompt-sync')();

const senha = prompt('Digite a sua senha: ')

console.log(validarSenha(senha))
