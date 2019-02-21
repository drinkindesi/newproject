// importing a class
const cars = require('./classes/cars.js');

const car1 = {
    make: "BMW",
    model: "x6",
    year: 2019,
    price: 100000,
    color: "black",
};

//create a class object
var auto = new cars(car1); 

//calling class method
auto.carDetails();