const letrasAninhadas = [
    ['O', ['l'], 'á'],
    [' '],
    ['m', ['u', ['n']], 'd', 'o'],
    ['!', '!', '!', '!']
]

const letras = letrasAninhadas.flat(Infinity)

const resultado = letras
    .flatMap(l => [l, ','])
    .reduce((a, b) => a + b)

console.log(resultado)