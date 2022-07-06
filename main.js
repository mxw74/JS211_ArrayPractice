//defining our arrays
const cars = ['ford', 'jeep', 'kia', 'BMW']
console.log(cars.length)

const moreCars = ['fiat', 'lexus', 'volvo', 'honda']

//combine our arrays
totalCars = cars.concat(moreCars)
console.log(totalCars)

//log the index of the first and last car in our array
console.log(totalCars.indexOf('honda'))
console.log(totalCars.lastIndexOf('ford'))

//convert array to string
let stringOfCars = totalCars.join(", ")
console.log(stringOfCars)

//make string an array again
let carsFromString = stringOfCars.split(`,`)
console.log(carsFromString)

//list cars in reverse order 
let carsInReverse = totalCars.reverse()
console.log(carsInReverse)

//sort in alphabetical order
let alphaCarSort = carsInReverse.sort()
console.log(alphaCarSort)

//define the pets array
const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird']

//create reptiles array
let reptiles = pets.slice(4, -1)
console.log(reptiles)
console.log(pets)

//remove the reptiles from pets array
let removedReptiles = pets.splice(4, 2)
console.log(removedReptiles)
console.log(pets)

//add in hamster in 3rd spot
console.log('add hamster')
let addHamster = pets.splice(2,0, "hamster")
console.log(pets)

//remove last item in pets array
let removedPet = pets.pop()
console.log(removedPet)
console.log(pets)

//add back removed pet
pets.push(removedPet)
console.log(pets)

//remove first pet
pets.shift()
console.log(pets) 

//add turtles to first spot
pets.unshift("turtles")
console.log(pets)

//add two to each item in the array
let numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34]
  numbers.forEach((num, index, array) => {
  array[index] = num + 2;
});

console.log(numbers)