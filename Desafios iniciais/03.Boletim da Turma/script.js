function calcularMedia(notas) {
    let soma = 0;

    // Loop tradicional para somar todas as notas do array
    for (let i = 0; i < notas.length; i++) {
        soma = soma + notas[i];
    }

    // Divide a soma pela quantidade de notas
    let media = soma / notas.length;

    // toFixed(2) limita a 2 casas decimais, e Number() converte de volta para número
    return Number(media.toFixed(2));
}


function definirStatus(media) {
    if (media >= 7) {
        return "Aprovado";
    }
    if (media >= 5 && media <= 6.9) {
        return "Recuperação";
    }
    if (media < 5) {
        return "Reprovado";
    }
}


function gerarBoletim(turma) {
    let listaAlunos = [];
    let somaDasMedias = 0;

    // 1. Processa cada aluno da turma
    for (let i = 0; i < turma.length; i++) {
        let alunoAtual = turma[i];

        // Calcula a média e o status chamando as funções anteriores
        let mediaAluno = calcularMedia(alunoAtual.notas);
        let statusAluno = definirStatus(mediaAluno);

        // Adiciona a média do aluno para depois calcular a média geral
        somaDasMedias = somaDasMedias + mediaAluno;

        // Cria o objeto do aluno e adiciona na lista
        let novoAluno = {
            nome: alunoAtual.nome,
            media: mediaAluno,
            status: statusAluno
        };

        listaAlunos.push(novoAluno);
    }

    // 2. Calcula a média geral da turma
    let mediaGeral = somaDasMedias / turma.length;

    // 3. Descobre o melhor e o pior aluno
    // Começamos assumindo que o primeiro aluno da lista é o melhor e o pior
    let melhor = listaAlunos[0];
    let pior = listaAlunos[0];

    // Passamos por todos os alunos comparando as médias
    for (let i = 0; i < listaAlunos.length; i++) {
        if (listaAlunos[i].media > melhor.media) {
            melhor = listaAlunos[i];
        }

        if (listaAlunos[i].media < pior.media) {
            pior = listaAlunos[i];
        }
    }

    // 4. Monta e retorna o objeto final
    return {
        alunos: listaAlunos,
        mediaGeralTurma: Number(mediaGeral.toFixed(2)),
        melhorAluno: {
            nome: melhor.nome,
            media: melhor.media
        },
        piorAluno: {
            nome: pior.nome,
            media: pior.media
        }
    };
}

// Exemplo fornecido pelo exercício
const turma = [
    { nome: "Ana", notas: [8.5, 7.0, 9.2] },
    { nome: "Bruno", notas: [4.0, 5.5, 6.0] },
    { nome: "Carla", notas: [10, 10, 9.5] },
    { nome: "Diego", notas: [3.0, 4.5, 2.0] },
];

console.log(gerarBoletim(turma));