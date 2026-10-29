const cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 800, quantity: 2 },
    { name: "Keyboard", price: 1500, quantity: 1 }
];

function getCartSummary(cart){
    let totalItems = 0;
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
    }
    return { totalItems, totalPrice };
}