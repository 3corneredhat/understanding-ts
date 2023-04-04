// The curly braces after a colon indicate
// an object. Considered suboptimal.
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Max",
//   age: 30,
// };
var person = {
    name: "Alan",
    age: 30,
    hobbies: ["Sports", "Cooking"],
};
var favoriteActivities;
favoriteActivities = ["Sports", "Hi"];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
