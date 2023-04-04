// The curly braces after a colon indicate
// an object. Considered suboptimal.
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Max",
//   age: 30,
// };

const person = {
  name: "Alan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports", "Hi"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
