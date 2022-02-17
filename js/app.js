// START CALCULATE FUNCTION 
function inputAmmount(){
    // ALL VARIABLE
    const totalInput = document.getElementById('total-balance').value;
    const foodInput = document.getElementById('food-balance').value;
    const rentInput = document.getElementById('rent-balance').value;
    const clothInput = document.getElementById('cloth-balance').value;
    const totalExpen =  document.getElementById('total-expen');
    const balance = document.getElementById('balance');
    const balanceWarning = document.getElementById('warning3');

    // POPUP WARNING
    const alert = document.getElementById('warning');

    // TOATAL EXPENSES AMMOUNT CALCULATE
    const totalItem = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);

    // TOTAL BALANCE CALCULATE
    const totalBalance = parseFloat(totalInput) - totalItem;

    // CALCULATE CONDITON ADD
    if(isNaN(totalInput) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothInput) || totalInput < 0 || foodInput < 0 || rentInput < 0 || clothInput < 0 || totalInput == "" || foodInput == "" || rentInput == "" || clothInput == ""){
        alert.style.display = 'block';
        balanceWarning.style.display = 'none';
        totalExpen.innerText = '00';
        balance .innerText = '00';
        return alert;
    }
    else if(totalInput < totalItem){
      
      balanceWarning.style.display = 'block';
      alert.style.display = 'none';
    }
    else{
        
        totalExpen.innerText = totalItem;
        balance.innerText = totalBalance;
        alert.style.display = 'none';
        balanceWarning.style.display = 'none';
    }
}
// END CALCULATE FUNCTION
// START SAVING FUNCTION
function saveAmmount(){
    // ALL VARIABLE
    const totalInput = document.getElementById('total-balance').value;
    const saveInput = document.getElementById('save-input').value;
    const saveAmmount = (parseFloat(totalInput) * parseFloat(saveInput)) / 100;  
    const saveAmmountText = document.getElementById('save-ammount');
    const warning1 = document.getElementById('warning2');
    const remaingAmmount =document.getElementById('remaining-ammount');
    const balanceInput = document.getElementById('balance').innerText;
    const savingArelt = document.getElementById('warning4');
    const irrorAmmount = document.getElementById('warning5');
    // SAVING CONDITION ADD
    if(isNaN(saveInput) || saveInput < 0 && balanceInput < remaingAmmount){
        warning1.style.display = 'block';
        savingArelt.style.display = 'none';
        irrorAmmount.style.display = 'none';
        remaingAmmount.innerText = '00';
        saveAmmountText.innerText = '00';
        return warning1;
    }
    else if(saveInput == ""){
        savingArelt.style.display = 'block';
        warning1.style.display = 'none';
        irrorAmmount.style.display = 'none';
    }
    else if(totalInput == 0){
        irrorAmmount.style.display = 'block';
        savingArelt.style.display = 'none';
        warning1.style.display = 'none';
    }
    else{
        savingArelt.style.display = 'none';
        irrorAmmount.style.display = 'none';
        remaingAmmount.innerText = parseFloat(balanceInput) - parseFloat(saveAmmount);
        saveAmmountText.innerText = saveAmmount; 
        (saveAmmountText.innerText);
        warning1.style.display = 'none';
    }
}
// END SAVING FUNCTION
// START CALCULATE CLICK ITEM
document.getElementById('calculate-btn').addEventListener('click', function(){
    inputAmmount();
});
// END CALCULATE CLICK ITEM 
// START SAVING CLICK ITEM 
document.getElementById('btn-save').addEventListener('click', function(){
    saveAmmount();
});
// END SAVING CLICK ITEM