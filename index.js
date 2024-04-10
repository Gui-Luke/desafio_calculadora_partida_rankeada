let saldo = vitoriasRankeadas(295, 35)

console.log(saldo)

//Função para sortear o nível do herói.
function sortearNumero(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//Função que realiza o cálculo de saldo de vitórias (vitórias - derrotas) do nosso herói.
function vitoriasRankeadas(vitorias, derrotas){

    let saldoDeRankeadas = vitorias - derrotas
    return saldoDeRankeadas
}

//Estrutura de controle para analisar o saldo de vitórias e lhe atribuir um rank.
switch(true){
    case saldo<=10:
        console.log("Ferro")
        nivel = sortearNumero(1,10)
        console.log("O herói tem o saldo de " + saldo + " vitórias e está no nível de " + nivel + " rank Ferro.")
        break

    case saldo >=11 && saldo <=20:
        console.log("Bronze")
        nivel = sortearNumero(11,15)
        console.log("O herói tem o saldo de " + saldo + " vitórias e está no nível de " + nivel + " rank Bronze.")
        break

    case saldo >=21 && saldo <=50:
        console.log("Prata")
        nivel = sortearNumero(16,30)
        console.log("O herói tem o saldo de " + saldo + " vitórias e está no nível de " + nivel + " rank Prata.")
        break

    case saldo >=51 && saldo <=80:
        console.log("Ouro")
        nivel = sortearNumero(31,50)
        console.log("O herói tem o saldo de " + saldo + " vitórias e está no nível de " + nivel + " rank Ouro.")
        break

    case saldo >=81 && saldo <=90:
        console.log("Diamante")
        nivel = sortearNumero(51,75)
        console.log("O herói tem o saldo de " + saldo + " vitórias e está no nível de " + nivel + " rank Diamante.")
        break

    case saldo >=91 && saldo <=100:
        console.log("Lendário")
        nivel = sortearNumero(76,90)
        console.log("O herói tem o saldo de " + saldo + " vitórias e está no nível de " + nivel + " rank Lendário.")
        break

    default:
        console.log("Imortal")
        nivel = sortearNumero(91,1000)
        console.log("O herói tem o saldo de " + saldo + " vitórias e está no nível de " + nivel + " rank Imortal.")
}