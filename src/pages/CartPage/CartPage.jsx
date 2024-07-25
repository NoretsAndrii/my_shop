import { useDispatch, useSelector } from "react-redux";
import css from "./CartPage.module.css";
import { clerarCart, selectCart } from "../../redux/cart/cartSlice";
import CartProductCard from "../../components/CartProductCard/CartProductCard";
import EmptyCart from "../../components/EmptyCart/EmptyCart";
import CustomModal from "../../components/CustomModal/CustomModal";
import { useState } from "react";

export default function CartPage() {
  const cartProducts = useSelector(selectCart);
  const [modalIsOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  function openModal() {
    setIsOpen(true);
    dispatch(clerarCart());
  }

  function closeModal() {
    setIsOpen(false);
  }
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
            <button className={css.button} onClick={openModal}>
              Buy
            </button>
          </div>
        </div>
      )}
      {cartProducts.length === 0 && <EmptyCart />}
      <CustomModal modalIsOpen={modalIsOpen} closeModal={closeModal}>
        <h2>Your order has been successfully completed</h2>
        <button onClick={closeModal}>close</button>
      </CustomModal>
    </>
  );
}
