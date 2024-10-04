(() => {
  class Departament {
    // private id: string;
    // public name: string;
    // private employees: string[] = [];

    constructor(
      private id: string,
      public name: string,
      private employees: string[] = []
    ) {
      // this.name = name;
    }

    describe(this: Departament) {
      console.log(`Departament (${this.id}): ${this.name}`);
    }

    addEmployee(employee: string) {
      this.employees.push(employee);
    }

    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }

  const accounting = new Departament("d1", "Accounting");
  // console.log(accounting);
  accounting.addEmployee("Emmanuel");
  accounting.addEmployee("Jesús");
  // accounting.employees[2] = "Anna";
  accounting.describe();
  // accounting.name = "NEW NAME";
  accounting.printEmployeeInformation();

  //   const accountingCopy = { name: "DUMMY", describe: accounting.describe };
  //   accountingCopy.describe();
})();
