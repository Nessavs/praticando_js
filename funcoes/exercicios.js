function nomeDaFunção(parametros) {
    //bloco de codigo
    retorno
}

// parametros: opcionais, é oque ela precisa receber para executar corretamente
// retorno: ultima instrução, nao é obrigatorio ter

function darBoasVindas (nome) {
    return `Boas vindas, ${nome}`
}

darBoasVindas('Solange')
    console.log(darBoasVindas('Juliana'))
    
//duvidas que eu pensei para memorizar melhor
// por que o retorno de algumas funções retorna true? "return true" ou null? R: so para dizer que a função deu certo 
//ex:
function validarSenha(senha) {
  if (senha.length < 8) {
    return false // senha fraca
  }

  // senha boa
  return true
}


// se eu ter que puxar essa variavel de outro arquivo ou de outra funcao como que eu faço?
//R: usa o import e o export


// sempre tem que chamar a função para ela ser valida e nao ficar apagada no codigo?
//R: sim

// por que algumas funções começam com conts? é aquelas funçoes anonimas?
//R: sim, 
//obs: muda a função arrow function(anonima) da função normal o jeito que executa, se chamar a arrow antes dela ser definida da erro, pois o codigo vai lendo linha por linha
//ja a função normal carrega todas as funções do arquivo e depois le oque tem dentro // "hoisting"

//faço a função
function divide(dividendo, divisor) { //as variaveis do divide são parametros
    return dividendo / divisor
}

//preciso fazer uma variavel para passar os dados para a função
const resultado = divide(12, 2) //os dados que vai usar na função agora sao argumentos, é o dado

console.log(resultado)
