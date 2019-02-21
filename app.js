// importing a class
const Employee = require('./classes/Employee.js');

const emp1 = {
    name: "Neeraj",
    dept: "IT",
    salary: 60000,
    age: 33,
    phone: 3435353535
};

//create a class object
var emp = new Employee(emp1); 

//calling class method
emp.basicDetails();