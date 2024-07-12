import css from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  return (
    <div className={css.card_box}>
      <img className={css.image} src={product.image} alt="" />
      <p className={css.title}>{product.title}</p>
      <div className={css.price_box}>
        <p>Price: {product.price}</p>
        <button className={css.button}>Add to chart</button>
      </div>
      <p className={css.description}>{product.description}</p>
    </div>
  );
}
