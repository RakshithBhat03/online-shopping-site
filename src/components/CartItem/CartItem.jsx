import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import {
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
} from "../../constants/constants";
import { useProduct } from "../../context/product-context";
export const CartItem = ({ cartItem }) => {
  const { title, price, category, image, quantity } = cartItem;
  const { dispatch } = useProduct();
  const handleCartUpdate = (cartItem, quantity) => {
    dispatch({ type: UPDATE_CART_QUANTITY, payload: { cartItem, quantity } });
  };
  const removeFromCart = () => {
    dispatch({ type: REMOVE_FROM_CART, payload: cartItem });
  };
  return (
    <div className="flex border p-4 gap-8 justify-center items-center">
      <figure className="w-[8rem] h-[8rem] md:w-[13rem] md:h-[13rem]">
        <img className="h-full w-full" src={image} alt={title} />
      </figure>
      <div className="flex flex-col w-[50%] gap-2">
        <p className="font-semibold overflow-hidden line-clamp-2 text-lg md:text-2xl">
          {title}
        </p>
        <span className="block font-semibold text-md md:text-xl">${price}</span>
        <span className="block font-semibold text-sm md:text-md first-letter:capitalize text-blue-500">
          {category}
        </span>
        <div className="flex gap-2">
          <button
            onClick={() => handleCartUpdate(cartItem, quantity - 1)}
            className="bg-blue-500 text-white font-semibold flex items-center justify-center rounded-full ">
            <RemoveIcon />
          </button>
          <span>{quantity}</span>
          <button
            onClick={() => handleCartUpdate(cartItem, quantity + 1)}
            className="bg-blue-500 text-white font-semibold flex items-center justify-center rounded-full ">
            <AddIcon />
          </button>
        </div>
        <button
          onClick={removeFromCart}
          className="bg-rose-500 text-sm md:text-md sm:w-[50%] font-semibold md:w-[30%] lg:w-[25%] py-2 text-white hover:cursor-pointer rounded-md">
          Remove
        </button>
      </div>
    </div>
  );
};
