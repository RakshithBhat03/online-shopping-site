import { Link } from "react-router-dom";
import { UPDATE_SEARCH_QUERY } from "../../constants/constants";
import { useProduct } from "../../context/product-context";
export const Navbar = () => {
  const {
    product: { searchQuery },
    dispatch,
  } = useProduct();
  const handleChange = (e) =>
    dispatch({ type: UPDATE_SEARCH_QUERY, payload: e.target.value });
  return (
    <nav>
      <div className="flex items-center justify-between px-8 py-4 bg-blue-600">
        <Link to="/" className="text-white font-semibold text-xl md:text-2xl">
          Home
        </Link>
        <div className="w-[50%] ">
          <input
            value={searchQuery}
            onChange={handleChange}
            type="text"
            className="w-full border pl-1 rounded-sm focus:outline-none py-1"
            placeholder="Search Products"
          />
        </div>
        <Link
          to="/cart"
          className="text-white font-semibold text-xl md:text-2xl">
          Cart
        </Link>
      </div>
    </nav>
  );
};
