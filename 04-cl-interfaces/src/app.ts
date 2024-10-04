(() => {
  class Departament {
    name: string;

    constructor(n: string) {
      this.name = n;
    }

    describe(this: Departament) {
      console.log("Departament: " + this.name);
    }
  }

  const accounting = new Departament("Accounting");
  // console.log(accounting);
  accounting.describe();

  const accountingCopy = { name: "DUMMY", describe: accounting.describe };
  accountingCopy.describe();
})();
