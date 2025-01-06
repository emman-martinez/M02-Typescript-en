(() => {
  // type AddFn = (a: number, b: number) => number;
  // interface AddFn {
  //   (a: number, b: number): number;
  // }

  // let add: AddFn;

  // add = (n1: number, n2: number) => {
  //   return n1 + n2;
  // };

  interface Named {
    readonly name?: string;
    outputName?: string;
  }

  interface Greatable extends Named {
    greet(phrase: string): void;
  }

  class Person implements Greatable {
    constructor(public name?: string, public age: number = 30) {
      if (name) {
        this.name = name;
      }
    }

    greet(phrase: string) {
      if (this.name) {
        console.log(`${ phrase } ${ this.name }`);
      } else {
        console.log("Hi!");
      }
    }
  }

  let user1: Greatable;

  user1 = new Person();

  user1.greet("Hi there - I am");
  console.log(user1);
})();
