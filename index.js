/*
1. O que o código abaixo está fazendo? Qual o resultado impresso no
console?
let valor = 0
for(let i = 0; i < 5; i++) {
valor += i

}
console.log(valor)
//=====Ele cria uma variavel com valor zero, em seguida no loop ele incrementa enquanro essa variavel for menor que 5. Será impresso '10'que é o valor da variavel 'valor' apos o loop.

Leia o código abaixo:

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
if (numero > 18) {
console.log(numero)
}
}

a) O que vai ser impresso no console?
--Será impresso todos os numeros maior que 18

b) Se eu quisesse acessar o índice de cada elemento dessa lista, o
for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?
--Usa se o forEach()


3. Qual seria o resultado impresso no console, se o usuário digitasse o
número 4 ?

const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
let linha = ""
for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
linha += "*"
}

//Laços 3

console.log(linha)
quantidadeAtual++
}
//Imprime a variavel linha e incrementa com a quantidade atual, no caso se fosse 4, a variavel 'quantidadeTotal' = 4, ele imprime espaço junto com os asteriscos, e vai incrementando enquanto 'quantidadeTotal' maior que 'quantidadeAtual'.
*/

//codigos
//1

const quantidadeDeBichos = Number(prompt('Quantos bichos de estimação você tem?'));
const arrayPets = [];

if (quantidadeDeBichos === 0) {
    console.log('Que pena! Você pode adotar um pet!');
} else if (quantidadeDeBichos > 0) {
    for (let i = 1; i <= quantidadeDeBichos; i++) {
        const nomePet = prompt(`Digite o nome do ${i}º bichinho:`);
        arrayPets.push(nomePet);
    }

    console.log("Nomes dos seus bichinhos de estimação:");
    for (const nome of arrayPets) {
        console.log(nome);
    }
}


//2
const arrayOriginal = [];

function imprimeNum(arrayOriginal) {
    console.log(arrayNum)
    return
}

function imprimeSobreDez(arrayOriginal) {
    for (const num of arrayOriginal) {
    const produto = num / 10;
        console.log(produto)
    }  
}

function pares(arrayOriginal) {
    const listaPares = [];
    
    for (const num of arrayOriginal) {
      if (num % 2 === 0) {
        listaPares.push(num);
      }
    }
  
    return listaPares;
  }

  function arrayDeStrings(arrayOriginal) {
    const novaArray = [];
  
    for (let i = 0; i < arrayOriginal.length; i++) {
      const elemento = arrayOriginal[i];
      const novaString = `O elemento do índex ${i} é: ${elemento}`;
      novoArray.push(novaString);
    }
  
    return novoArray;
  }
  
  let maior = arrayOriginal[0];
  let menor = arrayOriginal[0];
  function encontrarMaiorMenor(arrayOriginal) {
    if (arrayOriginal.length === 0) {
      console.log("O array está vazio.");
      return;
    } for (const numero of arrayOriginal) {
      if (numero > maior) {
        maior = numero;
      } else if (numero < menor) {
        menor = numero;
      }
    }
    console.log(`Maior número: ${maior} e o menor ${menor}`);
  }
