//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function favorites(obj) {
    for (i = 0; i < Object.keys(obj).length; i++) {
        console.log(Object.keys(obj)[i],Object.values(obj)[i])
    }
    return 'Done'
}

console.log(favorites(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name,age) {   
    this.name = name;
    this.age = age;

    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        console.log(`My name is ${this.name} and I am ${this.age}`)
        return 'Returned value'
    };

    // Create another arrow function for the addAge method that takes a single parameter
    // Adding to the age 
    this.incrementAge = () => {
        return this.age++
    }

}

let karyn = new Person('Karyn', 30)
console.log(karyn.printInfo())
console.log(karyn.incrementAge())
console.log(karyn.incrementAge())
console.log(karyn.incrementAge())
console.log(karyn.incrementAge())

let cyn = new Person('Cyn', 2)
console.log(cyn.printInfo())

let max = new Person('Max', 13)
console.log(max.printInfo())







// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const stringSize = (string) => {
    return new Promise( (resolve,reject) => {
        if (string.length > 10) {
            resolve(true)
        } else {
            reject(false)
        }
    })
}

stringSize('Javascipt homework2')
.then( (result) => {
    console.log("Big word")
})

.catch( (error) => {
    console.log("Small number")
})