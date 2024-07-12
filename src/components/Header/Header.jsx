import { NavLink } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";
import css from "./Header.module.css";

const buildLinkClass = ({ isActive }) => {
  return isActive ? `${css.active} ${css.link}` : css.link;
};

const buildLinkClassCart = ({ isActive }) =>
  `${buildLinkClass({ isActive })} ${css.cart}`;

export default function Header() {
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
        <BsCart4 size={24} />
      </NavLink>
    </header>
  );
}
