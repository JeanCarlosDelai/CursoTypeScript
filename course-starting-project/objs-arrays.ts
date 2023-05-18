
//Criando constantes globais// Método JS, não utilizar no type
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;]

// Utilização do Enum para criação de Roles sendo que por padrão o primeiro elemento é 0, e vai aumentando de um em um
// Até finalizar os elementos
enum Role { ADMIN, READ_ONLY, AUTHOR};

const person2 = {
  name: " Jean",
  age: 23,
  hobbies: ["Sports", "Cooking"],
  // 1, identificador numérico, 2, descrição
  role: Role.ADMIN
};

// person.role.push("admin");

let favoriteActivities2: string[];
favoriteActivities2 = ["Sports"];

// console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
// }

if (person2.role == Role.AUTHOR) {
    console.log('Is author');
}
