//Intersection types

type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//Junção de dois types, assim utilizando as propriedades combinadas dos dois
type ElevatedEmployee = Admin & Employee;

//Criando objeto funcionário utilizando os dois types
const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

//Criando objeto funcionário utilizando os dois types
const e2: Employee = {
  name: "Jean",
  startDate: new Date(),
};

console.log(e1);

//Além de types de objetos da pra juntar quaisquer types
type Combinable = string | number;
type Numeric = number | boolean;

type universal = Combinable & Numeric;

// Mais types Guards
// Type guards verifica o tipo da entrada para não dar erro na execução

function addd(a: number, b: number): number; // Function overload
function addd(a: string, b: string): string; // Function overload

function addd(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

// Function overload
const result = addd('Max', 'Scharz') as string;
result.split(' ');

// Optional chaining

const fetchUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO', desctiption: 'Minha compania'}
};

console.log(fetchUserData?.job?.title);

// Nulish collection

const userInput = '';

//O ?? verifica se a informação realmente é nula ou indefinida
const storeData = userInput ?? 'DEFAULT';

console.log(storeData);




//////////
type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  //Estamos verificando se a informação privileges tem nesse empregado
  if ("privileges" in emp) {
    console.log("Privileges " + emp.privileges);
  }
  if ("startDate" in emp) {
    console.log("Privileges " + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation(e2);

// Criando duas classes distintas
class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }
  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

// Criando um type Vehicle, que pode ser tanto car ou truck
type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

//Usando esta função, passamos o veiculo e a função vai dizer se é um car ou truck
function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if ("loadCargo" in vehicle) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

//Discriminated Unions

//Pode ser usada com interfaces ou classes

interface Bird {
  type: "bird";
  flingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Moving with speed " + speed);
}

moveAnimal({type: 'bird', flingSpeed: 10});

//Type casting

// Em vez de utilizar o ! podemos fazer uma declaração if, para verificar se a informação vai ser nula ou não
// const userInputElement = <HTMLInputElement>document.getElementById('user-input');
const userInputElement = document.getElementById('user-input')! as HTMLInputElement;

userInputElement.value = 'Hi there1!';

// Index properties

interface ErrorContainer {/*{email: 'Não é um e-mail válido'} */ 
[prop: string]: string;
};

const errorBag: ErrorContainer = {
  email: 'Not a valie email!!',
  username: 'Must start'
}



