//  ////////////////////////////////////////////////////////// question 1 /////////////////////////////////////////////////////////////////////////////////////

/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

// solution

function panic(str) {
  return str.split(" ").join(" 😱 ").toUpperCase() + "!";
}
function panic2(str) {
  return str.replaceAll(" ", " 😱 ").toUpperCase() + "!";
}

// Test your function
// console.log(panic("I'm almost out of coffee"));
// console.log(panic("winter is coming"))
// console.log(panic2("winter"))

//  ////////////////////////////////////////////////////////// question 2 /////////////////////////////////////////////////////////////////////////////////////
/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/
function whisper(str) {
  if (str.endsWith("!")) {
    return "shh... " + str.slice(0, -1).toLowerCase();
  }
  return "shh... " + str.toLowerCase();
}
function whisper2(str) {
  return "shh... " + str.toLowerCase().replaceAll("!", "");
}

// console.log(whisper("PLEASE STOP SHOUTING."));
// console.log(whisper("MA'AM, this is a Wendy's!"));

//  ////////////////////////////////////////////////////////// question 3 /////////////////////////////////////////////////////////////////////////////////////

/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str) {
  const newStr = str
    .split("")
    .map((letter, i) => {
      return i % 2 === 0 ? letter.toUpperCase() : letter;
    })
    .join("");
  return newStr;
}

// console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));

//  ////////////////////////////////////////////////////////// question 4 /////////////////////////////////////////////////////////////////////////////////////

/* toTitleCase
Write a function that will capitalize every word in a sentence.  

Example Input: "everything, everywhere, all at once"
Example Output: "Everything, Everywhere, All At Once"
*/

/* 
First, write a function that takes in one word and 
capitalizes the first letter of that word.

Example Input: "scrimba"
Example Output: "Scrimba"

Hint: Trying using slice() and .toUpperCase()
*/

function capitalizeWord(word) {
  return word[0].toUpperCase() + word.slice(1);
}

// function toTitleCase(str){
//     // split sentence into an array of words
//     const sentenceArr = str.split(' ');
//     // loop through the arrays of words and capitalizeWord func on each word
//     const capArr = sentenceArr.map(word => capitalizeWord(word));
//     // join sentence arr back into a string
//     return capArr.join(' ')
// }

/* 
Now write a function that capitalizes every word in a sentence. 
How can you reuse the function you just wrote? 
*/

function toTitleCase(str) {
  return str
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

// Test your functions
// console.log(capitalizeWord("pumpkin"));
// console.log(toTitleCase("pumpkin pranced purposefully across the pond"));

//  ////////////////////////////////////////////////////////// question 5 /////////////////////////////////////////////////////////////////////////////////////

/* Totally Not Another FizzBuzz 

Scrimba CEO Per Borgen wants you to write a program to grant special bonuses to all his employees based on their employee ID numbers! 

Scrimba has 100 employees and their employee ID numbers range from 1 - 100. If the employee's ID number is: 

Divisible by 3 - Vacation! 
Divisible by 5 - $100,000 bonus! 
Divisible by both 3 and 5 - JACKPOT! 1 Million and a Yacht!
Not divisible by 3 or 5 - :(
    
Write a program to loop through all the ID numbers and print their prize. 
Your function's output should look something like this: 

1 - :(
2 - :(
3 - Vacation! 
4 - :(
5 - $100,000 bonus!

Hint: Remainder operator, modulo 
 */

function awardBonuses() {
  for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log(`${index} - JACKPOT! 1 Million and a Yacht!`);
    } else if (index % 3 === 0) {
      console.log(`${index} - Vacation!`);
    } else if (index % 5 === 0) {
      console.log(`${index} - $100,000 bonus!`);
    } else {
      console.log(`${index} - :(`);
    }
  }
}

// awardBonuses();

//  ////////////////////////////////////////////////////////// question 6 /////////////////////////////////////////////////////////////////////////////////////

/*  Emojify!

Popular services like Slack and Github allow for emoji shortscodes, meaning 
they will detect when a word in a sentence begins and ends with a colon (:)
and automatically replace that word with an emoji. 

These shortcodes allow users to add an emoji to their messages by typing a 
code rather than searching for an emoji from a list. 

For example, typing :smile: will replace that text with 😊 

*/

const emojis = {
  smile: "😊",
  angry: "😠",
  party: "🎉",
  heart: "💜",
  cat: "🐱",
  dog: "🐕",
};

/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, remove the colons and
look up the word in the emoji object. If the word is in the 
emojis object, return the corresponding emoji.
If it isn't, return the original word.

Example input: ":party:"
Example output: 🎉

Example input: ":flower:"
Example output: "flower"

Example input: "elephant"
Example output: "elephant"
*/

function emojifyWord(word) {
  if (word.startsWith(":")) {
    return emojis[word.replaceAll(":", "")]
      ? emojis[word.replaceAll(":", "")]
      : word;
  } else {
    return word;
  }
}

/* 2. Write a function to find any emoji shortcodes in a phrase.
Your function should map over each word in the phrase, emojify any word
that begins and ends with a colon, then return the emojified phrase. 
Feel free to use your emojify function from the previous exercise!

Example input: "I :heart: my :cat:"
Example output: "I 💜 my 🐱"

Example input: "I :heart: my elephant"
Example output: "I 💜 my elephant"
*/

function emojifyPhrase(phrase) {
  return phrase
    .split(" ")
    .map((word) => emojifyWord(word))
    .join(" ");
}

// console.log(emojifyWord(":heart:"));
// console.log(emojifyWord(":flower:"));
// console.log(emojifyWord("elephant"));

// console.log(emojifyPhrase("I :heart: my :cat:"));
// console.log(emojifyPhrase("I :heart: my :elephant:"));

//  ////////////////////////////////////////////////////////// question 7 /////////////////////////////////////////////////////////////////////////////////////

/* 

Anagrams are groups of words that can be spelled with the same letters. 
For example, the letters in "pea" can be rearrange to spell "ape", and 
the letters in "allergy" can be rearranged to spell "gallery."

Write a function to check if two strings of lowercase letters are anagrams. 
Return true if the word is an anagram. Return false if it isn't. 

Example input: "allergy", "gallery"
Example output: true

Example input: "rainbow", "crossbow"
Example output: false

*/

function isAnagram(str1, str2) {


  return str1.length === str2.length
    ? str1.split("").sort().join('') === str2.split("").sort().join('')
      ? true
      : false
    : false;

}

// console.log(isAnagram("allergy", "gallery"));
// console.log(isAnagram("treasure", "measure"));

//  ////////////////////////////////////////////////////////// question 8 /////////////////////////////////////////////////////////////////////////////////////

/* We Come in Peace!  
We've received what (we assume) is a message of peace and brotherhood from 
an alien planet. They almost got it right, but the messages are 
backward. Write functions to reverse the backward messages so we can 
read what they have to say! 
*/ 

const title = ":htraE no od ot ffutS";
const messages = [
            "maerc eci yrT",
            "rewoT leffiE tisiV",
            "noom eht ot snamuh etacoleR",
            "egrahc ni stac tuP", 
        ]

/* Step 1: Reverse a string
Write a function that takes in a string and returns the reverse 
of that string. An interviewer may want to check if you know your
string methods, or may want to know if you can reverse a string manually. 
Practice both ways! 

Example input: !htrae ot emocleW
Example output: Welcome to earth!
*/  

function reverseString(arr){
  const msg = arr.split('').reverse().join('')
    return msg;
}
function reverseStringManually(arr){

  let msg = []
   arr.split('').map(item=>{
    msg.unshift(item)
   })

    return msg.join('');
}

// another manual solution 
function reverseString(str){
   // initialize a new empty string
   let reversedString = "";
   // loop through original string backwards, adding each character to the new string
   for(let i = str.length - 1; i >= 0; i--){
       reversedString += str[i];
   }
   return reversedString
}
/*
Step 2: Now we'll reverse all strings in an array. Write a function that takes in
an array of strings and returns a new array with all strings reversed.

You can use reuse your reverseString() function, use string methods, or 
reverse the strings manually. 
*/ 

function reverseStringsInArray(arr){
  
    return arr.map(msg=>reverseString(msg)).join(' ');
}
function reverseStringsInArrayManually(arr){
  
    return arr.map(msg=>reverseStringManually(msg));
}

// console.log(reverseString(title));
// console.log(reverseStringsInArray(messages));
// console.log(reverseStringManually(title));
// console.log(reverseStringsInArrayManually(messages));

//  ////////////////////////////////////////////////////////// question 9 /////////////////////////////////////////////////////////////////////////////////////

/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palindrome, return true. If it isn't, return false.

Example input: "motorbike"
Example output: false

Example input: "rotator" 
Example output: true
*/

function isPalindrome(str){
    // reversed str 
    const reversedStr = str.split('').reverse().join('')

    return str === reversedStr
}

// Test your function
// console.log(isPalindrome("abba"));
// console.log(isPalindrome("civic"));
// console.log(isPalindrome("octopus"));
// console.log(isPalindrome("pumpkins"));
// console.log(isPalindrome("madam"));


///////////////////////////////////////////////////////// question 10 /////////////////////////////////////////////////////////////////////////////////////

/*  
Grandpa's hand isn't as steady as it used to be. You finally convinced him
to start using a password manager, but he accidentally typed and saved his
password with a bunch of extra characters. Help him recover his password by 
removing all the duplicate characters. 

Your function should take in a string of characters and return a
string with the duplicate characters removed. Assume that your input
is lowercased with only letters and numbers.  

Example input: "aabbccb1212"
Example output: "abc12"
*/ 
const example = 'aabbccb1212'
const password = "9338dsabbbadjdjdj2sdfdfdf282ff8fdsd888ss8cfgfg332q23"; 
 
// function removeDupeChars(chars) {
//     // create a new, empty string called dupesRemoved
//     let dupesRemoved = '';
    
//     // loop through the string we want to remove dupes from 
//     for (let i = 0; i < chars.length; i++) {
//         // for every character in the string, check: is it in dupesRemoved?
//         if (!dupesRemoved.includes(chars[i])) {
//             // if no, add it
//             dupesRemoved += chars[i];
//         }
//         // if yes, keep going through the loop (do nothing)
//     }
    
//     // dupesRemoved -- it has no duplicates!
//     return dupesRemoved;
// }

//  chatgpt improvement 
function removeDupeChars(chars) {
    let seen = new Set();
    let dupesRemoved = '';
    
    for (let i = 0; i < chars.length; i++) {
        if (!seen.has(chars[i])) {
            seen.add(chars[i]);
            dupesRemoved += chars[i];
        }
    }
    
    return dupesRemoved;
}

// console.log(removeDupeChars(example));

///////////////////////////////////////////////////////// question 11 /////////////////////////////////////////////////////////////////////////////////////

/* 
How often do the letters in your name repeat? 

Write a function that counts how many times each letter of your name
occurs. Your function should take in your first and last name and return
an object where the keys are each character in your name, and the value
is how many times that character appears in your name. 

Example input: "Peggy Porth"
Example output: {p: 2, e: 1, g: 2, y: 1, o: 1, r: 1, t: 1, h: 1}

Your function should NOT count spaces and should not be case sensitive (a
lowercase t and a capital T should be considered the same character).

*/ 

function countChars(str){
  let output = {}
   const lowerdCaseStr = str.toLowerCase()
  for (let index = 0; index < lowerdCaseStr.length; index++) {
    const element = lowerdCaseStr[index];

    if(element !== ' '){
      output[element] === undefined ? output[element] = 1 : output[element] += 1
    }
    
  }

  return output
}

console.log(countChars("Peggy Porth"));
console.log(countChars("Mississippi"));