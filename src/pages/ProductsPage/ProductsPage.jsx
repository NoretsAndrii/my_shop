import { useEffect } from "react";
import css from "./ProductsPage.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/products/productsOps";
import {
  selectFilteredProducts,
  selectIsError,
  selectIsLoading,
  selectProducts,
} from "../../redux/products/productsSlise";
import FilterForm from "../../components/FilterForm/FilterForm";
import SearchForm from "../../components/SearchForm/SearchForm";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

export default function ProductsPage() {
  const products = useSelector(selectFilteredProducts);
  const isProducts = useSelector(selectProducts).length !== 0;
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={css.wrapper}>
      {isLoading && <Loader />}
      {isProducts && (
        <div className={css.search}>
          <SearchForm />
          <FilterForm />
        </div>
      )}
      {products.length > 0 && (
        <ul className={css.list}>
          {products.map((product) => (
            <li className={css.card} key={product.id}>
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      )}
      {isError && <ErrorMessage />}
    </div>
  );
}
