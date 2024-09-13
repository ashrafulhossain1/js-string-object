const sentence = 'I am learning web dev.';

// for of loop
// let reverse = '';
// for (const letter of sentence) {
//     // console.log(letter);
//     reverse = letter + reverse;
// }
// console.log(reverse);

// for loop
let reversed = '';
for(let i = 0; i <sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    const letter = sentence[i];
    // console.log(letter)
    reversed = letter + reversed;
    
}
// console.log(reversed);



// shortcut join and split
// const reversed1 =sentence.split('').reverse().join('')
// const reversed1 = sentence.split(' ').reverse()
const reversed1 = sentence.split('').reverse().join('')
console.log(reversed1);
