function inputAmmount(){
    const totalInput = document.getElementById('total-balance').value;
    const foodInput = document.getElementById('food-balance').value;
    const rentInput = document.getElementById('rent-balance').value;
    const clothInput = document.getElementById('cloth-balance').value;
    const alert = document.getElementById('warning');
    const totalItem = parseFloat(foodInput) + parseFloat(rentInput) + parseFloat(clothInput);
    const totalBalance = parseFloat(totalInput) - totalItem;
    
    if(isNaN(totalInput) || isNaN(foodInput) || isNaN(rentInput) || isNaN(clothInput) || totalInput < 0 || foodInput < 0 || rentInput < 0 || clothInput < 0){
        alert.style.display = 'block';
    }
    else{
        const totalExpen =  document.getElementById('total-expen');
        totalExpen.innerText = totalItem;
        let balance = document.getElementById('balance');
        balance.innerText = totalBalance;
        alert.style.display = 'none';
    }
}
function saveAmmount(){
    const totalInput = document.getElementById('total-balance').value;
    const saveInput = document.getElementById('save-input').value;
    const saveAmmount = (parseFloat(totalInput) * parseFloat(saveInput)) / 100;  
    const saveAmmountText = document.getElementById('save-ammount');
    saveAmmountText.innerText = saveAmmount; 

    const remaingAmmount =document.getElementById('remaining-ammount');
    const balanceInput = document.getElementById('balance').innerText;
    remaingAmmount.innerText = parseFloat(balanceInput) - parseFloat(saveAmmountText.innerText);
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