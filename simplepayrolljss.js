let payrollList = [];

function calculateNetPay(daysWorked, dailyRate, deductionAmount) {
    const grossPay = daysWorked * dailyRate;
    const netPay = grossPay - deductionAmount;
    return { grossPay, netPay };
}

function displayPayroll() {
    console.log("No.\tEmployee Name\tDays Worked\tDaily Rate\tGross Pay\tDeduction Amount\tNet Pay");
    payrollList.forEach((employee, index) => {
        const { daysWorked, dailyRate, deductionAmount } = employee;
        const { grossPay, netPay } = calculateNetPay(daysWorked, dailyRate, deductionAmount);
        console.log(`${index + 1}\t${employee.name}\t${daysWorked}\t\t${dailyRate}\t\t${grossPay}\t\t${deductionAmount}\t\t${netPay}`);
    });
}

function addEmployee(name, daysWorked, dailyRate, deductionAmount) {
    const employee = { name, daysWorked, dailyRate, deductionAmount };
    payrollList.push(employee);
    displayPayroll();
}

function deleteEmployee(lineNumber) {
    if (lineNumber >= 1 && lineNumber <= payrollList.length) {
        payrollList.splice(lineNumber - 1, 1);
        displayPayroll();
    } else {
        console.log("Invalid line number. Please enter a valid line number.");
    }
}

function openConfirmationModalClear() {
    actionType = 'clear';
    const confirmationMessage = 'Are you sure you want to clear the entire table?';
    openConfirmationModal(confirmationMessage);
}

function openConfirmationModal(message) {
    document.getElementById('confirmationMessage').textContent = message;
    document.getElementById('confirmationModal').style.display = 'block';
}

function closeConfirmationModal() {
    document.getElementById('confirmationModal').style.display = 'none';
}

function confirmAction() {
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'none';

    if (actionType === 'delete') {
        const lineNumber = parseInt(document.getElementById('deleteEmployeeInput').value);
        if (lineNumber >= 1 && lineNumber <= payrollData.length) {
            payrollData.splice(lineNumber - 1, 1);
            updateTable();
        } else {
            alert('Invalid Employee Number');
        }
    } else if (actionType === 'clear') {
        payrollData = [];
        updateTable();
    }
}
