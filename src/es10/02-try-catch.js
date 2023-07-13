try {
    hello();
} catch (error) {
    console.log(error);
}

try {
    anotherFn();
} catch (error) {
    console.log('Esto es un error :P..');
}

function hello() {
    console.log('Hello!!');
}

function anotherFn() {
    console.log('Estas dentro de anotherFn');
}