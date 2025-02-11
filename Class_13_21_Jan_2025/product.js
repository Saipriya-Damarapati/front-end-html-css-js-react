document.getElementById('add-to-cart').addEventListener('click', function() {
    const productName = document.getElementById('product1').innerText;
    const productPrice = document.getElementById('item-price').innerText;

    const cartItems = document.getElementById('cart-items');
    const cartItem = document.createElement('li');
    cartItem.textContent = `${productName} - ${productPrice}`;
    cartItems.appendChild(cartItem);
    alert(`${productName} added to the cart`);
    
})