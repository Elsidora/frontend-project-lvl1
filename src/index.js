'use strict';
import readlineSync from 'readline-sync';
export const getHi = () => {
    console.log('Welcome to the Brain Games!');
};
export const getGreeting = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    console.log();
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);

    const getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    const roundCount = 3;
    
    for (let i = 0; i < roundCount; i += 1) {
        const randomNumber = getRandomInt(0, 100);
        const numberQuestion = readlineSync.question(`Question: ${randomNumber}`);
        const userAnswer = readlineSync.question(`Your answer: `);
        if (randomNumber % 2 === 0) {
            if (userAnswer === 'no') {
                console.log(`'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, ${userName}!`);
                return;
            }
            if (userAnswer !== 'yes') {
                console.log('No correct!');
                return;
            }
            console.log('Correct!');
        } else {
            if (userAnswer === 'yes') {
                console.log(`'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
                return;
            }
            if (userAnswer !== 'no') {
                console.log('No correct!');
                return;
            }
            console.log('Correct!');
        }
    }
    console.log(`Congratulations, ${userName}!`);
    return;
};