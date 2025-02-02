(() => {
  type Admin = {
    name: string;
    privileges: string[];
  };

  type Employee = {
    name: string;
    startDate: Date;
  };

  type ElevatedEmployee = Admin & Employee;

  const e1: ElevatedEmployee = {
    name: "Max",
    privileges: ["create-server"],
    startDate: new Date(),
  };
  console.log(e1);

  type Combinable = string | number;
  type Numeric = number | boolean;
  type Universal = Combinable & Numeric;

  const u: Universal = 2;
  console.log(u);

  // function add(a: Combinable, b: Combinable) {
  //   if (typeof a === "string" || typeof b === "string") {
  //     return a.toString() + b.toString();
  //   }
  //   return a + b;
  // };

  type UnknownEmployee = Employee | Admin;

  function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Name: " + emp.name);
    if ('privileges' in emp) {
      console.log("Privileges: " + (emp as Admin).privileges);
    }
    if ('startDate' in emp) {
      console.log("Start Date: " + (emp as Employee).startDate);
    }
  }

  printEmployeeInformation({
    name: "Max",
    startDate: new Date(),
  });

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
      console.log("Loading cargo..." + amount);
    }
  }

  type Vehicle = Car | Truck;

  const v1 = new Car();
  const v2 = new Truck();

  function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
      vehicle.loadCargo(1000);
    }
  }

  useVehicle(v1);
  useVehicle(v2);

  interface Bird {
    type: "bird";
    flyingSpeed: number;
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
        speed = animal.flyingSpeed;
        break;
      case "horse":
        speed = animal.runningSpeed;
        break;
    }
    console.log("Moving with speed: " + speed);
  }

  moveAnimal({ type: "bird", flyingSpeed: 10 });

  // const userInputElement = <HTMLInputElement>document.getElementById("user-input")!;
  // const userInputElement = document.getElementById("user-input")! as HTMLInputElement;
  // userInputElement.value = "Hi there!";

  const userInputElement = document.getElementById("user-input");
  if (userInputElement) {
    (userInputElement as HTMLInputElement).value = "Hi there!";
  }

  interface ErrorContainer {
    [prop: string]: string;
  }

  const errorBag: ErrorContainer = {
    email: "Not a valid email!",
    username: "Must start with a capital character!",
  };

  console.log(errorBag);
})();
