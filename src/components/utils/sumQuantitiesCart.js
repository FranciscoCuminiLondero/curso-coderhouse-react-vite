export const sumQuantities = (products) => {
  if (!products.length) return 0;
  const totalAmount = products.reduce((accumulator, product) => {
    return accumulator + product.quantity;
  }, 0);
  return totalAmount;
};
