import { CartItem, CartTotal } from "../../components";
import { useProduct } from "../../context/product-context";

export const Cart = () => {
  const {
    product: { cart },
  } = useProduct();
  return (
    <section className="grid grid-cols-4 grid-rows-2 md:grid-rows-none h-screen">
      <div className="col-span-4 lg:col-span-3 overflow-y-auto max-h-[75%] border rounded-md mt-12 mx-8">
        <h1 className="text-3xl font-semibold text-center my-2">Your Cart</h1>
        {cart.length > 0 &&
          cart.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
      </div>
      <CartTotal />
    </section>
  );
};
