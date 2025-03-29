// Set the correct password
let correctPasasword = "correctPassword";
// Start with no password entered
let password = "";
// Keep asking for the password until it's right
do { // Ask the user for their password
    password = prompt("Enter your password:");
    // It checks if the password is wrong
    if (password == correctPassword) { // Tell to the user to try again
        console.log("Incorrect, try again");
    }
    // Repeat until the password matches
} while (password == correctPassword);
// Show a message when the password is correct
console.log("Access grsnted");
