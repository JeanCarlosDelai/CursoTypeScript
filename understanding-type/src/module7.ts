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

promise.then((data) => {
  data.split(" ");
});

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

const mergedObj = merge({ name: "Max", hobbies: ["Sports"] }, { age: 30 });
console.log(mergedObj);

// Another Generic function
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe(["a"]));

//"keyof" Constraint
// Primeiro parametro tem que ser um onjeto, e o segundo parametro tem que ser uma chave do objeto
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

// A chave sempre tem que referenciar algo do objeto
extractAndConvert({ name: "max" }, "name");

// Generic Class

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Max");
textStorage.addItem("Manu");
textStorage.removeItem("Manu");
console.log(textStorage.getItems());

// const objStorage = new DataStorage<object>();
// const masObj = {name: 'Max'};
// objStorage.addItem(masObj);
// objStorage.addItem({name: 'Manu'});
// objStorage.removeItem(masObj);
// console.log(objStorage.getItems());

// Generic Utility Types

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(title: string, description: string, date: Date):
CourseGoal {
  //Partial define que este objeto será do CouseGoal
  let CourseGoal: Partial<CourseGoal> = {};
  CourseGoal.title = title;
  CourseGoal.description = description;
  CourseGoal.completeUntil = date;
  return CourseGoal as CourseGoal;

};

//Como é readonly não conseguimos usar métodos de adição e remoção
const namess: Readonly<string[]> = ['Max', 'Sports'];
// namess.push('Manu');
// namess.pop();


