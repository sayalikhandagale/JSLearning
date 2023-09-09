class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const employeeArray = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`........................................Step 1 Emp from Wipro...................................................`);
const wiproEmployees = employeeArray.filter((Employee) => {
    return Employee.emp_company == 'Wipro';
});
for (const element of wiproEmployees) {
    console.log(element);
}

console.log(`........................................Step 2 Emp from IT or HR.................................................`);
const arrayOfITandHR = employeeArray.filter((Employee) => {
   return Employee.emp_dept == "IT" || Employee.emp_dept == "HR";
});
for (const element of  arrayOfITandHR) {
    console.log(element);
}

console.log(`.......................................Step 3 Emp id greater than 50.............................................`);
const array = employeeArray.filter((employee) => {
    return employee.emp_id > 50
});
for (const element of array) {
    console.log(element);
}


console.log(`............................Step 4 Emp names start with letter A or V or M........................................`);
const arr = employeeArray.filter((Employee) => {
    return Employee.emp_name.startsWith("A") || Employee.emp_name.startsWith("V") || Employee.emp_name.startsWith("M")
});
for (const element of arr) {
    console.log(element);
}

console.log(`.....................................Step 5 Emp average salary of all department...................................`);
const empSalary = employeeArray.reduce((runningTotal, element) => {
    return runningTotal + element.emp_salary;
},0);
console.log(`Average Salary Of the employee from all departmenr ${empSalary/employeeArray.length}`);

console.log(`.....................................Step 6 Emp average salary for IT department...................................`);
const empITDept = employeeArray.filter((employee) => {
    return employee.emp_dept == "IT";
});
const sumSalary = empITDept.reduce((runningTotal, element) => {
    return runningTotal + element.emp_salary;
},0);
console.log(`Average salary of employee from IT department ${sumSalary/empITDept.length}`);