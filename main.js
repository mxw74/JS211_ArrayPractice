const cars = ['ford', 'jeep', 'kia', 'BMW']
console.log(cars.length)

const moreCars = ['fiat', 'lexus', 'volvo', 'honda']

totalCars = cars.concat(moreCars)
console.log(totalCars)

console.log(totalCars.indexOf('honda'))
console.log(totalCars.lastIndexOf('ford'))

let stringOfCars = totalCars.join(", ")
console.log(stringOfCars)

let carsFromString = stringOfCars.split(`,`)
console.log(carsFromString)

let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

let alphaCarSort = carsInReverse.sort()
console.log(alphaCarSort)

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

let reptiles = pets.slice(4, -1)
console.log(reptiles)
console.log(pets)

let removedReptiles = pets.splice(4, 2)
console.log(removedReptiles)
console.log(pets)

console.log('add hamster')
let addHamster = pets.splice(2,0, "hamster")
console.log(pets)

let removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

pets.push(removedPet)
console.log(pets)

pets.shift()
console.log(pets) 

pets.unshift("turtles")
console.log(pets)

let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
  numbers.forEach((num, index, array) => {
  array[index] = num + 2;
});

console.log(numbers)