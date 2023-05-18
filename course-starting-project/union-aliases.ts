//Criação de uma aliase que pode ser utilizado em qualquer parte do código
type Combinable = number | string;
type ConversionDescriptor = 'as-number' | 'as-text';
// Outros exemplos de utilização de Aliases
// type User = { name: string; age: number};
// const user1: User = {name: 'Max', age: 30};

//Na hora de declarar qual o tipo de conteúdo a variável pode receber, utilize o | para adicionar mais que um tipo
function combine(
  input1: Combinable, 
  input2: Combinable,
  resultConversion: ConversionDescriptor
  ) {
  let result;
  // Como usamos o | temos que fazer um condição para verificar se é number ou string
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion == 'as-number') {
    //Colocar o + na frente para transformar em números
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
    return result;
  // if (resultConversion === 'as-number') {
  //   return +result;
  // }else {
  //   return result.toString();
  // }
}
//Combinando numbers
const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

//Combinando numbers e strings
const combinedStringAges = combine('30', '26', 'as-number');
console.log(combinedStringAges);

//Combinando strings
const combinedNames = combine('Jean', 'Delai', 'as-text');
console.log(combinedNames);
