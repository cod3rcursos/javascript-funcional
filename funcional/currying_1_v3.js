function textoComTamanhoEntre(min) {
    return function (max) {
        return function(erro) {
            return function(texto) {
                // Lazy Evaluation
                const tamanho = (texto || '').trim().length
            
                if(tamanho < min || tamanho > max) {
                    throw erro
                }
            }
        }
    }
}

function aplicarValidacao(fn) {
    return function (valor) {
        // Lazy Evaluation
        try {
            fn(valor)
        } catch(e) {
            return { error: e }
        }
    }
}

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)
const forcarNomeProdutoValido = forcarTamanhoPadrao('Nome produto inválido!')
const validarNomeProduto = aplicarValidacao(forcarNomeProdutoValido)

const p1 = { nome: 'A', preco: 14.99, desc: 0.25 }
const p2 = { nome: 'AB', preco: 14.99, desc: 0.25 }
console.log(validarNomeProduto(p1.nome))
console.log(validarNomeProduto(p2.nome))