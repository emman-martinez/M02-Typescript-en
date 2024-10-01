(() => {
  // const oerson = {
  //   name: String,
  //   age: Number,
  // };
  const person = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Cooking"],
  };

  let favoriteActivities: string[];
  favoriteActivities = ["Sports"];

  console.log(person.name);

  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
  }
})();
