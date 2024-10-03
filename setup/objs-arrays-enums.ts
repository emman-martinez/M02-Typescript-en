(() => {
  // const oerson = {
  //   name: String,
  //   age: Number,
  // };

  // const person: {
  //   name: string;
  //   age: number;
  //   hobbies: string[];
  //   role: [number, string];
  // } = {
  //   name: "John",
  //   age: 30,
  //   hobbies: ["Sports", "Cooking"],
  //   role: [2, "author"],
  // };

  // const ADMIN = 0;
  // const READ_ONLY = 1;
  // const AUTHOR = 2;

  enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
  }

  const person = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR,
  };

  // person.role.push("admin");
  // person.role[1] = 10;

  // person.role = [0, "admin", "user"];

  let favoriteActivities: string[];
  favoriteActivities = ["Sports"];

  console.log(person.name);

  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
  }

  if (person.role === Role.AUTHOR) {
    console.log("is author");
  }
})();
