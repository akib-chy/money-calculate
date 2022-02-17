function inputAmmount(){
    const totalInput = document.getElementById('total-balance').value;
    const foodInput = document.getElementById('food-balance').value;
    const rentInput = document.getElementById('rent-balance').value;
    const clothInput = document.getElementById('cloth-balance').value;
    const alert = document.getElementById('warning');
    const totalItem = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);
    const totalBalance = parseFloat(totalInput) - totalItem;
    const totalExpen =  document.getElementById('total-expen');
    const balance = document.getElementById('balance');
    
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
function saveAmmount(){
    const totalInput = document.getElementById('total-balance').value;
    const saveInput = document.getElementById('save-input').value;
    const saveAmmount = (parseFloat(totalInput) * parseFloat(saveInput)) / 100;  
    const saveAmmountText = document.getElementById('save-ammount');
    const warning1 = document.getElementById('warning2');

    const remaingAmmount =document.getElementById('remaining-ammount');
    const balanceInput = document.getElementById('balance').innerText;
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

document.getElementById('calculate-btn').addEventListener('click', function(){
    /* const totalBalance = document.getElementById('total-balance').value;
    const foodBalance = document.getElementById('food-balance').value;
    const rentBalance = document.getElementById('rent-balance').value;
    const clothBalance = document.getElementById('cloth-balance').value;
   
    const totalItem = parseFloat(foodBalance) + parseFloat(rentBalance) + parseFloat(clothBalance);
    
    console.log(totalExpences) */
    inputAmmount();
});
document.getElementById('btn-save').addEventListener('click', function(){
    saveAmmount();
})