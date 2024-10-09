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
    private lastReport: string | undefined;

    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error("No report found.");
    }

    set mostRecentReport(value: string) {
      if (!value) throw new Error("Please pass in a valid value!");
      this.addReport(value);
    }

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
      this.lastReport = text;
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

  accounting.mostRecentReport = "Year End Report";

  accounting.addReport("Something went wrong...");
  console.log(accounting.mostRecentReport);
  accounting.addEmployee("Jesus");
  accounting.addEmployee("Emmanuel");
  accounting.printReports();
  accounting.printEmployeeInformation();

  //   const accountingCopy = { name: "DUMMY", describe: accounting.describe };
  //   accountingCopy.describe();
})();
