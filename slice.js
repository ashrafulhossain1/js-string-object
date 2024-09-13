// const address = 'andarKilla';
const address = 'ashraful';
const part = address.slice(2, 5);


// // recap.
// console.log(part);
const addressIndex = address.indexOf('f');
// console.log(addressIndex)
const addressInclude = address.includes('a')
console.log(addressInclude)

//recap end
 

// split split korle array hoye jabe
const sentence = 'i am a good and hardworking person';
// console.log(sentence.split())
// console.log(sentence.split(''))
// console.log(sentence.split(' '))
// console.log(sentence.split('a'))
// console.log(sentence.split('good'))

// // // output [ 'i', 'am', 'a', 'good', 'and', 'hardworking', 'person' ]


const friendsSrt = 'rahim, kahim , fahim, sayed, mashrfi';
const friends = friendsSrt.split(',');
// console.log(friends)
// 


// join
const realFriend = ['rahim','kahim',  'fahim','sayed','mashrfi']
console.log(realFriend.join())
console.log(realFriend.join('|'))

// // // output : rahim,kahim,fahim,sayed,mashrfi
 