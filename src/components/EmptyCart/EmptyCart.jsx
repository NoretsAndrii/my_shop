import { Link } from "react-router-dom";
import css from "./EmptyCart.module.css";

export default function EmptyCart() {
  return (
    <div className={css.wrapper}>
      <div className={css.box}>
        <p className={css.text}>Cart is empty</p>
        <Link to="/products" className={css.link}>
          Shop now
        </Link>
      </div>
    </div>
  );
}
