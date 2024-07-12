import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

import css from "./CartProductCard.module.css";
import { useDispatch } from "react-redux";
import { changeAmountProduct, deleteProduct } from "../../redux/cart/cartSlice";

export default function CartProductCard({ product }) {
  const dispatch = useDispatch();

  const handleClick = (type) => {
    dispatch(changeAmountProduct({ id: product.id, type }));
  };

  const handleDeleteClick = () => {
    dispatch(deleteProduct(product.id));
  };

  return (
    <div className={css.card}>
      <img className={css.image} src={product.image} alt="" />
      <div className={css.info}>
        <p className={css.title}>{product.title}</p>
        <p className={css.price}>Price: {product.price}</p>
        <div>
          <p className={css.amount}>
            <button
              className={css.button}
              type="button"
              onClick={() => handleClick("minus")}
            >
              <FiMinusCircle size={24} color={"red"} />
            </button>
            {product.amount}
            <button
              className={css.button}
              type="button"
              onClick={() => handleClick("plus")}
            >
              <FiPlusCircle size={24} color={"green"} />
            </button>
          </p>
        </div>
        <p className={css.sum}>
          Total: {(product.amount * product.price).toFixed(2)}
        </p>
      </div>
      <button className={css.close} type="button" onClick={handleDeleteClick}>
        <AiOutlineCloseCircle size={20} />
      </button>
    </div>
  );
}
