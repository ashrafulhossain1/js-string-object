const college={
    name: 'vnc',
    class: ['10', '11', '45',],
    events: ['science fair', 'bijoy dibos', '21 feb'],
    unique: {
        color: 'blue',
        result: {
            gpa: 5,
            merit: 'top'
        }

    }
}

// console.log(college.name)
// console.log(college.unique);
// console.log(college.unique.color);
// console.log(college.unique.result);
// console.log(college.unique.result.merit);
// college.unique.result.merit = 'top top top';
// console.log(college.unique.result.merit)
// console.log(college['unique'].result.merit)
college.events[1]= 'free fire'
console.log(college.events[1]);

// delete college.class;
console.log(college)
delete college.name;
console.log(college)


// যদি কী আগে থেকেই থাকে, তবে মান প্রতিস্থাপন {replace} করা হবে; যদি না থাকে, তবে নতুন কী ও প্রোপার্টি যোগ {add} করা হবে।
