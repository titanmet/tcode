'use strict'
// let arr = ["1","2","3"]
// console.log(3+5)
// console.dir(arr)
// console.table(arr)

const objA = {
    a: 1,
    b: 2,
    c: 3
}

console.log(objA)

const objB = objA

objB.c = 5

console.log(objA)

const namePeople = 'Vasa'
const age = 25

const myCity = {
    age,
    namePeople,
    name: "New York",
    population: 7_000_000,
    country: "USA",
    info: {
        music: "pop",
        like: true
    },
    cityGreeting: function() {
        console.log("Greeting...")
    }
}

console.log(myCity)
console.log(myCity.country)
myCity.country = "China"
console.log(myCity)
myCity.popular = true
console.log(myCity)
delete myCity.popular
console.log(myCity)
myCity['ttt'] = 10_000
console.log(myCity)
const newSv = 'ddd'
myCity[newSv] = 12345
console.log(myCity)
delete myCity.info.like
console.log(myCity)
myCity.cityGreeting()

const myJsonString = JSON.stringify(myCity)
console.log(myJsonString)
const myJson = JSON.parse(myJsonString)
console.log(myJson)

const myCity2 = Object.assign({}, myCity)
myCity2.name = "Rostov-on-Don"
const myCityString = JSON.stringify(myCity)
const myCity2String = JSON.stringify(myCity2)
console.log(myCityString)
console.log(myCity2String)
console.log("--------------------------------")

const myCity3 = { ...myCity}
myCity3.name = "Omsk"
const myCity3String = JSON.stringify(myCity3)
console.log(myCityString)
console.log(myCity2String)
console.log(myCity3String)
console.log("--------------------------------")

const myCity5 = JSON.parse(JSON.stringify(myCity))
myCity5.name = "Sochi"
const myCity5String = JSON.stringify(myCity5)
console.log(myCityString)
console.log(myCity2String)
console.log(myCity3String)
console.log(myCity5String)
console.log("--------------------------------")

function myFun(a, b) {
    let c = a + b
    return c
}

const result = myFun(5, 7)
console.log(result)

const menA = {
    name: "Sasha",
    age: 21
}

function increaseMenAge(men) {
    const menB = Object.assign({},menA)
    menB.age +=1
    return menB
}

const menAStr = JSON.stringify(menA)
console.log(menAStr)
const menBB = increaseMenAge(menA)
const menBStr = JSON.stringify(menBB)
console.log(menBStr)

function printName() {
    console.log("Olga")
}
console.log("Loading...")
setTimeout(printName, 3000)

















