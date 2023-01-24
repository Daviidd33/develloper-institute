// Exercise 1

let x = 5;
let y = 2;


function biggerNum() {
    if (x > y) {
        console.log(`${x} is the biggest number`);
    } else {
        console.log(`${y} is the biggest number`);
    }
}

biggerNum()


// Exercise 2

let newDog = "Chihuahua"
// console.log(newDog.length);
console.log(newDog.toLocaleUpperCase());
console.log(newDog.toLowerCase());

if (newDog === "Chihuahua") {
    console.log(`I love Chihuahuas, it’s my favorite dog breed`);
} else {
    console.log(`I dont care, I prefer cats`);
}

// Exercise 3

let number = prompt("enter a number")

if (number % 2 == 0) {
    console.log(`the number is odd`);
} else {
    console.log(`the number is even`);
}

// Exercise 4

let users = ["Lea123", "Princess45", "cat&doglovers", "david"];

if (users.length === 0) {
    console.log(`no one is on line`);
} else if (users.length === 1) {
    console.log(`${users[0]} is on line `);
} else if (users.lenght === 2) {
    console.log(`${users[0]} and ${users[1]} are on line`);

} else if (users.length > 2) {
    console.log(`${users[0]}, ${users[1]} and ${users.length} more are on line`);
}
