// Exercise 1

// 1.

// let div = document.getElementById("container");
// // console.log(div);

// // 2.

// let pete = document.querySelectorAll("li")[1];
// pete.innerHTML = "Richard";
// // console.log(pete);

// // 3.

// let ul = document.querySelectorAll("ul")
// console.log(ul);

// // 4.
// let sarah = document.getElementsByTagName("li")[3]
// // console.log(sarah);
// sarah.remove()



// Exercise 2

// 2.

// let div = document.querySelector("div")
// // console.log(div);
// div.style.backgroundColor = "lightblue";
// div.style.padding = "18px";

// // 3.

// let john = document.querySelectorAll('li')[0]
// // console.log(john);
// john.style.display = "none";

// // 4.

// let pete = document.querySelectorAll('li')[1];
// // console.log(pete);
// pete.style.border = "black solid 2px"


// // 5.
// let body = document.body;
// body.style.fontSize = "25px";

// // 6

// if (div.style.backgroundColor = "lightblue") {
//     alert(`hello ${pete} and ${john}`)

// }


// Exercise 3


// 1
let div = document.getElementById("navBar");

div.setAttribute("id", "socialNetworkNavigation");
console.log(div);

// 2
let ul = document.querySelector("ul");
// console.log(ul);

let newLi = document.createElement("li");
let textLi = document.createTextNode("Logout");

newLi.appendChild(textLi);
ul.appendChild(newLi);

console.log(ul);


// Exercise 4
// A Faire


// let allBooks = [{

// }]
