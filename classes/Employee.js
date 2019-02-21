// Define a class
class Employee
{

    constructor(employee)
    {   
        // class properties or variables
        this.name    = employee.name;
        this.dept    = employee.dept;
        this.salary  = employee.salary;
        this.age     = employee.age;
        this.phone   = employee.phone;
    }

    // class methods or functions 
    basicDetails()
    {
        console.log("Name: " + this.name);
        console.log("Department: " + this.dept);
        console.log("Salary: " + this.salary);
        console.log("Age: " + this.age);
        console.log("Phone: " + this.phone);

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

module.exports = Employee;