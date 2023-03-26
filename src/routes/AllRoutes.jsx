import { Routes, Route } from "react-router-dom";
import { Cart, ProductListing } from "../pages/";
export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProductListing />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
    </Routes>
  );
};
