function checkEmployeeStatus(){
    const randomValue = Math.random()*2;

    let status;
    
    if (randomValue < 1) {
        status = "Absent";
    } else {
        status = "Present";
    }
    
    return status;
}

function calculateDailyWage(){
    const workType = Math.floor(Math.random()*3); //to calculate no time, part time and full time
    const wagePerHour = 20;

    let hoursWorked;

    switch(workType){
        case 0: hoursWorked= 0;
                break;
        case 1: hoursWorked= 4;
                break;
        case 2: hoursWorked= 8;
                break;
        default: hoursWorked=0;
     }

     const dailyWage = hoursWorked*wagePerHour;
     return dailyWage;
}


const employeeStatus = checkEmployeeStatus();
console.log(`Employee is ${employeeStatus}`);

if (employeeStatus === "Present") {
    const dailyWage = calculateDailyWage();
    console.log(`Employee's daily wage is ${dailyWage}`);
    const monthlyWage = dailyWage *20;
console.log(`Employee's Monthly wage is ${monthlyWage}`);
} else {
    console.log("Employee's daily wage is 0");
}



