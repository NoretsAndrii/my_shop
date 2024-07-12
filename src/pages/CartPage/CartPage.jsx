import { useSelector } from "react-redux";
import css from "./CartPage.module.css";
import { selectCart } from "../../redux/cart/cartSlice";
import CartProductCard from "../../components/CartProductCard/CartProductCard";
import EmptyCart from "../../components/EmptyCart/EmptyCart";

export default function CartPage() {
  const cartProducts = useSelector(selectCart);

  const total = cartProducts.reduce(
    (acc, product) => (acc += product.price * product.amount),
    0
  );

  return (
    <>
      {cartProducts.length !== 0 && (
        <div className={css.wrapper}>
          <ul className={css.list}>
            {cartProducts.map((product) => (
              <li key={product.id}>
                <CartProductCard product={product} />
              </li>
            ))}
          </ul>
          <div className={css.total_box}>
            <p className={css.text}>Total: {total.toFixed(2)}</p>
            <button className={css.button}>Buy</button>
          </div>
        </div>
      )}
      {cartProducts.length === 0 && <EmptyCart />}
    </>
  );
}
