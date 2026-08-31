Crie gerarBoletim(turma), onde turma é um array de alunos { nome, notas }, e notas é um array de notas.

Crie três funções:
1. calcularMedia(notas) — retorna a média de um array de notas.
2. definirStatus(media) — retorna "Aprovado" (média ≥ 7), "Recuperação" (média entre 5 e 6.9) ou "Reprovado" (média < 5).
3. gerarBoletim(turma) — usa as duas funções acima e monta o relatório completo.

Retorno esperado:
{
alunos: [{ nome: "Ana", media: 8.23, status: "Aprovado" }, ...],
mediaGeralTurma: 6.5,
melhorAluno: { nome: "Carla", media: 9.83 },
piorAluno: { nome: "Diego", media: 3.17 }
}

melhorAluno e piorAluno precisam ser calculados dinamicamente — não pode ser um valor fixo no código.

/**
* Calcula a média de um conjunto de notas.
* @param {number[]} notas
* @returns {number} média das notas
*/
function calcularMedia(notas) {
// seu código aqui
}

/**
* Define o status de aprovação com base na média final.
* @param {number} media
* @returns {"Aprovado" | "Recuperação" | "Reprovado"}
*/
function definirStatus(media) {
// seu código aqui
}

/**
* Gera o boletim completo de uma turma.
* @param {Array<{ nome: string, notas: number[] }>} turma
* @returns {{
* alunos: Array<{ nome: string, media: number, status: string }>,
* mediaGeralTurma: number,
* melhorAluno: { nome: string, media: number },
* piorAluno: { nome: string, media: number }
* }}
*/
function gerarBoletim(turma) {
// seu código aqui
}

const turma = [
{ nome: "Ana", notas: [8.5, 7.0, 9.2] },
{ nome: "Bruno", notas: [4.0, 5.5, 6.0] },
{ nome: "Carla", notas: [10, 10, 9.5] },
{ nome: "Diego", notas: [3.0, 4.5, 2.0] },
];

console.log(gerarBoletim(turma));