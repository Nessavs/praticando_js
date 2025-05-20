// precisa ter 3 instruções
// for (inicialização ; condição ; atualização) {

// }

// inicialização -> executada apenas uma vez
// condição -> avaliada antes de cada iteração, se for true continua se for false o laço para 
// atualização -> executada após cada iteração do laço 


const numero = 5

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i

    console.log(`${numero} x ${i} = ${resultado}`)
}

//utilizamos o BREAK quando para parar o codigo quando entra na condição do IF não importando oque tem no contador do FOR como condição <= 50

for (let contador = 1; contador <= 50; contador++) {
    const numero = Math.floor(Math.random() * (50 - 1 + 1) + 1)

    if (numero === 15) {
        console.log(`${numero} em ${contador} tentativas`)
        break
    }
}

//utilizamos o CONTINUE para

let contador1 = 0

for(let i=1; i<=20; i++) {
    const numero = Math.floor(Math.random() * (50 - 1 +1) + 1)
    if (numero %5 === 0) {
        continue

        //ele vai ignorar e nao vai mostrar essa parte, para continuar sem ela, quando é desnecessario
    }
    contador1++
}

console.log('contador', contador1)

//exemplos de mais "continue":

const nomes = ["Ana", "", "João", "", "Carlos"]

for (let i = 0; i < nomes.length; i++) {
    if (nomes[i] === "") {
        continue // pula nomes vazios
    }

    console.log("Nome válido:", nomes[i])
}

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue
    }

    console.log("Número ímpar:", i)
}
