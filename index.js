function returnName() {
    return 'Vinicius Rodrigues Alencar';
}
function aux(func) {
    console.log(func());
}
const sss = aux
sss(returnName)
