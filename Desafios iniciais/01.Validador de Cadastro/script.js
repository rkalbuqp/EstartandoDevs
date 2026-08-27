const validarCadastro = (usuario) => {
    const errors = []

    //Checa o tamanho do nome, que deve ter, pelo menos, 3 caracteres
    if (usuario.nome.length < 3) {
        errors.push("Nome deve ter pelo menos 3 caracteres")
    }

    //Checa da idade que caso seja menor que 18 anos, retorna o erro
    if (usuario.idade < 18) {
        errors.push("Idade mínima não atingida")
    }


    //Aqui guardamos as variáveis e o index do arroba e do ponto
    const temArroba = usuario.email.indexOf('@')
    const posicaoPonto = usuario.email.indexOf('.', temArroba)

    //Aqui checamos se tem arroba e se o ponto vem depois do arroba
    if (temArroba === -1 || posicaoPonto === -1) {
        errors.push("Email deve conter @ e um . depois dele")
    }


    //Caso a senha tenha mnenos de 6 caracteres ou não tenha um número (aqui usei ReGex), retorna erro
    if (usuario.senha.length < 6 || !/\d/.test(usuario.senha)) {
        errors.push("A senha deve ter pelo menos 6 caracteres e ao menos um número")
    }


    //Aqui vamos verificar se existe algo listado e index de erros pelo parâmetro 'valido'. 
    //Caso não haja erros detectados, deve retornar true.
    //Em caso de haver erro, retornará no console o erro que foi pushed na verificação que a função faz.
    return {
        valido: errors.length === 0,
        erros: errors
    }

};

//Exemplo adaptado do sugerido para que se retorne true (deixarei comentado para que não gere erros de console)
// const usuario = {
//     nome: "Maria Silva",
//     idade: 19,
//     email: "maria.silva@gmail.com",
//     senha: "123ahmshjkdsak"
// };

//Exemplo sugerido para o exercício
const usuario = {
    nome: "Maria Silva",
    idade: 17,
    email: "maria.silva@gmail.com",
    senha: "123",
};

console.log(validarCadastro(usuario));


