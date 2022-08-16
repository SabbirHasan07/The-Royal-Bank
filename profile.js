document.getElementById('deposit').addEventListener('click', function () {
    const inputDeposit = document.getElementById('deposit-input');
    const depositValue = inputDeposit.value;
    const numberInputvalue = parseFloat(depositValue);
    inputDeposit.value = '';
    if (isNaN(numberInputvalue)) {
        alert('Please enter the amount of money in number');
        return;
    }
    const depositMainvalue = document.getElementById('deposit-main-value');
    const mainValue = depositMainvalue.innerText;
    const numberMainvalue = parseFloat(mainValue);
    const finalDiposit = numberInputvalue + numberMainvalue;
    depositMainvalue.innerText = finalDiposit;


    const depositMainvalueBalance = document.getElementById('deposit-balance');
    const mainValueBalance = depositMainvalueBalance.innerText;
    const numberMainvalueBalance = parseFloat(mainValueBalance);
    const finalDipositBalance = numberInputvalue + numberMainvalueBalance;
    depositMainvalueBalance.innerText = finalDipositBalance;



})
document.getElementById('withdraw').addEventListener('click', function () {
    const inputDepositwith = document.getElementById('input-withdraw');
    const depositValuewith = inputDepositwith.value;
    const numberInputvaluewith = parseFloat(depositValuewith);
    inputDepositwith.value = '';

    if (isNaN(numberInputvaluewith)) {
        alert('Please enter the amount of money in number');
        return;

    }
    const depositMainvaluewith = document.getElementById('deposit-main-value-with');
    const mainValuewith = depositMainvaluewith.innerText;
    const numberMainvaluewith = parseFloat(mainValuewith);
    const depositMainvalueBalancewith = document.getElementById('deposit-balance');
    const mainValueBalancewith = depositMainvalueBalancewith.innerText;
    const numberMainvalueBalancewith = parseFloat(mainValueBalancewith);
    if (numberMainvalueBalancewith >= numberInputvaluewith) {
        const finalDipositwith = numberInputvaluewith + numberMainvaluewith;
        depositMainvaluewith.innerText = finalDipositwith;
        const finalDipositBalancewith = numberMainvalueBalancewith - numberInputvaluewith;
        depositMainvalueBalancewith.innerText = finalDipositBalancewith;

    }
    else {
        alert("Infufficient Balance.");
        return;
    }


})