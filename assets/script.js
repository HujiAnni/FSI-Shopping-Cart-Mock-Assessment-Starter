let quantityDisplay = document.querySelector(".total-quantity");
let down = document.getElementById("quantity-down");
let up = document.getElementById("quantity-up");

let qty = 0;

down.addEventListener('click',()=>{
    if (qty === 0) {
        qty = 0;
        quantityDisplay.textContent = `Quantity: ${qty}`;
    } else {
        qty -= 1;
        quantityDisplay.innerHTML = `Quantity: ${qty}`;
    }
});

up.addEventListener('click',()=>{
    qty += 1;
    quantityDisplay.innerHTML = `Quantity: ${qty}`;
});
