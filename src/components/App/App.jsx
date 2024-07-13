import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "../../pages/HomePage/HomePage";
import ProductsPage from "../../pages/ProductsPage/ProductsPage";
import ContactsPage from "../../pages/ContactsPage/ContactsPage";
import Header from "../Header/Header";
import CartPage from "../../pages/CartPage/CartPage";
import ProductDetailsPage from "../../pages/ProductDetailsPage/ProductDetailsPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:productId" element={<ProductDetailsPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </>
  );
}

export default App;
