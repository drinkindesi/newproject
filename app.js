/*
let employees = [
        {
            id: 1001,
            name: "Remi",
            email: "remi@gmail.com",
            salary: 30000 
        },
        {
            id: 1002,
            name: "Soni",
            email: "soni@gmail.com",
            salary: 40000 
        },
        {
            id: 1003,
            name: "Neeraj",
            email: "yahoo1@gmail.com",
            salary: 87000 
        },
];

let employers = [
    {
        id: 1001,
        name: "Remi",
        email: "remi@gmail.com",
        salary: 30000 
    },
    {
        id: 1002,
        name: "Soni",
        email: "soni@gmail.com",
        salary: 40000 
    },
    {
        id: 1003,
        name: "Neeraj",
        email: "yahoo1@gmail.com",
        salary: 87000 
    },
];

var data = '';
var data_employers = '';

employees.map( function(employee)
{

    let bonus = bonus();

    data += "<tr>";
    data += "<td>" + employee.id + "</td>";
    data += "<td>" + employee.name + "</td>";
    data += "<td>" + employee.email + "</td>";
    data += "<td>" + employee.salary + "</td>"; 
    data += "<td>" + bonus + "</td>";
    data += "</tr>";
    
})

//console.log(data);

document.getElementById("employees").tBodies[0].innerHTML = data;

*/

/*
function mybrand()
{
    console.log("========================================")
    console.log("*********REMI & Co.*********************")
    console.log("========================================")
}
function compname()
 {
     console.log("=========================================")
     console.log("==============NEERAJ MEHTA===============")
     console.log("=========================================")
 }
compname();
 */
/*
 function fullName(first, last)
 {
    console.log(first + " " + last);
 }

 fullName("Ninja", "Remi");

 fullName("Rina", "Sharma");
 function fullName(last, first)
{
    console.log(last + " " + first)
}
fullName("Mehta", "Neeraj");
 */
 

 /*
 function makeMeCapital()
 {
    return 1;
 }

 let name = makeMeCapital("remi");

 console.log(name);*/

/*
const showdistance = (speed, time) => {
    return speed * time;
}

var distance = showdistance(10, 5)
console.log(distance);      
*/


const table = (num1 , num2) => {
    
    for(var i=1;i<=num2;i++)
    {   
        console.log(num1 + " X " + i + " = " + num1*i)   
    }
}  
table(3, 10); 

