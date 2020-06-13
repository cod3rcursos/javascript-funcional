
const x = 3

function fora() {
    const x = 97
    function somarXMais3() {
        return x + 3
    }
    return somarXMais3
}

module.exports = fora()