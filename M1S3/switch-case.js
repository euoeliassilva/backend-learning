const nivelAcesso = 'ADMIN'

switch (nivelAcesso){
    case 'USER':
        //Aqui entra a lógica par ao perfil
        console.log ('Acessando rota user...')
        break    
    case 'ADMIN':
        //Aqui entra a lógica par ao perfil
        console.log ('Acessando rota admin...')
        break

    default:
        //Aqui entra a lógica para o perfil desconhecido
        console.log('Acessando rota global...')
}