function totalOrderAmount(){
    // cart total without tax
    const cartTotal = document.getElementById('cart-total');
    const cartTotalString = cartTotal.innerText;
    const cartTotalPrice = parseInt(cartTotalString)
   
    // phone section
    const phoneTotalPrice = document.getElementById('phone-total')
    const phoneTotalString = phoneTotalPrice.innerText;
    const phoneTotal = parseInt(phoneTotalString)


    // case section
    const caseTotalPrice = document.getElementById('case-total');
    const caseTotalString = caseTotalPrice.innerText;
    const caseTotal = parseInt(caseTotalString);

    // cart total calc without tax
    cartTotal.innerText = phoneTotal + caseTotal

    // Tax section
    const tax = document.getElementById('tax')
    tax.innerText = parseFloat((phoneTotal + caseTotal) * 0.01).toFixed(2)
    const taxString = tax.innerText;
    const taxTotal = parseFloat(taxString)

    // order total ammount
    const orderTotalPrice = document.getElementById('order-price');
    const orderTotal = phoneTotal + caseTotal + taxTotal
    orderTotalPrice.innerText = orderTotal

}