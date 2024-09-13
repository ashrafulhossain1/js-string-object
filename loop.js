const mobile = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// for(let prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop])
// }

const objectsKey = Object.keys(mobile);
// console.log(objectsKey);

for(const key of objectsKey){
    // console.log(key)
    console.log(key, ':', mobile[key])
}