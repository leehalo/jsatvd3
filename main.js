//essa variável armazena a sua idade em anos humanos/
let myAge = 16

//esses são os dois primeiros anos da vida de um cão, que contam mais do que os anos subsequentes/
let earlyYears = 2

//Multiplica earlyYears por 10.5 para obter a idade equivalente em "anos de cão"/
earlyYears * 10.5

//laterYears representa os anos restantes após os dois primeiros anos, que contarão como "anos de cão"/
let laterYears = myAge - 2;

//Multiplica laterYears por 4 para obter a idade equivalente em "anos de cão"/
laterYears * 4; 
 
//Valor esperado: resultado do cálculo dos primeiros anos em "anos de cão/
console.log(earlyYears)
console.log(laterYears)

//myAgeInDogYears representa a sua idade em "anos de cão"/
let myAgeInDogYears = earlyYears + laterYears;

//Essa linha de código converte seu nome para letras minúsculas/

let myName = "BIA".toLowerCase(); 
console.log(myName)

//Imprime no console a frase com os valores substituídos pelas variáveis/
console.log(`Meu nome é ${myName}. Tenho ${myAge} anos em anos humanos, que são ${myAgeInDogYears} anos em anos de cão.`);