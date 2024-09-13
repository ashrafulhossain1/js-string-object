const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
    'fav places': ['bandorban', 'kuakata', 'sainmartin']
}
// change the value of property
// console.log(person)
// person.salary = 300000;
// // //output
// console.log(person)


// chnage the value of property
person['age'] = 26;
person["fav places"] = ['kolkata, bali']
// output
// console.log(person)


// // chnage the value of property
const KeyName = 'profession';
//output
console.log(person.KeyName) //ERROR CAUSE আপনার কোডে console.log(person.KeyName) ব্যবহার করা হয়েছে, যা undefined রিটার্ন করে। এর কারণ হলো, আপনি ডট নোটেশন ব্যবহার করেছেন, কিন্তু সেখানে KeyName একটি ভ্যারিয়েবল হিসেবে ব্যবহৃত হয়েছে, যার মান "profession"। ডট নোটেশন ব্যবহার করার সময় JavaScript সরাসরি সেই কী'কে স্ট্রিং হিসেবে ধরে, তাই person.KeyName থেকে undefined রিটার্ন হচ্ছে, কারণ KeyName নামের কোনো প্রোপার্টি person অবজেক্টে নেই।

// আপনার মূল উদ্দেশ্য person অবজেক্টের profession প্রোপার্টির মান পেতে হলে, আপনাকে ব্র্যাকেট নোটেশন ব্যবহার করতে হবে:
  
// RIGHT IS 
console.log(person[KeyName])

// noraml dev change
// person.profession = 'teacher';
// person['profession'] = 'teacher';
// // console.log(person)


//  ADD PROPERTY AND VALUE BOTH A OBJECT
const propProfession = 'profession';
person.propProfession = 'farmer';
// console.log(person)


// declared variable oi object er property er name 
const propName = 'profession';

person[propName]= 'devel';
console.log(person);


// console.log(Object.keys(person));


  
