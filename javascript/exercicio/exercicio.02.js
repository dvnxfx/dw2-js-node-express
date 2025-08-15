/*
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

const op1 = prompt(`Insira o primeiro número:`);
const op2 = prompt(`Insira o operador:`);
const op3 = prompt(`Insira o segundo número:`);

function operacaoMatematica(op1, op2, op3) {
  const result = eval (`${op1} ${op2}  ${op3}`);
  document.write(`<p> O resultado de ${op1} ${op2}  ${op3} é igual a ${result}</p>`);
  
};
operacaoMatematica(op1, op2, op3);