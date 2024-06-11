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

function calculateDailyWage() {
    const workType = Math.floor(Math.random() * 3); // 0: no time, 1: part-time, 2: full-time
    const wagePerHour = 20;

    let hoursWorked;

    switch (workType) {
        case 0:
            hoursWorked = 0;
            break;
        case 1:
            hoursWorked = 4;
            break;
        case 2:
            hoursWorked = 8;
            break;
        default:
            hoursWorked = 0;
     }

     const dailyWage = hoursWorked * wagePerHour;
     return dailyWage;
}

const maxWorkingHours = 160;
const maxWorkingDays = 20;

let totalWorkingHours = 0;
let totalWorkingDays = 0;
let totalWage = 0;

while (totalWorkingHours < maxWorkingHours && totalWorkingDays < maxWorkingDays) {
    const employeeStatus = checkEmployeeStatus();
    console.log(`Day ${totalWorkingDays + 1}: Employee is ${employeeStatus}`);

    if (employeeStatus === "Present") {
        const dailyWage = calculateDailyWage();
        const dailyHours = dailyWage / 20; // Wage per hour is 20
        totalWorkingHours += dailyHours;
        totalWage += dailyWage;

        console.log(`Employee's daily wage is ${dailyWage}`);
        console.log(`Total working hours so far: ${totalWorkingHours}`);
    } else {
        console.log("Employee's daily wage is 0");
    }

    totalWorkingDays++;
}

console.log(`Total working days: ${totalWorkingDays}`);
console.log(`Total working hours: ${totalWorkingHours}`);
console.log(`Total wage for the month: ${totalWage}`);
