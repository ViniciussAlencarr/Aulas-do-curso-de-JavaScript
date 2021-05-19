var test = 'test01';
(() => {
    console.log(test);

    if (true) {
        var test = 'test02'
        console.log(test)
    }
    console.log(test);
})();

(() => {
    let test = 'Vinicius';
    console.log(test)

    if (true) {
        let test = 'Vini'
        console.log(test)
    }
    console.log(test)

})();

(() => {
    const test = 'Vini';
    console.log(test);

    if (true) {
        const test = 'Vinicius';
        console.log(test)
    }
    console.log(test);

})();