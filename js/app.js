// START CALCULATE FUNCTION 
function inputAmmount(){
    // ALL VARIABLE
    const totalInput = document.getElementById('total-balance').value;
    const foodInput = document.getElementById('food-balance').value;
    const rentInput = document.getElementById('rent-balance').value;
    const clothInput = document.getElementById('cloth-balance').value;
    const totalExpen =  document.getElementById('total-expen');
    const balance = document.getElementById('balance');
    // POPUP WARNING
    const alert = document.getElementById('warning');
    // TOATAL EXPENSES AMMOUNT CALCULATE
    const totalItem = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);
    // TOTAL BALANCE CALCULATE
    const totalBalance = parseFloat(totalInput) - totalItem;
    // CALCULATE CONDITON ADD
    if(isNaN(totalInput) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothInput) || totalInput < 0 || foodInput < 0 || rentInput < 0 || clothInput < 0){
        alert.style.display = 'block';
        totalExpen.innerText = '00';
        balance .innerText = '00';
        return alert;
    }
    else{
        
        totalExpen.innerText = totalItem;
        balance.innerText = totalBalance;
        alert.style.display = 'none';
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
    // SAVING CONDITION ADD
    if(isNaN(saveInput) || saveInput < 0 && balanceInput < remaingAmmount){
        warning1.style.display = 'block'
        remaingAmmount.innerText = '00';
        saveAmmountText.innerText = '00';
        return warning1;
    }
    else{
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