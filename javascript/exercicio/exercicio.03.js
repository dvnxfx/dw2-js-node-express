/*
3. Crie uma função anônima atribuída a uma constante chamada calcularDobro
que receba um número e retorne o dobro desse número. Exiba o resultado
utilizando document.write.

4. Crie uma Arrow Function atribuída a uma constante chamada calcularMetade
que receba um número e retorne a metade desse número. Exiba o resultado
utilizando document.write.

5. Crie uma IIFE (Immediately Invoked Function Expression) que, ao ser
executada, exiba a mensagem Calculadora Universal pronta para uso! no
navegador. Utilize document.write.*/
const valor = prompt(`Insira o valor:`);
const calcularDobro = valor => {
  return valor * 2;
};
document.write(`<p>O dobro do número é ${valor*2}.</p>`);


