import { useNavigate } from "react-router-dom";
import { ADD_TO_CART } from "../../constants/constants";
import { useProduct } from "../../context/product-context";
export const ProductCard = ({ product }) => {
  const { id, title, price, description, quantity, image, rating } = product;
  const {
    product: { cart },
    dispatch,
  } = useProduct();
  const navigate = useNavigate();
  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch({ type: ADD_TO_CART, payload: { ...product, quantity: 1 } });
  };
  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };
  const inCart = cart.some((item) => item.id === product.id);
  const navigateToCart = (e) => {
    e.stopPropagation();
    navigate("/cart");
  };
  return (
    <div
      onClick={handleNavigate}
      className="w-full h-[26rem] border-2 p-2 rounded-md flex flex-col gap-1 justify-between">
      <figure className="w-full h-[30%] md:h-[40%] hover:cursor-pointer">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </figure>
      <span className="block font-semibold text-md md:text-xl text-blue-400">
        ${price}
      </span>
      <p className="font-semibold overflow-hidden line-clamp-2">{title}</p>
      <span>{rating.rate}⭐</span>
      <span className="block overflow-hidden line-clamp-2 first-letter:capitalize">
        {description}
      </span>
      {inCart ? (
        <button
          onClick={navigateToCart}
          className="bg-green-600 w-full py-2 md:text-md text-sm text-white hover:cursor-pointer rounded-md">
          Go to Cart
        </button>
      ) : (
        <button
          onClick={handleAddToCart}
          className="bg-blue-600 w-full py-2 md:text-md text-sm text-white hover:cursor-pointer rounded-md">
          Add to cart
        </button>
      )}
    </div>
  );
};
