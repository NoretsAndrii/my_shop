import { Link, useParams } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import css from "./ProductDetailsPage.module.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductById } from "../../redux/products/productsOps";
import {
  clearProductDetails,
  selectIsLoading,
  SelectProductDetails,
} from "../../redux/products/productsSlise";
import Loader from "../../components/Loader/Loader";
import { addProduct } from "../../redux/cart/cartSlice";

export default function ProductDetailsPage() {
  const { productId } = useParams();
  const product = useSelector(SelectProductDetails);
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(productId));
    return () => {
      dispatch(clearProductDetails());
    };
  }, [dispatch, productId]);

  const handleClick = () => {
    dispatch(addProduct(product));
  };

  console.log(productId);
  return (
    <div className={css.wrapper}>
      <Link className={css.link} to={"/products"}>
        <IoMdArrowRoundBack size={24} />
        Go back
      </Link>{" "}
      {isLoading && <Loader />}
      {product && (
        <div className={css.card}>
          <h3 className={css.title}>{product.title}</h3>
          <div className={css.info}>
            <div className={css.div}>
              <img className={css.image} src={product.image} alt="" />
              <p className={css.price}>Price: {product.price}</p>
              <p className={css.category}>Category: {product.category}</p>
            </div>
            <div className={css.description_box}>
              <p className={css.description}>{product.description}</p>
              <button className={css.button} onClick={handleClick}>
                Add to chart
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
