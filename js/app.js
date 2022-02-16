function inputAmmount(){
    const totalInput = document.getElementById('total-balance').value;
    const totalInputNumber = parseFloat(totalInput);
    const foodInput = document.getElementById('food-balance').value;
    const foodInputNumber = parseFloat(foodInput);
    const rentInput = document.getElementById('rent-balance').value;
    const rentInputNumber = parseFloat(rentInput);
    const clothInput = document.getElementById('cloth-balance').value;
    const clothInputNumber = parseFloat(clothInput);
    const totalItem = foodInputNumber + rentInputNumber + clothInputNumber;
    const totalBalance = totalInputNumber - totalItem;
    console.log(totalBalance);  
    
    const totalExpen =  document.getElementById('total-expen');
    totalExpen.innerText = totalItem;
    let balance = document.getElementById('balance');
    balance.innerText = totalBalance;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    /* const totalBalance = document.getElementById('total-balance').value;
    const foodBalance = document.getElementById('food-balance').value;
    const rentBalance = document.getElementById('rent-balance').value;
    const clothBalance = document.getElementById('cloth-balance').value;
   
    const totalItem = parseFloat(foodBalance) + parseFloat(rentBalance) + parseFloat(clothBalance);
    
    console.log(totalExpences) */
    inputAmmount();
})