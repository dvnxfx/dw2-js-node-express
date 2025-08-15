/*1. Funções: O Desafio da Calculadora Universal
Contexto: Você foi contratado para desenvolver uma calculadora web que não
apenas realiza operações básicas, mas também pode exibir mensagens
personalizadas e calcular o dobro ou a metade de um número. Seu desafio é criar
funções flexíveis que possam lidar com diferentes tipos de entradas e retornar os
resultados de forma clara.
Tarefa:

1. Crie uma função chamada saudacaoPersonalizada que receba um nome como
parâmetro e exiba uma mensagem de boas-vindas no formato Olá, [Nome do
Usuário]! Bem-vindo(a) à Calculadora Universal!. Utilize document.write para
exibir a mensagem.

2. Crie uma função chamada operacaoMatematica que receba três parâmetros:
num1, operador (string como '+', '-', '*', '/') e num2. Esta função deve
realizar a operação matemática correspondente e exibir o resultado no
formato O resultado de [num1] [operador] [num2] é igual a [resultado]..
Utilize document.write.

3. Crie uma função anônima atribuída a uma constante chamada calcularDobro
que receba um número e retorne o dobro desse número. Exiba o resultado
utilizando document.write.

4. Crie uma Arrow Function atribuída a uma constante chamada calcularMetade
que receba um número e retorne a metade desse número. Exiba o resultado
utilizando document.write.

5. Crie uma IIFE (Immediately Invoked Function Expression) que, ao ser
executada, exiba a mensagem Calculadora Universal pronta para uso! no
navegador. Utilize document.write.*/

const user = "Dani";

function saudacaoPersonalizada(user) {
  document.write(`<p>Olá, ${user}! Bem-vindo(a) à Calculadora Universal!</p>`);
};

saudacaoPersonalizada(user);