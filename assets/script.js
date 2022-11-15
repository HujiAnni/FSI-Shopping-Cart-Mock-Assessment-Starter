let quantityDisplay = document.querySelectorAll(".total-quantity");
let priceDisplay = document.querySelectorAll(".total-price");
let down = document.querySelectorAll("#quantity-down");
let up = document.querySelectorAll("#quantity-up");
let removeItem1 = document.querySelector(".remove.item1");
let cartItem1 = document.querySelector(".cart-item.item1");
let removeItem2 = document.querySelector(".remove.item2");
let cartItem2 = document.querySelector(".cart-item.item2");

let qtys = [0, 0];
let itemPrice = [15, 30];
let tot_price = 0;

for (let i = 0; i < itemPrice.length; i++){
    down[i].addEventListener('click',()=>{
        if (qtys[i] === 0) {
            qtys[i] = 0;
            quantityDisplay[i].textContent = `Quantity: ${qtys[i]}`;
            priceDisplay[i].textContent = `Total Price: $${qtys[i]*itemPrice[i]}`;
        } else {
            qtys[i] -= 1;
            quantityDisplay[i].textContent = `Quantity: ${qtys[i]}`;
            priceDisplay[i].textContent = `Total Price: $${qtys[i]*itemPrice[i]}`;
        }
    });
    
    up[i].addEventListener('click',()=>{
        qtys[i] += 1;
        quantityDisplay[i].textContent = `Quantity: ${qtys[i]}`;
        priceDisplay[i].textContent = `Total Price: $${qtys[i]*itemPrice[i]}`;
    });
}


removeItem1.addEventListener('click',()=>{
    cartItem1.remove();
})

removeItem2.addEventListener('click',()=>{
    cartItem2.remove();
})