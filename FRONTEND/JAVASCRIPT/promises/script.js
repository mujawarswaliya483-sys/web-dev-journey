
const cart = ["shoes", "shirt", "hat"];

createOrder(cart,function(orderId) {
proceedToPayment(orderId);
}); // This function creates an order based on the items in the cart



// This function takes the orderId and processes the payment