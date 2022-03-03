// Declare a new function named favMovie that takes in one parameter.
function favMovie(movie){
    console.log(`my favorite movie is ${movie}`);
}

// favMovie();
//  favMovie("It's a Wonderful Life!")

//  Now pass in the argument, your favorite movie, when you call the function, update the parameter of the function to have a default value of “The Room”.
 function favMovie2(movie="The Room"){
    console.log(`my favorite movie is ${movie}`);
}

favMovie2();

function favMovie3(name="Tommy Wiseau", movie="The Room"){
    console.log(`my name is ${name} and my favorite movie is ${movie}`);
}

//arrow function concise body --remove brackets, write on one line
let favMovie7 = (name, movie) => console.log(`my name is ${name} and my favorite movie is ${movie}.`);

favMovie7("Peter Bogdanivich", "Paper Moon");

//trying out string.split(); converts string into an array of strings
let getFirstName = name => {
    let names = name.split(" ");
    console.log(names);
    console.log(`Your first name is ${names[0]}`);
}

getFirstName("Nicholas Bailey");

let createObject = (x, y) => ({
    squareX: x*x,
    squareY: y*y,
    sum: x+y
})

console.log(createObject(4,5));

//use spread to pass an array into a function with equal number of parameters
let aboutYou = (name, location, favFood) => console.log(`${name} is from ${location} and loves to eat ${favFood}.`);
let arr = ["Paul", "Birmingham", "Kimchi"];
aboutYou(...arr);

//use spread to convert string to array
let me = "Nicholas";
let spreadOut = name => console.log([...name]);
spreadOut(me);

//practice with for loops with above function (loops through spread out string and prints each character separately)
let spreadOut2 = name => {
    let letters = [...name];
    for (let i=0; i<name.length;i++){
        console.log(letters[i]);
    }

}
spreadOut2(me);