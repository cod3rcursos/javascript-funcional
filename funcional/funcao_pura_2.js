// Uma função pura é uma função em que o valor
// de retorno é determinado APENAS por seus valores
// de entrada, sem efeitos colaterais observáveis

// Função impura
function gerarNumeroAleatorio(min, max) {
    const fator = max - min + 1
    return parseInt(Math.random() * fator) + min
}

console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))
console.log(gerarNumeroAleatorio(1, 10000))