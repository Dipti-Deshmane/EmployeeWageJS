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


const employeeStatus = checkEmployeeStatus();
console.log(`Employee is ${employeeStatus}`);


