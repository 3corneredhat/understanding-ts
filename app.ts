// The curly braces after a colon indicate
// an object. Considered suboptimal.
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Max",
//   age: 30,
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //tuple
// } = {
//   name: "Alan",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

// enum Role {
//   ADMIN,
//   READ_ONLY,
//   AUTHOR,
// }

// When using enums, the default is to use
// 0 as the starting number. We can use
// any value we want.
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = 200,
  USER, //is set to 201
}

console.log(Role);
const person = {
  name: "Alan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
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
