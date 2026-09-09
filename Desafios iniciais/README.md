# EstartandoDevs

Este repositório reúne uma série de exercícios práticos de lógica e JavaScript, além de um projeto inicial em React + TypeScript + Vite.

## Estrutura do projeto

- `Desafios iniciais/` — conjunto de exercícios com foco em lógica, manipulação de dados, regras de negócio e algoritmos.
- `Estartando/` — projeto principal em React + TypeScript, configurado com Vite.

## Resumo dos desafios iniciais

### 1. Validador de Cadastro
Diretório: `Desafios iniciais/01.Validador de Cadastro/`

Este desafio consiste em criar uma função `validarCadastro(usuario)` que valida:
- nome com pelo menos 3 caracteres;
- idade maior ou igual a 18;
- email com `@` e domínio válido;
- senha com no mínimo 6 caracteres e com pelo menos um número.

A função deve retornar um objeto com `valido` e uma lista de erros acumulados.

### 2. Caixa de Mercado com Desconto
Diretório: `Desafios iniciais/02.Caixa de Mercado com Desconto/`

Neste exercício, a ideia é implementar `fecharCompra(carrinho, clienteVip)` para:
- calcular o subtotal do carrinho;
- aplicar 10% de desconto se o subtotal for maior que R$ 100;
- aplicar mais 5% de desconto para clientes VIP;
- arredondar o total final para 2 casas decimais.

### 3. Boletim da Turma
Diretório: `Desafios iniciais/03.Boletim da Turma/`

Aqui o desafio é montar um boletim escolar a partir de uma turma de alunos.

As funções pedidas incluem:
- `calcularMedia(notas)`;
- `definirStatus(media)`;
- `gerarBoletim(turma)`.

O resultado final deve incluir:
- média de cada aluno;
- status de aprovação;
- média geral da turma;
- melhor e pior aluno com base nas médias.

### 4. Fila de Atendimento com Prioridade
Diretório: `Desafios iniciais/04.Fila de Atendimento com Prioridade/`

Este desafio trabalha com filas e priorização de atendimento, simulando um sistema em que alguns clientes devem ser atendidos antes de outros.

### 5. Cifra de César
Diretório: `Desafios iniciais/05.Cifra de Cesar/`

Este exercício aborda criptografia simples usando a Cifra de César, aplicando deslocamento nas letras de uma mensagem.

### 6. Reimplementando map, filter e reduce
Diretório: `Desafios iniciais/06.Reimplementando map filter e reduce/`

Neste desafio, o objetivo é recriar as funcionalidades principais de `map`, `filter` e `reduce` em JavaScript, entendendo como essas operações funcionam por baixo.

### 7. Motor de Regras Customizável
Diretório: `Desafios iniciais/07.Motor de Regras Customizável/`

Esse exercício envolve a criação de um sistema que avalia entradas com base em regras configuráveis, útil para validar dados em fluxos mais dinâmicos.

### 8. Jogo da Velha no Console
Diretório: `Desafios iniciais/08.Jogo da Velha no Console/`

Este desafio consiste em desenvolver o clássico jogo da velha em ambiente de console, com lógica de turno, vitória e condições de empate.

## Projeto `Estartando`

A pasta `Estartando/` contém uma aplicação em React + TypeScript com Vite, que serve como parte prática do aprendizado do curso e da estruturação de projetos front-end.

## Objetivo geral

Esse repositório foi organizado para:
- praticar lógica de programação em JavaScript;
- desenvolver soluções para problemas comuns do dia a dia;
- construir uma base sólida para projetos front-end com React.

---
