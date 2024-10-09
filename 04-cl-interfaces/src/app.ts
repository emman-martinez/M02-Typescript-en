(() => {
  class Departament {
    // private id: string;
    // public name: string;
    protected employees: string[] = [];

    constructor(
      private readonly id: string,
      public name: string // private employees: string[] = []
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

  class ITDepartament extends Departament {
    constructor(id: string, public admins: string[]) {
      super(id, "IT");
      this.admins = admins;
    }
  }

  class AccountingDepartament extends Departament {
    constructor(id: string, private reports: string[]) {
      super(id, "IT");
    }

    addEmployee(employee: string): void {
      if (employee === "Jesus") {
        return;
      }
      this.employees.push(employee);
    }

    addReport(text: string) {
      this.reports.push(text);
    }

    getReports() {
      console.log(this.reports);
    }

    printReports() {
      console.log(this.reports);
    }
  }

  const it = new ITDepartament("d1", ["Jesus"]);
  // console.log(accounting);
  it.addEmployee("Emmanuel");
  it.addEmployee("Jesús");
  // accounting.employees[2] = "Anna";
  it.describe();
  // accounting.name = "NEW NAME";
  it.printEmployeeInformation();
  console.log(it);

  const accounting = new AccountingDepartament("d2", []);
  accounting.addReport("Something went wrong...");
  accounting.addEmployee("Jesus");
  accounting.addEmployee("Emmanuel");
  accounting.printReports();
  accounting.printEmployeeInformation();
  accounting.getReports();

  //   const accountingCopy = { name: "DUMMY", describe: accounting.describe };
  //   accountingCopy.describe();
})();
