import { FaSearch } from "react-icons/fa";
import css from "./SearchForm.module.css";
import { useDispatch } from "react-redux";
import { addSearch } from "../../redux/filters/filtersSlice";

export default function SearchForm() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const value = e.target.value.trim();
    dispatch(addSearch(value));
  };

  return (
    <div className={css.wrapper}>
      <input
        className={css.input}
        name="search"
        type="text"
        placeholder="Search"
        onChange={handleChange}
      />
      <FaSearch className={css.svg} color="gray" />
    </div>
  );
}
