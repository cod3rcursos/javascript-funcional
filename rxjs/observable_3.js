// desafio!
// Criar uma stream de numeros
// entre min e max com Observable!
const { Observable, noop } = require('rxjs')

function entre(min, max) {
    return new Observable(subscriber => {
        Array(max - min).fill().map((_, i) => {
            subscriber.next(min + i)
        })
        subscriber.complete()
    })
}

entre(4, 10)
    .subscribe(
        num => console.log(`num = ${num}`),
        noop,
        () => console.log('Fim!')
    )