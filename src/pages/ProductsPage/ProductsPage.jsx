import { useEffect } from "react";
import css from "./ProductsPage.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/productsOps";
import { selectProducts } from "../../redux/products/productsSlise";

export default function ProductsPage() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

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
