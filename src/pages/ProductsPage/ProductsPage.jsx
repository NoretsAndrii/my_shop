import { useEffect, useState } from "react";
import css from "./ProductsPage.module.css";
import axios from "axios";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch } from "react-redux";
import { fetchProductss } from "../../redux/products/productsOps";

export default function ProductsPage() {
  const dispatch = useDispatch();

  // const [products, setProducts] = useState([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await axios.get("https://fakestoreapi.com/products");
    //   setProducts(response.data);
    // };
    // fetchData();
    dispatch(fetchProductss());
  }, []);

  return (
    <div className={css.wrapper}>
      {products.length > 0 && (
        <ul className={css.list}>
          {products.map((product) => (
            <li className={css.card} key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
