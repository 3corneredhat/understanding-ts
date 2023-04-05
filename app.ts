// The curly braces after a colon indicate
// an object. Considered suboptimal.
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Max",
//   age: 30,
// };

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]; //tuple
} = {
  name: "Alan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

// person.role.push("admin"); <- no compilation error
// person.role = [0, 'admin', 'user']; <- but this doesn't work

// person.role[1] = 10; <- compilation error

let favoriteActivities: string[];
favoriteActivities = ["Sports", "Hi"];
console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
}
