let stringArr = ['one', 'hey', 'Agung']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

guitars = stringArr
//error
// guitars = mixedData 

let test = []
let bands: string[] = []
bands.push('Van Helen')

// Tuple
let myTuple: [string, number, boolean] = ['Dave', 42, true]

let mixed = ['John', 1, false]

mixed = myTuple
// myTuple = mixed //error

myTuple[1] = 42;

// Objects
let myObj: object;
myObj = []
console.log(typeof myObj)
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Agung',
    prop2: true,
}

// exampleObj.prop2 = 42 //error
exampleObj.prop1 = 'John'

interface Guitarist {
    name?: string,
    active: boolean,
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
}

let jp: Guitarist = {
    active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp

const greetGuitarist = (guitarist: Guitarist) => {
    if(guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}!`
    }
    return `Hello!`
}

console.log(greetGuitarist(jp))

// Enums

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.U)