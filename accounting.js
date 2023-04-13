let tableEl = document.getElementById('employeeTable')
let adminstrationNoEl = document.getElementById('adminstrationNo');
let adminstrationAvgEl = document.getElementById('adminstrationAvg');
let adminstrationTotalEl = document.getElementById('adminstrationTotal');
let marketingNoEl = document.getElementById('marketingNo');
let marketingAvgEl = document.getElementById('marketingAvg');
let marketingTotalEl = document.getElementById('marketingTotal');
let developmentNoEl = document.getElementById('developmentNo');
let developmentAvgEl = document.getElementById('developmentAvg');
let developmentTotalEl = document.getElementById('developmentTotal');
let financeNoEl = document.getElementById('financeNo');
let financeAvgEl = document.getElementById('financeAvg');
let financeTotalEl = document.getElementById('financeTotal');
let totalNoEl = document.getElementById('totalNo');
let totalAvgEl = document.getElementById('totalAvg');
let totalTotalEl = document.getElementById('totalTotal');



let salaries;
function getData(){
    let callData = localStorage.getItem('employee')
    let dataArr = JSON.parse(callData)
    for (let i =0;i<dataArr.length;i++){
        new employee(dataArr[i].fName,dataArr[i].department,dataArr[i].level,dataArr[i].img)
    }
     let callData1 = localStorage.getItem('salaries')
     salaries = callData1.split(',').map(Number)
}
let employeeList = [];
 
function employee(fullName,department,level,image){
    this.fName=fullName;
    this.department=department
    this.level=level;
    this.img=image;
    employeeList.push(this);
}
let renderTable = function () {
    let adminstrationNO = 0;
    let adminstrationSum = 0;
    let marketingNO = 0;
    let marketingSum = 0;
    let developmentNO = 0;
    let developmentSum = 0;
    let financeNO = 0;
    let financeSum = 0;
    for (let i =0;i<employeeList.length;i++){
        if(employeeList.i.department == 'adminstration'){
            adminstrationNO = adminstrationNO + 1;
            adminstrationSum+= salaries.i
        }
        else if(employeeList.i.department == 'marketing'){
            marketingNO ++;
            marketingSum+= salaries.i
        }
        else if(employeeList.i.department == 'development'){
            developmentNO ++;
            developmentSum+= salaries.i
        }
        else if(employeeList.i.department == 'finance'){
            financeNO ++;
            financeSum+= salaries.i
        }
    }
    adminstrationNoEl.textContent=adminstrationNO;
    adminstrationAvgEl.textContent=adminstrationSum/adminstrationNO;
    adminstrationTotalEl.textContent=adminstrationSum;
    marketingNoEl.textContent=marketingNO;
    marketingAvgEl.textContent=marketingSum/marketingNO;
    marketingTotalEl.textContent=marketingSum;
    developmentNoEl.textContent=developmentNO;
    developmentAvgEl.textContent=developmentSum/developmentNO;
    developmentTotalEl.textContent=developmentSum;
    financeNoEl.textContent=financeNO;
    financeAvgEl.textContent=financeSum/financeNO;
    financeTotalEl.textContent=financeSum;
    totalNoEl.textContent=adminstrationNO+marketingNO+developmentNO+financeNO;
    totalTotalEl.textContent=adminstrationSum+marketingSum+developmentSum+financeSum;
    totalAvgEl.textContent=(adminstrationSum+marketingSum+developmentSum+financeSum)/(adminstrationNO+marketingNO+developmentNO+financeNO);

    
//     tableEl.appendChild(trEl);
//     let departmentEl = document.createElement('td');
//     departmentEl.textContent = ("Adminstration");
//     trEl.appendChild(departmentEl);
//     let employeeNoEl = document.createElement('td');
//     employeeNoEl.textContent = this.department;
//     trEl.appendChild(employeeNoEl);
//     let averageEl = document.createElement('td');
//     averageEl.textContent = this.department;
//     trEl.appendChild(averageEl);
//     let totalEl = document.createElement('td');
//     totalEl.textContent = this.department;
//     trEl.appendChild(totalEl);
 }
 
renderTable()

getData()
