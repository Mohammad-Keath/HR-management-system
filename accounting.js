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

let adminstrationNO = 0;
    let adminstrationSum = 0;
    let marketingNO = 0;
    let marketingSum = 0;
    let developmentNO = 0;
    let developmentSum = 0;
    let financeNO = 0;
    let financeSum = 0;

// let employeeList = [];
// function employee(fullName,department,level,image,salary){
//     this.fName=fullName;
//     this.department=department
//     this.level=level;
//     this.img=image;
//     this.salary=salary;
//     employeeList.push(this);
//     this.renderTable()
// }

    let callData = localStorage.getItem('employee')
    let dataArr = JSON.parse(callData)
    if (dataArr != null){for (let i =0;i<dataArr.length;i++){
        
        if(dataArr[i].department == 'adminstration'){
            adminstrationNO++ ;
            adminstrationSum+= dataArr[i].Salary;
        }
        else if(dataArr[i].department == 'marketing'){
            marketingNO ++;
            marketingSum+= dataArr[i].Salary
        }
        else if(dataArr[i].department == 'development'){
            developmentNO ++;
            developmentSum+= dataArr[i].Salary
        }
        else if(dataArr[i].department == 'finance'){
            financeNO ++;
            financeSum+= dataArr[i].Salary;
                }
        // new employee(dataArr[i].fName,dataArr[i].department,dataArr[i].level,dataArr[i].img,dataArr[i].Salary)
        // dataArr[i].renderTable()
    }}

 console.log(dataArr)
// employee.prototype.renderTable = function () {
    
//         if(this.department == 'adminstration'){
//             adminstrationNO++ ;
//             adminstrationSum+= this.salary;
//         }
//         else if(this.department == 'marketing'){
//             marketingNO ++;
//             marketingSum+= this.salary
//         }
//         else if(this.department == 'development'){
//             developmentNO ++;
//             developmentSum+= this.salary
//         }
//         else if(this.department == 'finance'){
//             financeNO ++;
//             financeSum+= this.salary;
//                 }
//     }
    adminstrationNoEl.textContent=adminstrationNO;
    adminstrationAvgEl.textContent=Math.round(adminstrationSum/adminstrationNO);
    adminstrationTotalEl.textContent=adminstrationSum;
    marketingNoEl.textContent=marketingNO;
    marketingAvgEl.textContent=Math.round(marketingSum/marketingNO);
    marketingTotalEl.textContent=marketingSum;
    developmentNoEl.textContent=developmentNO;
    developmentAvgEl.textContent=Math.round(developmentSum/developmentNO);
    developmentTotalEl.textContent=developmentSum;
    financeNoEl.textContent=financeNO;
    financeAvgEl.textContent=Math.round(financeSum/financeNO);
    financeTotalEl.textContent=financeSum;
    totalNoEl.textContent=adminstrationNO+marketingNO+developmentNO+financeNO;
    totalTotalEl.textContent=adminstrationSum+marketingSum+developmentSum+financeSum;
    totalAvgEl.textContent=Math.round((adminstrationSum+marketingSum+developmentSum+financeSum)/(adminstrationNO+marketingNO+developmentNO+financeNO));

    
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
 


