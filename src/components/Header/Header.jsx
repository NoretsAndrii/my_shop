import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import css from "./Header.module.css";
import { useSelector } from "react-redux";
import { selectCart } from "../../redux/cart/cartSlice";

const buildLinkClass = ({ isActive }) => {
  return isActive ? `${css.active} ${css.link}` : css.link;
};

const buildLinkClassCart = ({ isActive }) =>
  `${buildLinkClass({ isActive })} ${css.cart}`;

export default function Header() {
  const totalCart = useSelector(selectCart);
  const totalProducts = totalCart.reduce(
    (sum, item) => (sum += item.amount),
    0
  );

  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
        <NavLink to="/contacts" className={buildLinkClass}>
          Contacts
        </NavLink>
      </nav>
      <NavLink to="/cart" className={buildLinkClassCart}>
        <BsCart4 size={32} />
        {totalProducts !== 0 && (
          <div className={css.total}>{totalProducts}</div>
        )}
      </NavLink>
    </header>
  );
}
