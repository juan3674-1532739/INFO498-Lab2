import * as readline from 'readline';

// This is a program for a guessing game. The program generates the random number,
// and allows user to put their gussed numbers and see if user's guessed number is correct or not.
// This game will end when user gets the answer.

// Some of the problems that we found is that if user puts string, for instance "dkjfoae", the program assumes that 
// user got the correct answer and ends the game.
// It gives answer every single time which is not intended for a guessing game.
// main method is redundant. Put the game method into the main.

// This is a interface that stores the output and user input.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Initialize the game
let main: () => void = () => {
    game()
}
 
// Generates the random number and start the game.
let game: () => void = () => {

    let random: number = Math.floor(Math.random() * 100 + 1);
    question(random)


}

// Gives the prompt to the user and gets the answer from user and check whether user got it correct or not.
// If not, it gives the prompt again, untill user gets the answer.
let question: (number: number) => void = (num: number) => {
    rl.question("Please guess your number: ", (input: string) => {
        console.log("Answer: ", num)
        if (Number.parseFloat(input) > num) {
            console.log("The number is lower")
            question(num)
        } else if (Number.parseFloat(input) < num) {
            console.log("The number is higher")
            question(num)
        }
        else {
            console.log("You guessed it correctly!")
            rl.close();
        }

    })
}



main()