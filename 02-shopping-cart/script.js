// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

const prices = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
prices.forEach(item => {
  console.log(`${item.name} --- ₱${item.totalPrice}`);
});

console.log("------------------------------------------------------");

const descriptions = cart.map(item => `${item.name} - ₱${item.price}`);
descriptions.forEach(desc => {
  console.log(desc);
});

console.log("------------------------------------------------------");

const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
console.log(`The total price is: ₱${totalPrice}`);

console.log("------------------------------------------------------");
