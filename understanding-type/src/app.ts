class Department {
  name: string;
  employees: string[] = [];

  constructor(n: string) {
    this.name = n;
  }
  // describe() {
  //   console.log('Departament ' + this.name);
  // }
  describe(this: Department) {
    console.log('Departament ' + this.name);
  }
  addEmployee(employee: string) {
    this.employees.push(employee);
  }
  printEmployeeInformation() {
    console.log(this.employees);
  }
}

const accounting = new Department('Contando');

accounting.describe();

// const accountingCopy = { name: 'DUMMY', describe: accounting.describe};

// accountingCopy.describe();