class Observer {
    constructor() {
        this.observables = []
    }

    subscrube(fn) {
        this.observables.push(fn)
    }
    notify(date) {
        this.observables.forEach(fn => fn(date))
    }
    unsubscribe(fn) {
        this.observables.forEach(obs => obs !== fn)
    }
}

const o = new Observer()

const data1 = data => console.log(`Subscribe 1: ${data}`)
const data2 = data => console.log(`Subscribe 2: ${data}`)
const data3 = data => console.log(`Subscribe 2: ${data}`)

o.subscrube(data1)
o.subscrube(data2)
o.subscrube(data3)

o.notify('notifield 1')

o.unsubscribe(data2)

o.notify('notifield 2')