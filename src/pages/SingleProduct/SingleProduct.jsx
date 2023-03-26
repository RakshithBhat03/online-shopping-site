import { useNavigate, useParams } from "react-router-dom";
import { Loader } from "../../components";
import { ADD_TO_CART } from "../../constants/constants";
import { useProduct } from "../../context/product-context";
import { useAxios } from "../../hooks";

export const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const paramsForSingleProduct = {
    method: "GET",
    url: `https://fakestoreapi.com/products/${id}`,
  };
  const { data, isLoading, isError } = useAxios(paramsForSingleProduct);
  const { title, price, description, category, image, rating } = data;
  const {
    product: { cart },
    dispatch,
  } = useProduct();
  const inCart = cart.some((item) => item.id === data.id);
  const handleAddToCart = () =>
    dispatch({ type: ADD_TO_CART, payload: { ...data, quantity: 1 } });
  const navigateToCart = () => navigate("/cart");

  return (
    <>
      {!isLoading && !isError && (
        <section className="w-full h-full mt-20">
          <div className="flex flex-col items-center rounded-md mx-8 gap-2 p-4 md:p-8 justify-evenly">
            <figure className="w-[15rem] w-[10rem] md:w-[25rem] md:h-[20rem]">
              <img
                src={image}
                className="h-full w-full object-contain"
                alt={title}
              />
            </figure>
            <div className="flex flex-col sm:w-[50%] items-center gap-2">
              <p className="font-semibold overflow-hidden line-clamp-2 text-xl md:text-3xl">
                {title}
              </p>
              <span className="block font-semibold text-lg md:text-2xl">
                ${price}
              </span>
              <span className="block font-semibold text-lg md:text-xl first-letter:capitalize text-blue-500">
                {category}
              </span>
              <span className="text-lg md:text-xl">{rating?.rate}⭐</span>
              <span className="block overflow-hidden line-clamp-6 first-letter:capitalize">
                {description}
              </span>
              {inCart ? (
                <button
                  onClick={navigateToCart}
                  className="bg-green-600 w-full py-2 text-white hover:cursor-pointer rounded-md">
                  Go to Cart
                </button>
              ) : (
                <button
                  onClick={handleAddToCart}
                  className="bg-blue-600 w-full py-2 text-white hover:cursor-pointer rounded-md">
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </section>
      )}
      {isLoading && (
        <div className="w-full h-[40rem] flex items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};
