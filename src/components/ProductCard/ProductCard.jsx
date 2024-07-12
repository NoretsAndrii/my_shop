import { useDispatch } from "react-redux";
import css from "./ProductCard.module.css";
import { addProduct } from "../../redux/cart/cartSlice";

export default function ProductCard({ product }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addProduct(product));
  };

  return (
    <div className={css.card_box}>
      <img className={css.image} src={product.image} alt="" />
      <p className={css.title}>{product.title}</p>
      <div className={css.price_box}>
        <p>Price: {product.price}</p>
        <button className={css.button} onClick={handleClick}>
          Add to chart
        </button>
      </div>
      <p className={css.description}>{product.description}</p>
    </div>
  );
}
