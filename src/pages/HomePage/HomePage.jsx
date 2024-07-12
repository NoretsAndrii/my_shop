import { Link } from "react-router-dom";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.wrapper}>
      <Link to="/products" className={css.link}>
        Shop now
      </Link>
    </div>
  );
}
