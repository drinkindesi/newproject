// Define a class
class Employee
{
    // class methods or functions 
    basicDetails()
    {
        console.log("Name: Remi");
        console.log("Department: IT");
        console.log("Salary: 499999");
        console.log("Age: 23");
        console.log("Phone: 2424244242");

    }

    leaveDetails()
    {
        console.log("20 Leaves from 1st April to 31st March 2018");
    }

    bonus(salary)
    {
        return salary*10 / 100;
    }
}


//create a class object
var emp = new Employee();

emp.basicDetails();
emp.leaveDetails();

var bonus = emp.bonus();

console.log(bonus)