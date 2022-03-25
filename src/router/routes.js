import { Routes, Route } from "react-router-dom";
import { Home, Auth, Cart, Products, Wishlist } from "../pages/index";
import Mockman from "../mockman";
export const Router = () => {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mockman" element={<Mockman />} />
    </Routes>
}