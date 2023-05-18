function add2(input1: number, input2: number) {
    return input1 + input2;
}

// Essa função não retorna nada, por isso o tipo do retorno é void
function printResult2(num: number)/*: void*/ {
    console.log('Result: ' + num);
};

printResult2(add2(5,12));

//Função também pode ser um tipo de dados
let combineValues: Function;

combineValues = add2;
//combineValues = 5;

console.log(combineValues(8, 8));

// Podemos também atribui uma function como parametro
function addAndHandel(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
    
}

addAndHandel(10, 20, (result) => {
    console.log(result);
});
