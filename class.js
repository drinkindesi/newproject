// Define a class
class Employee
{

    constructor()
    {   
        // class properties or variables
        this.name    = "Remi";
        this.dept    = "IT";
        this.salary  = 343434334;
        this.age     = 23;
        this.phone   = 35353535;
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


//create a class object
var emp = new Employee(); 

emp.basicDetails();