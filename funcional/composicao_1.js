
function composicao(...fns) {
    return function(valor) {
        return fns.reduce((acc, fn) => {
            return fn(acc)
        }, valor)
    }
}

function gritar(texto) {
    return texto.toUpperCase()
}

function enfatizar(texto) {
    return `${texto}!!!!`
}

function tornarLento(texto) {
    return texto.split('').join(' ')
}

const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento
)

const umPoucoMenosExagerado = composicao(
    gritar,
    enfatizar
)

const resultado1 = exagerado('PARA')
const resultado2 = umPoucoMenosExagerado('Cuidado com o buraco!!!')

console.log(resultado1)
console.log(resultado2)