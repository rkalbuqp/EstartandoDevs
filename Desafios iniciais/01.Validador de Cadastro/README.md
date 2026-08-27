Crie a função validarCadastro, que recebe um objeto { nome, idade, email, senha } e valida:
- nome deve ter pelo menos 3 caracteres.
- idade deve ser um número maior ou igual a 18.
- email deve conter @ e um . depois dele.
- senha deve ter pelo menos 6 caracteres e conter ao menos um número.

A função deve verificar todas as regras (não parar no primeiro erro encontrado) e retornar:

{
valido: false,
erros: ["Idade mínima não atingida", "Senha muito curta"]
}

Se não houver erros, valido: true e erros: [].


/**
* Valida os dados de cadastro de um usuário.
* @param {Object} usuario
* @param {string} usuario.nome
* @param {number} usuario.idade
* @param {string} usuario.email
* @param {string} usuario.senha
* @returns {{ valido: boolean, erros: string[] }}
*/
function validarCadastro(usuario) {
// seu código aqui
}

const usuario = {
nome: "Maria Silva",
idade: 17,
email: "maria.silva@gmail.com",
senha: "123",
};

console.log(validarCadastro(usuario));