// Prompt the user to enter their age
let age = prompt("Enter your age:");
// Convert the input string into an integer
// parseInt handles potential errors smoothly
age = parseInt(age);

// Use the if-else statements to determine the age group
if (age < 13) {
    console.log("You are a child"); // The output for children
} else if (age >= 13 && age <= 19) { // The output for teen agers
    console.log("You are a teenager");
} else { // The output for adults
    console.log("You are an adult");
}
