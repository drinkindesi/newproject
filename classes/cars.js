class cars
{
    constructor(cars)
    {
        this.make  = cars.make;
        this.model = cars.model;
        this.year  = cars.year;
        this.price = cars.price;
        this.color = cars.color;
    }

    //class functions
    carDetails()
    {
        console.log("make: " + this.make);
        console.log("model: " + this.model);
        console.log("year: " + this.year);
        console.log("price: " + this.price);
        console.log("color: " + this.color);
    }
}
module.exports = cars;