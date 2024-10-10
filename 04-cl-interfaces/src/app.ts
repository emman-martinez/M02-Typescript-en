(() => {
  interface Greatable {
    readonly name: string;
    // age: number;
    greet(phrase: string): void;
  }

  class Person implements Greatable {
    constructor(public name: string, public age: number) {}

    greet(phrase: string) {
      console.log(phrase + " " + this.name);
    }
  }

  let user1: Greatable;

  user1 = new Person("Emmanuel", 30);

  user1.greet("Hi there - I am");
  console.log(user1);
})();
