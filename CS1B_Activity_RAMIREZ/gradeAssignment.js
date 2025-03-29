// Prompt the user to enter their score
let score = prompt("Enter your score:");
// Covert the input string into an integer
score = parseInt(score);
// Use if-else if the statements to assign grades based on score
if (score >= 90) { // Grade for the scores 90 and above
    console.log("Your grade is: Excellent");
} else if (score >= 80 && score <= 89) { // The grade for scores between 80 and 89
    console.log("Your grade is: Good");
} else if (score >= 70 && score <= 79) { // The grade for scores between 70 and 79
    console.log("Your grade is: Fair");
} else { // The grade scores below 70
    console.log("Your grade is: Needs Improvement");
}


