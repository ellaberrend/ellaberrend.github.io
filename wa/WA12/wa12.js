// Step 1
var Sam = {
    firstName: "Sam",
    department: "Tech",
    designation: "Manager",
    salary: 40000,
    raiseEligible: true,
};

var Mary = {
    firstName: "Mary",
    department: "Finance",
    designation: "Trainee",
    salary: 18500,
    raiseEligible: true,
};

var Bill = { 
    firstName: "Bill",
    department: "HR",
    designation: "Executive",
    salary: 21200,
    raiseEligible: false,
};

//Step 2

var techStars = {
    companyName: "TechStars",
    website: "www.techstars.site",
    employees: [Sam, Mary, Bill]
};

//Step 3

var Anna = {
    firstName: "Anna",
    department: "Tech",
    designation: "Executive",
    salary: 25600,
    raiseEligible: false,
};

techStars.employees.push(Anna);

//Step 4

var totalSalary = 0;

for (var i = 0; i < techStars.employees.length; i++) {
    totalSalary += techStars.employees[i].salary;
}

console.log("Total Salary for Employees: $" + totalSalary);

//Step 5

function applyRaise(company) {
    for (var i = 0; i < company.employees.length; i++) {
        if (company.employees[i].raiseEligible){
            var raiseAmount = company.employees[i].salary * 0.10;
            company.employees[i].salary += raiseAmount;
            company.employees[i].raiseEligible = false;
        }
    }
}
applyRaise(techStars);
console.log("Salaries with raise: ", techStars.employees);

//Step 6

var worksFromHome = ["Anna", "Sam"];

for (var i = 0; i <techStars.employees.length; i++) {
    if (worksFromHome.includes(techStars.employees[i].firstName)) {
    techStars.employees[i].worksFromHome = true;
} else {
    techStars.employees[i].worksFromHome = false;
    }
}

console.log("JSON: Company Update:  ", techStars);
