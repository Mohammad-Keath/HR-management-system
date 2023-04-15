'use strict';
const form = document.getElementById('form');
const adminstrationSec = document.getElementById('adminstrationSec')
const marketingSec = document.getElementById('marketingSec')
const developmentSec = document.getElementById('developmentSec')
const financeSec = document.getElementById('financeSec')

let employeeList = [];
function employee(fullName,department,level,image,salary){
    this.fName=fullName;
    this.department=department
    this.level=level;
    this.img=image;
    this.Salary= salary || this.calculateSalary()
   
    employeeList.push(this)
}
employee.prototype.idNum = function(){
     let id = (Math.floor(Math.random()*9000)+1000)
    for (let i=0;i<employeeList.length;i++){
        if (employeeList[i].idNum == id ){
            this.idNum()
        }
    }
   return id
}
employee.prototype.calculateSalary= function(){
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
    
    if(this.department == "adminstration"){
        
    let divEl = document.createElement('div')

    let imgEl = document.createElement('img')
    imgEl.src=this.img
    divEl.appendChild(imgEl)

    let nameEl = document.createElement('t3')
    nameEl.textContent=`Name: ${this.fName} `
    divEl.appendChild(nameEl)

    let idEl = document.createElement('p')
    idEl.textContent=`ID: ${this.idNum()} `
    divEl.appendChild(idEl)

    let departmentEl = document.createElement('p')
    departmentEl.textContent=`Department: ${this.department} `
    divEl.appendChild(departmentEl)

    let levelEl = document.createElement('p')
    levelEl.textContent= `Level: ${this.level} `
    divEl.appendChild(levelEl)

    let salaryEl = document.createElement('p')
    salaryEl.textContent=`Salary: ${this.Salary} JD`
    divEl.appendChild(salaryEl)
    adminstrationSec.appendChild(divEl)}
    else if(this.department == "marketing"){

        let divEl = document.createElement('div')
        

        let imgEl = document.createElement('img')
        imgEl.src=this.img
        divEl.appendChild(imgEl)
    
        let nameEl = document.createElement('t3')
        nameEl.textContent=`Name: ${this.fName} `
        divEl.appendChild(nameEl)
    
        let idEl = document.createElement('p')
        idEl.textContent=`ID: ${this.idNum()} `
        divEl.appendChild(idEl)
    
        let departmentEl = document.createElement('p')
        departmentEl.textContent=`Department: ${this.department} `
        divEl.appendChild(departmentEl)
    
        let levelEl = document.createElement('p')
        levelEl.textContent= `Level: ${this.level} `
        divEl.appendChild(levelEl)
    
        let salaryEl = document.createElement('p')
        salaryEl.textContent=`Salary: ${this.Salary} JD`
        divEl.appendChild(salaryEl)
        marketingSec.appendChild(divEl)}
        else if(this.department == "development"){
           
            let divEl = document.createElement('div')
            

            let imgEl = document.createElement('img')
            imgEl.src=this.img
            divEl.appendChild(imgEl)
        
            let nameEl = document.createElement('t3')
            nameEl.textContent=`Name: ${this.fName} `
            divEl.appendChild(nameEl)
        
            let idEl = document.createElement('p')
            idEl.textContent=`ID: ${this.idNum()} `
            divEl.appendChild(idEl)
        
            let departmentEl = document.createElement('p')
            departmentEl.textContent=`Department: ${this.department} `
            divEl.appendChild(departmentEl)
        
            let levelEl = document.createElement('p')
            levelEl.textContent= `Level: ${this.level} `
            divEl.appendChild(levelEl)
        
            let salaryEl = document.createElement('p')
            salaryEl.textContent=`Salary: ${this.Salary} JD`
            divEl.appendChild(salaryEl)
            developmentSec.appendChild(divEl)}
            else if(this.department == "finance"){
               
                let divEl = document.createElement('div')
                
                let imgEl = document.createElement('img')
                imgEl.src=this.img
                divEl.appendChild(imgEl)
            
                let nameEl = document.createElement('t3')
                nameEl.textContent=`Name: ${this.fName} `
                divEl.appendChild(nameEl)
            
                let idEl = document.createElement('p')
                idEl.textContent=`ID: ${this.idNum()} `
                divEl.appendChild(idEl)
            
                let departmentEl = document.createElement('p')
                departmentEl.textContent=`Department: ${this.department} `
                divEl.appendChild(departmentEl)
            
                let levelEl = document.createElement('p')
                levelEl.textContent= `Level: ${this.level} `
                divEl.appendChild(levelEl)
            
                let salaryEl = document.createElement('p')
                salaryEl.textContent=`Salary: ${this.Salary} JD`
                divEl.appendChild(salaryEl)
                financeSec.appendChild(divEl)}

}
let Ghazi = new employee('Ghazi Samer','adminstration','Senior','./photoes/Ghazi.jpg')
let lana = new employee('Lana Ali','finance','Senior','./photoes/Lana.jpg')
let tamara = new employee('Tamara Ayoub','marketing','Senior','./photoes/Tamara.jpg')
let safi = new employee('Safi Walid','adminstration','Mid-Senior','./photoes/Safi.jpg')
let omar = new employee('Omar Zaid','development','Senior','./photoes/Omar.jpg')
let Rana = new employee('Rana Saleh','development','Junior','./photoes/Rana.jpg')
let hadi = new employee('Hadi Ahmad','finance','Mid-Senior','./photoes/Hadi.jpg')

for(let i = 0;i<employeeList.length;i++){
    employeeList[i].render();
    
}


form.addEventListener('submit',submition)
function submition(event){
    event.preventDefault()
    let fName = event.target.fName.value;
    let department = event.target.department.value;
    let level = event.target.level.value;
    let img = event.target.imageLink.value;
    let newEmployee = new employee(fName,department,level,img)
    newEmployee.render()
    saveData(employeeList)
}
console.log(employeeList[0].Salary)
function saveData(data){
    let stringifyData = JSON.stringify(data)
    localStorage.setItem('employee',stringifyData)
}
function getData(){
    let callData = localStorage.getItem('employee')
    let dataArr = JSON.parse(callData)
    if (dataArr != null){for (let i =7;i<dataArr.length;i++){
        new employee(dataArr[i].fName,dataArr[i].department,dataArr[i].level,dataArr[i].img,dataArr[i].Salary)
        employeeList[i].render();
    }
}
}
  
    

// console.log(employeeList)
getData();
