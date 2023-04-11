console.log('Exporting module');
const shoppingCost = 10;
const cost = [];
export const addToCard = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity},${product} added to cart `);
};
const totalPrice = 237;
const totalQuantity = 32;
export { totalPrice, totalQuantity as tq };
