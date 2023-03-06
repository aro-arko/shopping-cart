function updatePhoneNumber(isIncrease){
    const phoneNumberField = document.getElementById('phone-number-field')
        const phoneNumberString = phoneNumberField.value;
        const previousPhoneNumber = parseInt(phoneNumberString)
        let newPhoneNumber;
        if(isIncrease){
            newPhoneNumber = previousPhoneNumber + 1
        }
        else{
            newPhoneNumber = previousPhoneNumber - 1
        }
        phoneNumberField.value = newPhoneNumber

        return newPhoneNumber;
}

function updatePhoneTotalPrice(newPhoneNumber){
    const phonePriceElement = document.getElementById('phone-total');
    const phonePriceTotal = newPhoneNumber * 1219
    phonePriceElement.innerText = phonePriceTotal
}


document.getElementById('btn-phone-plus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(true)
    const phoneTotalAmount = updatePhoneTotalPrice(newPhoneNumber)
    totalOrderAmount()
})

document.getElementById('btn-phone-minus').addEventListener('click', function(){
    const newPhoneNumber = updatePhoneNumber(false)
    updatePhoneTotalPrice(newPhoneNumber)
    totalOrderAmount()
})