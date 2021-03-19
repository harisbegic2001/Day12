//Only change code below this line
var myPetsArray = [

    dog = {
        "animalType": "Dog",
        "name": "Pujdo"
    },
 macka = {
    "animalType": "Cat",
    "name": "Maca"
    },
ptica = {
    "animalType": "Bird",
    "name": "Tweety"
}
]
function myPetsFunction(pets){
    pets = myPetsArray[1].name

     return pets;
}


   
//Only change code above this line

console.log(myPetsFunction());
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;