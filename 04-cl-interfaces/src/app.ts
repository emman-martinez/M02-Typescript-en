(() => {
  class Departament {
    public name: string;
    private employees: string[] = [];

    constructor(n: string) {
      this.name = n;
    }

    describe(this: Departament) {
      console.log("Departament: " + this.name);
    }

    addEmployee(employee: string) {
      this.employees.push(employee);
    }

    printEmployeeInformation() {
      console.log(this.employees.length);
      console.log(this.employees);
    }
  }

  const accounting = new Departament("Accounting");
  // console.log(accounting);
  accounting.addEmployee("Emmanuel");
  accounting.addEmployee("Jesús");
  // accounting.employees[2] = "Anna";
  accounting.describe();
  accounting.name = "NEW NAME";
  accounting.printEmployeeInformation();

  //   const accountingCopy = { name: "DUMMY", describe: accounting.describe };
  //   accountingCopy.describe();
})();
