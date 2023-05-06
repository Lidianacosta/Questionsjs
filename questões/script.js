// 1. Crie um programa que peça ao usuário para digitar um número inteiro e, em seguida, verifique se o número é par ou ímpar. Imprima o resultado no console.


const numero = parseInt(prompt(`digite o numero para verificar se é par ou impar: `));

if (numero % 2 === 0) {
  //alert(`${numero} é par`);
  console.log(`${numero} é par`);
} else {
  //alert(`${numero} é impar`);
  console.log(`${numero} é impar`);
}

// 2. Crie um programa que peça ao usuário para digitar dois números e, em seguida, calcule a soma, subtração, multiplicação e divisão desses números. Imprima os resultados no console.

const numero = parseInt(prompt(`digite um números para fazer operações matematicas : `));
const numero1 = parseInt(prompt(`digite outro número para fazer operações matematicas : `));

let soma,multiplicacao,subtracao,divisao;

soma = numero + numero1;
subtracao = numero - numero1;
multiplicacao = numero * numero1;
divisao = numero / numero1;

console.log(`a soma :` + soma);
console.log(`a subtracao :` + subtracao);
console.log(`a multiplicacao :` + multiplicacao);
console.log(`a divisao :` + divisao);

// 3. Crie um programa que peça ao usuário para digitar uma frase e, em seguida, conte quantas vezes a letra "a" aparece na frase. Imprima o resultado no console.

const frase = prompt(`digite uma frase: `);
let cont_a = 0;

for(let i = 0; i < frase.length; i++){
  if(frase[i] === `a`){
    cont_a++;
  }
}
console.log(`tem ` + cont_a + ` a`);

// 4. Crie um programa que peça ao usuário para digitar uma lista de números separados por vírgula. Em seguida, converta essa lista em um array e calcule a média dos números. Imprima o resultado no console.

// 5. Crie um programa que peça ao usuário para digitar uma palavra e, em seguida, verifique se a palavra é um palíndromo. Um palíndromo é uma palavra que pode ser lida da mesma forma da esquerda para a direita e da direita para a esquerda. Imprima o resultado no console.

// 6. Crie um programa que peça ao usuário para digitar um número e, em seguida, calcule o fatorial desse número. O fatorial de um número é o produto de todos os números inteiros positivos de 1 até esse número. Por exemplo, o fatorial de 5 é 5 x 4 x 3 x 2 x 1 = 120. Imprima o resultado no console.

function fatorial(numero) {
  let fat = 1;
  for(let i = 1; i <=numero; i++) {
    fat *= i;
  }
  console.log(`fatorial: `+ fat);
}

const numero = parseInt(prompt(`digite um numero para saber seu fatorial: `));

fatorial(numero);

// 7. Crie um programa que peça ao usuário para digitar o nome, idade e cidade onde mora. Em seguida, crie um objeto com essas informações e imprima o objeto no console.

// 8. Crie um programa que peça ao usuário para digitar um número e, em seguida, imprima todos os números primos até esse número.

function verifica_primo(numero) {
  let entrou = 0;
  let i;
  let j;
  for (i = 2; i <=numero; i++) {
     for (j = 1; j <=i ; j++){
       if(i % j == 0){
         entrou++;
       }
     }
    if(entrou == 2){
      console.log(i);
    }
  }
}

const numero = parseInt(prompt(`digite um numero: `));

verifica_primo(numero);

// tentativa

// 9. Crie um programa que peça ao usuário para digitar uma lista de números separados por vírgula e, em seguida, ordene os números em ordem crescente e imprima a lista ordenada no console.

// 10. Crie um programa que peça ao usuário para digitar um número inteiro e, em seguida, imprima os números de 1 a esse número no console. Se o número for múltiplo de 3, imprima "ZZZ" em vez do número. Se o número for múltiplo de 5, imprima "XXXXX" em vez do número. Se o número for múltiplo de 3 e 5, imprima "XXXZZZZZ" em vez do número.

const numero = parseInt(prompt(`digite o número: `));

if(numero % 3 === 0 && numero % 5 === 0){
  console.log(`ZZZXXXXX`);
}else if(numero % 3 === 0){
  console.log(`ZZZ`);
}else if(numero % 5 === 0){
  console.log(`XXXXX`);
}else{
  for (let i = 1; i <=numero; i++){
     console.log(i);
  }
}

// 11. Crie um programa que peça ao usuário para digitar uma lista de números separados por vírgula. Em seguida, crie uma função que encontre o segundo maior número da lista e o imprima no console.

// 12. Crie um programa que peça ao usuário para digitar um texto e, em seguida, crie uma função que conte quantas vezes cada palavra aparece no texto. Armazene o resultado em um objeto e imprima o objeto no console.

// 13. Crie um programa que peça ao usuário para digitar uma lista de nomes separados por vírgula. Em seguida, crie uma função que ordene os nomes por ordem alfabética e imprima a lista ordenada no console.

// 14. Crie um programa que peça ao usuário para digitar o nome, idade, número de celular e cidade onde mora. Em seguida, crie um objeto com essas informações E PERGUNTE se ele quer alterar AS INFORMAÇÕES, caso ele queira, imprima o que ele já digitou e peça para ele alterar, depois imprima o objeto antes e depois no console.

const pessoa = {
  nome:`nana`,
  idade:`18`,
  numero_de_celular:`12345`,
  cidade:`natal`,
}

alert(`nome:  ${pessoa.nome}\nidade: ${pessoa.idade}\nnumero de celular:  ${pessoa.numero_de_celular}\ncidade: ${pessoa.cidade}\n`);


const escolha = prompt(`se quer mudar seus dados digite sim:`);
if(escolha === `sim`){
pessoa.nome = prompt(`digite seu nome: `);
pessoa.idade = prompt(`digite sua idade:  `);

pessoa.numero_de_celular = prompt(`digite seu número de celular:  `);

pessoa.cidade = prompt(`digite a cidade que mora:  `);

  alert(`nome:  ${pessoa.nome}\nidade: ${pessoa.idade}\nnumero de celular:  ${pessoa.numero_de_celular}\ncidade: ${pessoa.cidade}`);
console.log(pessoa);
}
