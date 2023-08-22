class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

console.log(`...............................................Step 1 (TCS Working).............................................................`);
const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
for (const employee of arrayEmployees) {
    if (employee.emp_company == "TCS") {
        console.log(`Employee Name : ${employee.emp_name} and Company Name is : ${employee.emp_company}`);
    }
    
}
console.log(`..............................................Step 2 (Finance department and employee name)......................................`);
for (const employee of arrayEmployees) {
    if (employee.emp_dept == "Finance") {
        console.log(`Finance Name : ${employee.emp_dept} and Employee Name is : ${employee.emp_name}`);
    }
}
console.log(`..............................................Step 3 (Name Start With "R").......................................................`);
for (const employee of arrayEmployees) {
    if (employee.emp_name.startsWith("R")) {
        console.log(`Employee Id : ${employee.emp_id}, "Employee name : ${employee.emp_name}", Employee Dept : ${employee.emp_dept}, Employee Salary : ${employee.emp_salary}, Employee Comapany : ${employee.emp_salary} `);
    }
}
console.log(`..............................................Step 4 (Emp's salary is > 75000)....................................................`);
for (const employee of arrayEmployees) {
    if (employee.emp_salary > 75000) {
        console.log(`Employee Salary Greater than 75000 "${employee.emp_name} ${employee.emp_company} ${employee.emp_salary}"`);
    }
}
console.log(`..............................................Step 5 (Emp's salary is >= 50000 and from IT Department)............................`);
for (const employee of arrayEmployees) {
    if (employee.emp_salary >= 50000 && employee.emp_dept == "IT") {
        console.log(`Employee Salary is greater than equal to 50000 : ${employee.emp_id} ${employee.emp_name} "${employee.emp_dept} ${employee.emp_salary}" ${employee.emp_company}`);
    }
}
console.log(`..............................................Step 6 (Company "Infy").............................................................`);
for (const employee of arrayEmployees) {
    if (employee.emp_company == "Infy") {
        console.log(`Employee Id : ${employee.emp_id}, Employee name : ${employee.emp_name}, Employee Dept : ${employee.emp_dept}, Employee Salary : ${employee.emp_salary}, "Employee Comapany : ${employee.emp_company}"`);
    }
}