document.getElementById('deposit').addEventListener('click',function(){
   
    const inputDeposit = document.getElementById('deposit-input');
    const depositValue = inputDeposit.value;
    const numberInputvalue = parseFloat(depositValue);
    const depositMainvalue =  document.getElementById('deposit-main-value');
    const mainValue = depositMainvalue.innerText;
    const numberMainvalue = parseFloat(mainValue);
    const finalDiposit = numberInputvalue + numberMainvalue;
    depositMainvalue.innerText = finalDiposit;
    inputDeposit.value = '';

    const depositMainvalueBalance =  document.getElementById('deposit-balance');
    const mainValueBalance = depositMainvalueBalance.innerText;
    const numberMainvalueBalance = parseFloat(mainValueBalance);
    const finalDipositBalance = numberInputvalue + numberMainvalueBalance;
    depositMainvalueBalance.innerText = finalDipositBalance;
    


})
document.getElementById('withdraw').addEventListener('click',function(){
    const inputDepositwith = document.getElementById('input-withdraw');
    const depositValuewith = inputDepositwith.value;
    const numberInputvaluewith = parseFloat(depositValuewith);
    const depositMainvaluewith =  document.getElementById('deposit-main-value-with');
    const mainValuewith = depositMainvaluewith.innerText;
    const numberMainvaluewith = parseFloat(mainValuewith);
    const finalDipositwith = numberInputvaluewith + numberMainvaluewith;
    depositMainvaluewith.innerText = finalDipositwith;
    inputDepositwith.value = '';

    const depositMainvalueBalancewith =  document.getElementById('deposit-balance');
    const mainValueBalancewith = depositMainvalueBalancewith.innerText;
    const numberMainvalueBalancewith = parseFloat(mainValueBalancewith);
    const finalDipositBalancewith = numberMainvalueBalancewith - numberInputvaluewith;
    depositMainvalueBalancewith.innerText = finalDipositBalancewith;
    
})