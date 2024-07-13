import { useDispatch } from "react-redux";
import css from "./FilterForm.module.css";
import { addSelectType } from "../../redux/filters/filtersSlice";

export default function FilterForm() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(addSelectType(e.target.value));
  };

  return (
    <div className={css.wrapper}>
      <label className={css.lable} htmlFor="select">
        Felter by
      </label>
      <select
        className={css.select}
        name="select"
        id="select"
        onChange={handleChange}
        defaultValue=""
      >
        <option value=""></option>
        <option value="nameA_Z">name A-Z</option>
        <option value="nameZ_A">name Z-A</option>
        <option value="priceUp">price up</option>
        <option value="priceDown">price down</option>
      </select>
    </div>
  );
}
