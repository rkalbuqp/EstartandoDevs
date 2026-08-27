// Crie a função validarCadastro, que recebe um objeto { nome, idade, email, senha } e valida:
// - nome deve ter pelo menos 3 caracteres.
// - idade deve ser um número maior ou igual a 18.
// - email deve conter @ e um . depois dele.
// - senha deve ter pelo menos 6 caracteres e conter ao menos um número.

// A função deve verificar todas as regras (não parar no primeiro erro encontrado) e retornar:

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

    const email = usuario.email
    //Aqui guardamos as variáveis e o index do arroba e do ponto
    const temArroba = email.indexOf('@')
    const posicaoPonto = email.indexOf('.', temArroba)

    //Aqui checamos se tem arroba e se o ponto vem depois do arroba
    if (temArroba === -1 || posicaoPonto === -1) {
        errors.push("Email deve conter @ e um . depois dele")
    }


    //Caso a senha tenha mnenos de 6 caracteres ou não tenha um número (aqui usei ReGex), retorna erro
    if (usuario.senha.length < 6 || !/\d/.test(usuario.senha)) {
        errors.push("A senha deve ter pelo menos 6 caracteres e ao menos um número")
    }

    return {
        erros: errors
    }

};

//Exemplo solicitado no desafio
const usuario = {
    nome: "Ma",
    idade: 17,
    email: "maria.silva",
    senha: "123",
};

console.log(validarCadastro(usuario));


