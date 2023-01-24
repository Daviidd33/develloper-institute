let sentence = "The movie is not that bad, I like it";
let split = sentence.split(" ")
let notWord = split[3]
let badWord = split[5]
console.log(notWord);
console.log(badWord);

if (badWord.length > notWord.length) {
    console.log(`The movie is good, I like it`);
} else (
    console.log(`The movie is not that bad, I like it`)
)
