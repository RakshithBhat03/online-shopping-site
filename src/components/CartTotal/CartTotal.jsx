import { useProduct } from "../../context/product-context";
import { getCartTotals } from "../../utils/getCartTotals";
export const CartTotal = () => {
  const {
    product: { cart },
  } = useProduct();
  const { subTotal, tax, delivery, total } = getCartTotals(cart);
  return (
    <section className="border mt-12 mr-8 col-span-4 lg:col-span-1 ml-8 lg:ml-0 max-h-[75%]">
      <h2 className="text-2xl font-semibold text-center my-2">
        Cart Items: <span>{cart.length}</span>
      </h2>
      {cart.length > 0 && (
        <div className="flex flex-col p-8 gap-2 text-xl font-semibold ">
          <span>Sub total: ${subTotal} </span>
          <span>Tax: ${tax}</span>
          <span>Delivery: ${delivery} </span>
          <span className="text-2xl text-blue-500">Total: ${total}</span>
        </div>
      )}
    </section>
  );
};
