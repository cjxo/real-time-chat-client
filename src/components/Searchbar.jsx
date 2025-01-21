import { Input0 } from "./Input";
import styles from "../styles/component.module.css";

const Searchbar = () => {
  return (
    <div className={styles.searchBar}>
      <img
        src="./icons/search-alt-2-svgrepo-com.svg"
        alt="search"
      />
      <Input0 type="search" placeholder="Search" />
    </div>
  );
};

export default Searchbar;