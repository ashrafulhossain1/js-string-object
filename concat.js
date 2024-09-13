// LOCAl way
const first = 'Abid'
const last = 'Nabid'

const fullName = first +' '+ last;
console.log(fullName);
// //  OP: Abid Nabid

// CONCAT way
const fullName1 = first.concat(last)
// // OP:  AbidNabid
const fullName2 = first.concat(' ').concat(last)
console.log(fullName2);
// //OP: Abid Nabid

// includes ===find some thing
// true or false 

console.log(last.includes('N'));