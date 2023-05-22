// Bult-in Generics

const names: Array<string> = []; // string[]

// Apartir do momento que o type sabe que é uma string, podemos usar as formulas da string
// Com os tipos genéricos o Ts começa a entender os dados e vai informar se tiver algum erro
//names[0].split(' ');

// Promisse<string> Isto é um generic type
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Ola");
  }, 2000);
});

promise.then(data => {
    data.split(' ');
})

// Generic function

// function merge<T, U>(objA: T, objB: U) {
//   return Object.assign(objA, objB);
// }

// const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
// console.log(mergedObj);

// Contraints - Restrições

// Adicionando estas restriçoes, obrigaotiamente temos que adicionar dois objetos para não dar erro
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
  }
  
  const mergedObj = merge({ name: 'Max', hobbies: ['Sports'] }, { age: 30 });
  console.log(mergedObj);

// Another bGeneric function

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value.';
  if (element.length === 1) {
    descriptionText = 'Got 1 element';
  } else if (element.length > 1) {
    descriptionText = 'Got ' + element.length + ' elements.';
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(['a']));