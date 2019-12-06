'use strict';
import readlineSync from 'readline-sync';

const getGreeting = () => {
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    return;
};
export default getGreeting;