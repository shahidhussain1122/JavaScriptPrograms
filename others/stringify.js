const user = {
    name: "shahid",
    age: 23
}
const userString = JSON.stringify(user);
console.log(userString);
const userData = JSON.parse(userString);
console.log(userData)

