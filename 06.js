function fn() {
    console.log('kajsdlka')
}

const a = () => 'asdsakj'
const b = () => {
    return 'akakakakaka'
}
fn.prop = 'Pasdiasd'

/* console.log(fn())
console.log(fn.prop)
console.log(a())
console.log(b()) */
const somatoria = (n1, n2) => {
    return n1+n2
}

const somar = somando => console.log(somatoria(2,5));

const controlFnExec = fnParam => allowed => {
    if (allowed) {
        return fn()
    }
}

const bs = controlFnExec(fn)

bs(true)
bs()