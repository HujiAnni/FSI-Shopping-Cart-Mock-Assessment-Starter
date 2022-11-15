let quantityDisplay = document.querySelector(".total-quantity");
let priceDisplay = document.querySelector(".total-price");
let down = document.getElementById("quantity-down");
let up = document.getElementById("quantity-up");
let remove = document.querySelector(".remove");
let cart = document.querySelector(".cart-item");

let qty = 0;
let item1Price = 15;
let tot_price = 0;

down.addEventListener('click',()=>{
    if (qty === 0) {
        qty = 0;
        quantityDisplay.textContent = `Quantity: ${qty}`;
        priceDisplay.textContent = `Total Price: $${qty*item1Price}`;
    } else {
        qty -= 1;
        quantityDisplay.textContent = `Quantity: ${qty}`;
        priceDisplay.textContent = `Total Price: $${qty*item1Price}`;
    }
});

up.addEventListener('click',()=>{
    qty += 1;
    quantityDisplay.textContent = `Quantity: ${qty}`;
    priceDisplay.textContent = `Total Price: $${qty*item1Price}`;
});

remove.addEventListener('click',()=>{
    cart.remove();
})