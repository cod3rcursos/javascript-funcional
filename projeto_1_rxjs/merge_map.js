const { from } = require('rxjs')
const { mergeMap, map } = require('rxjs/operators')

const obs1 = from([1, 2, 3, 4])
const obs2 = from([5, 6, 7, 8])

obs1
    .pipe(
        mergeMap(n1 => obs2.pipe(map(n2 => `${n1} => ${n2}`)))
    )
    .subscribe(console.log)