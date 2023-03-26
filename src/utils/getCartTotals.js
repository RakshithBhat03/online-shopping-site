export const getCartTotals = (cart) => {
  const subTotal = cart
    .reduce(
      (acc, curr) => (acc += Number(curr.quantity) * Number(curr.price)),
      0
    )
    .toFixed(2);
  const delivery = Number(subTotal * 0.05).toFixed(2);
  const tax = Number(subTotal * 0.118).toFixed(2);
  const total = (Number(subTotal) + Number(delivery) + Number(tax)).toFixed(2);
  return { subTotal, tax, delivery, total };
};
