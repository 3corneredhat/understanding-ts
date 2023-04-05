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
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 200] = "AUTHOR";
    Role[Role["USER"] = 201] = "USER";
})(Role || (Role = {}));
console.log(Role);
var person = {
    name: "Alan",
    age: 30,
    hobbies: ["Sports", "Cooking"],
    role: Role.ADMIN,
};
// person.role.push("admin"); <- no compilation error
// person.role = [0, 'admin', 'user']; <- but this doesn't work
// person.role[1] = 10; <- compilation error
var favoriteActivities;
favoriteActivities = ["Sports", "Hi"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
