'use strict';
let employeeList = [];
function employee(employeeID,fullName,department,level,image,salary){
    this.id = employeeID;
    this.fName=fullName;
    this.department=department
    this.level=level;
    this.img=image;
   
    employeeList.push(this)
}
employee.prototype.Salary= function(){
    if (this.level == "Senior" || this.level == "senior"){
        return  Math.floor(Math.random() * (2000 - 1500) ) + 1500;
    }
    else  if (this.level == "Mid-Senior" || this.level == "mid-senior"){
       return  Math.floor(Math.random() * (1500 - 1000) ) + 1000;
    }
    else  if (this.level == "Junior" || this.level == "junior"){
        return  Math.floor(Math.random() * (1000 - 500) ) + 500;
    }
}
employee.prototype.netSalary= function(){
    parseInt(this.Salary)
    return this.Salary * 0.925
}
employee.prototype.render= function(){
    document.write(`employee name: ${this.fName} and his salary is: ${this.Salary()}/   `)
}
let Ghazi = new employee(1000,'Ghazi Samer','Administration','Senior')
let lan = new employee(1001,'Lana Ali','finance','Senior')
let tamara = new employee(1002,'Tamara Ayoub','Marketing','Senior')
let safi = new employee(1003,'Safi Walid','Administration','Mid-Senior')
let omar = new employee(1004,'Omar Zaid','Development','Senior')
let Rana = new employee(1005,'Rana Saleh','Development','Junior')
let hadi = new employee(1006,'Hadi Ahmad','Finance','Mid-Senior')

for(let i = 0;i<employeeList.length;i++){
    employeeList[i].render();
}