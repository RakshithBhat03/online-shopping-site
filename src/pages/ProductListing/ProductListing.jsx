import { ProductCard, Loader } from "../../components";
import { useProduct } from "../../context/product-context";
import { useAxios, useDocumentTitle } from "../../hooks/";
const paramsForAllProducts = {
  method: "GET",
  url: "https://fakestoreapi.com/products",
};
export const ProductListing = () => {
  const { data, isLoading, isError } = useAxios(paramsForAllProducts);
  const {
    product: { searchQuery },
  } = useProduct();
  useDocumentTitle(`Product Listing`);
  const listing = data.filter((product) =>
    JSON.stringify(product).toLowerCase().includes(searchQuery)
  );
  return (
    <>
      {listing.length > 0 && (
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 m-8">
          {listing.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
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
