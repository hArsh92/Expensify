//
//  Object destructuring
//

// const person = {
//     name: 'Harsh Agrawal',
//     age: 26,
//     location: {
//         city: 'Bangalore',
//         temp: 94
//     }
// }

//  const { name = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;
// console.log(`${name} is ${age}.`)

// const { city, temp: temperature } = person.location
// if (city && temperature) {
//     console.log(`Its ${temperature} in ${city}`)
// }


const book = {
    name: 'Ego is Enemy',
    auther: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const { name:publisherName = 'Self-Published' } = book.publisher

console.log(publisherName)


//
// Array destructuring
//

const address = ['Thubarahalli', 'Bangalore', 'Karnataka', '560066'];
const [, city, state] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [beverage, , costForMedium] = item
console.log(`A medium ${beverage} costs ${costForMedium}`);