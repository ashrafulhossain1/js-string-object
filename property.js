const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'kuakata', 'sainmartin']
}
// console.log(person)
// console.log(person.age);

// // dot(.) notation to property value access
// declared variable to access
const income = person.salary;
// console.log(income)



// //bracket(third-['']) notation to property value access
// console.log(person['age'])  
// declared a variable
const boyos = person['age']
// console.log(boyos)

// // error 

// // console.log(person.'fav places')
console.log(person['fav places']) //



// //  property value access
const KeyName = 'profession';
// console.log(person[KeyName])
//output
