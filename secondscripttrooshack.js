//import readline-sync module
import readlineSync from 'readline-sync';

//ask to input about themselves
const answer = readlineSync.question('Tell me about yourself...')

//check the length of the answer
if (answer.length > 20) {
    console.log("Wow, you love talking about yourself!")
 }
 else {console.log ("Nice and concise!")}
 